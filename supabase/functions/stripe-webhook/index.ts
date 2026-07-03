import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-06-20' })
const WEBHOOK_SECRET = Deno.env.get('STRIPE_WEBHOOK_SECRET')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

serve(async (req) => {
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

  if (event.type !== 'checkout.session.completed') {
    return new Response('OK', { status: 200 })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const meta = session.metadata
  if (!meta) return new Response('No metadata', { status: 400 })

  const { type, user_id } = meta
  if (!type || !user_id) return new Response('Missing metadata fields', { status: 400 })

  const db = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

  try {
    if (type === 'contact') {
      await db.from('unlocks').insert({
        consultant_id: user_id,
        secretary_id: meta.secretary_id,
        price_paid: 12,
        stripe_payment_intent_id: (session.payment_intent as string) ?? null,
      })

    } else if (type === 'pass') {
      const days = parseInt(meta.days, 10)
      if (isNaN(days) || days < 1 || days > 365) throw new Error('Invalid pass duration')
      const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
      await db.from('consultant_profiles')
        .update({ pass_type: meta.plan, pass_expires_at: expires })
        .eq('profile_id', user_id)

    } else if (type === 'job_posting') {
      // Atomically claim the draft (DELETE + RETURNING) to prevent replay processing
      const { data: saved } = await db
        .from('pending_job_drafts')
        .delete()
        .eq('id', meta.draft_id)
        .select('draft')
        .single()
      if (saved?.draft) {
        const d = saved.draft
        if (!d.title || typeof d.title !== 'string' || d.title.length > 500) throw new Error('Invalid job title')
        if (d.day_rate !== undefined && (typeof d.day_rate !== 'number' || d.day_rate < 0 || d.day_rate > 100000)) throw new Error('Invalid day rate')
        await db.from('job_postings').insert({
          consultant_id: user_id,
          title: String(d.title).slice(0, 500),
          specialty: d.specialty,
          systems: Array.isArray(d.systems) ? d.systems : [],
          location: d.location,
          day_rate: d.day_rate,
          description: d.description ? String(d.description).slice(0, 5000) : null,
          status: 'open',
        })
      }

    } else if (type === 'premium_boost') {
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      await db.from('secretary_profiles')
        .update({ premium_active: true, premium_expires_at: expires })
        .eq('profile_id', user_id)

    } else if (type === 'specialist_course') {
      const price = parseFloat(meta.price)
      if (isNaN(price) || price <= 0 || price > 1000) throw new Error('Invalid course price')
      await db.from('specialist_course_purchases').insert({
        profile_id: user_id,
        course_slug: meta.slug,
        price_paid: price,
      })

    } else if (type === 'specialist_bundle') {
      const slugs = meta.slugs.split(',')
      const rows = slugs.map((slug: string) => ({
        profile_id: user_id,
        course_slug: slug,
        price_paid: parseFloat((35 / 3).toFixed(2)),
      }))
      await db.from('specialist_course_purchases').insert(rows)
    }
  } catch (err) {
    console.error('Webhook handler error:', err)
    return new Response('Handler error', { status: 500 })
  }

  return new Response('OK', { status: 200 })
})
