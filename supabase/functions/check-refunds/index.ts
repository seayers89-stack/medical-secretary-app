import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-06-20' })
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const CRON_SECRET = Deno.env.get('CRON_SECRET')!

serve(async (req) => {
  // Verify this request came from our GitHub Actions cron
  const authHeader = req.headers.get('Authorization')
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  const db = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

  // Find £12 unlocks older than 14 days, not yet refunded, with a payment intent
  const cutoff = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  const { data: unlocks, error } = await db
    .from('unlocks')
    .select(`
      id,
      consultant_id,
      secretary_id,
      created_at,
      stripe_payment_intent_id,
      profiles!unlocks_consultant_id_fkey (first_name, last_name, email),
      secretary:profiles!unlocks_secretary_id_fkey (first_name, last_name)
    `)
    .eq('price_paid', 12)
    .is('refunded_at', null)
    .not('stripe_payment_intent_id', 'is', null)
    .lt('created_at', cutoff)

  if (error) {
    console.error('Failed to fetch unlocks:', error)
    return new Response('DB error', { status: 500 })
  }

  if (!unlocks || unlocks.length === 0) {
    return new Response(JSON.stringify({ refunded: 0 }), { status: 200 })
  }

  let refundedCount = 0
  const results = []

  for (const unlock of unlocks) {
    // Check if the secretary has ever sent a message in this thread
    const { data: secretaryMessage } = await db
      .from('messages')
      .select('id')
      .eq('consultant_id', unlock.consultant_id)
      .eq('secretary_id', unlock.secretary_id)
      .eq('sender_id', unlock.secretary_id)
      .limit(1)
      .maybeSingle()

    if (secretaryMessage) {
      // Secretary has replied — no refund
      results.push({ id: unlock.id, action: 'skipped', reason: 'secretary replied' })
      continue
    }

    // No reply — issue the refund via Stripe
    try {
      await stripe.refunds.create({
        payment_intent: unlock.stripe_payment_intent_id,
        reason: 'requested_by_customer',
      })
    } catch (stripeErr) {
      console.error(`Stripe refund failed for unlock ${unlock.id}:`, stripeErr)
      results.push({ id: unlock.id, action: 'error', reason: stripeErr.message })
      continue
    }

    // Mark the unlock as refunded
    await db
      .from('unlocks')
      .update({ refunded_at: new Date().toISOString() })
      .eq('id', unlock.id)

    // Send explanation email to the consultant via Resend
    const esc = (s: string) => String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#x27;')

    const consultantProfile = Array.isArray(unlock.profiles) ? unlock.profiles[0] : unlock.profiles
    const secretaryProfile = Array.isArray(unlock.secretary) ? unlock.secretary[0] : unlock.secretary
    const consultantEmail = consultantProfile?.email
    const consultantName = esc(consultantProfile?.first_name || 'there')
    const secretaryName = secretaryProfile
      ? `${esc(secretaryProfile.first_name)} ${esc(secretaryProfile.last_name)}`
      : 'the secretary'
    const unlockedDate = new Date(unlock.created_at).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric',
    })

    if (consultantEmail) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Veyn <noreply@veyn.uk>',
          to: consultantEmail,
          subject: 'Your £12 contact unlock has been refunded',
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; color: #1B2430;">
              <div style="padding: 32px 0 16px;">
                <span style="font-family: Georgia, serif; font-size: 22px; font-weight: 600;">veyn</span>
              </div>
              <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 12px;">Your contact unlock has been refunded</h2>
              <p style="font-size: 15px; line-height: 1.7; color: #5C6470;">Hi ${consultantName},</p>
              <p style="font-size: 15px; line-height: 1.7; color: #5C6470;">
                You unlocked a conversation with <strong style="color: #1B2430;">${secretaryName}</strong> on ${unlockedDate}.
                As ${secretaryName} has not replied within 14 days, we have automatically refunded your <strong style="color: #1B2430;">£12.00</strong>
                to your original payment method.
              </p>
              <p style="font-size: 15px; line-height: 1.7; color: #5C6470;">
                The refund will appear within 5–10 business days depending on your bank.
                The conversation thread has been closed.
              </p>
              <p style="font-size: 15px; line-height: 1.7; color: #5C6470;">
                If you'd like to find another secretary, you're welcome to browse and unlock a new conversation at any time.
              </p>
              <div style="margin: 28px 0;">
                <a href="https://www.veyn.uk/account/search-secretaries.html"
                   style="display: inline-block; background: #1B2430; color: #F7F4ED; font-size: 14px; font-weight: 600;
                          padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                  Browse secretaries
                </a>
              </div>
              <p style="font-size: 13px; color: #5C6470; border-top: 1px solid rgba(27,36,48,0.1); padding-top: 20px; margin-top: 32px;">
                Questions? Reply to this email or contact us at
                <a href="mailto:hello@veyn.uk" style="color: #B8924A;">hello@veyn.uk</a>.<br>
                Veyn · VeynUK Ltd · 43 Crummock Place, Milton Keynes, MK2 3ER
              </p>
            </div>
          `,
        }),
      })
    }

    refundedCount++
    results.push({ id: unlock.id, action: 'refunded', consultant: consultantEmail })
  }

  console.log(`check-refunds complete: ${refundedCount} refunded of ${unlocks.length} checked`)
  return new Response(JSON.stringify({ refunded: refundedCount, total_checked: unlocks.length, results }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
})
