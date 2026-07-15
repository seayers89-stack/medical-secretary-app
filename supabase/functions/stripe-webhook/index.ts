import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14'
import { grantPurchaseEffect } from '../_shared/grant-purchase.ts'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-06-20' })
const WEBHOOK_SECRET = Deno.env.get('STRIPE_WEBHOOK_SECRET')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

serve(async (req) => {
  const reqId = req.headers.get('X-Request-ID') || crypto.randomUUID()
  console.log(`[${reqId}] stripe-webhook called`)
  const signature = req.headers.get('stripe-signature')
  if (!signature) return new Response('No signature', { status: 400 })

  const body = await req.text()
  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return new Response(`Webhook error: ${err.message}`, { status: 400 })
  }

  // Reject events older than 5 minutes to prevent replay attacks
  if (Math.abs(Date.now() - event.created * 1000) > 300_000) {
    console.warn(`Rejected stale webhook event ${event.id} created at ${event.created}`)
    return new Response('Event too old', { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return new Response('OK', { status: 200 })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const meta = session.metadata
  if (!meta) return new Response('No metadata', { status: 400 })

  const { type, user_id } = meta
  if (!type || !user_id) return new Response('Missing metadata fields', { status: 400 })

  const db = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

  const paymentIntentId = (session.payment_intent as string) ?? null

  try {
    await grantPurchaseEffect(db, type, user_id, meta, paymentIntentId)

    const creditApplied = parseInt(meta.credit_applied ?? '', 10)
    if (!isNaN(creditApplied) && creditApplied > 0) {
      await db.from('account_credit_ledger').insert({
        profile_id: user_id,
        amount_pence: -creditApplied,
        reason: 'spend',
        stripe_payment_intent_id: paymentIntentId,
      })
    }
  } catch (err) {
    console.error('Webhook handler error:', err)
    return new Response('Handler error', { status: 500 })
  }

  return new Response('OK', { status: 200 })
})
