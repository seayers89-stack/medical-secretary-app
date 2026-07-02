import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-06-20' })
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const SITE_URL = Deno.env.get('SITE_URL') || 'https://www.veyn.uk'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const PASS_PLANS: Record<string, { label: string; amount: number; days: number }> = {
  '2week':  { label: '2-Week Pass',  amount: 7500,  days: 14  },
  '1month': { label: '1-Month Pass', amount: 13000, days: 30  },
  '6month': { label: '6-Month Pass', amount: 60000, days: 182 },
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  const authHeader = req.headers.get('Authorization')
  if (!authHeader) return new Response('Unauthorized', { status: 401, headers: CORS })

  const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: { user }, error: userError } = await callerClient.auth.getUser()
  if (userError || !user) return new Response('Unauthorized', { status: 401, headers: CORS })

  const body = await req.json()
  const { type } = body
  const userId = user.id

  const adminClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

  let lineItem: Stripe.Checkout.SessionCreateParams.LineItem
  let metadata: Record<string, string> = { user_id: userId, type }
  let successUrl: string
  let cancelUrl: string

  if (type === 'contact') {
    const { secretary_id, secretary_name } = body
    if (!secretary_id) return new Response('Missing secretary_id', { status: 400, headers: CORS })
    lineItem = {
      price_data: {
        currency: 'gbp',
        unit_amount: 1200,
        product_data: { name: `Contact unlock — ${secretary_name || 'secretary'}` },
      },
      quantity: 1,
    }
    metadata.secretary_id = secretary_id
    successUrl = `${SITE_URL}/account/payment-success.html?type=contact&secretary_id=${secretary_id}`
    cancelUrl = `${SITE_URL}/account/view-secretary.html?id=${secretary_id}`

  } else if (type === 'pass') {
    const { plan } = body
    const p = PASS_PLANS[plan]
    if (!p) return new Response('Invalid plan', { status: 400, headers: CORS })
    lineItem = {
      price_data: {
        currency: 'gbp',
        unit_amount: p.amount,
        product_data: { name: p.label },
      },
      quantity: 1,
    }
    metadata.plan = plan
    metadata.days = String(p.days)
    successUrl = `${SITE_URL}/account/payment-success.html?type=pass`
    cancelUrl = `${SITE_URL}/account/search-secretaries.html`

  } else if (type === 'job_posting') {
    const { draft } = body
    if (!draft) return new Response('Missing draft', { status: 400, headers: CORS })
    const { data: savedDraft, error: draftError } = await adminClient
      .from('pending_job_drafts')
      .insert({ profile_id: userId, draft })
      .select('id')
      .single()
    if (draftError) return new Response('Could not save job draft', { status: 500, headers: CORS })
    lineItem = {
      price_data: {
        currency: 'gbp',
        unit_amount: 2900,
        product_data: { name: 'Job posting bundle' },
      },
      quantity: 1,
    }
    metadata.draft_id = savedDraft.id
    successUrl = `${SITE_URL}/account/payment-success.html?type=job_posting`
    cancelUrl = `${SITE_URL}/account/post-job.html`

  } else if (type === 'premium_boost') {
    lineItem = {
      price_data: {
        currency: 'gbp',
        unit_amount: 800,
        product_data: { name: 'Premium boost — 30 days' },
      },
      quantity: 1,
    }
    successUrl = `${SITE_URL}/account/payment-success.html?type=premium_boost`
    cancelUrl = `${SITE_URL}/account/profile.html`

  } else if (type === 'specialist_course') {
    const { slug, title, price } = body
    if (!slug || !price) return new Response('Missing course details', { status: 400, headers: CORS })
    lineItem = {
      price_data: {
        currency: 'gbp',
        unit_amount: Math.round(price * 100),
        product_data: { name: `${title} specialist course` },
      },
      quantity: 1,
    }
    metadata.slug = slug
    metadata.price = String(price)
    successUrl = `${SITE_URL}/account/payment-success.html?type=specialist_course&slug=${slug}`
    cancelUrl = `${SITE_URL}/account/specialist-course.html?slug=${slug}`

  } else if (type === 'specialist_bundle') {
    const { slugs } = body
    if (!slugs || !slugs.length) return new Response('Missing slugs', { status: 400, headers: CORS })
    lineItem = {
      price_data: {
        currency: 'gbp',
        unit_amount: 3500,
        product_data: { name: '3-course specialist bundle' },
      },
      quantity: 1,
    }
    metadata.slugs = slugs.join(',')
    successUrl = `${SITE_URL}/account/payment-success.html?type=specialist_bundle`
    cancelUrl = `${SITE_URL}/account/academy.html`

  } else {
    return new Response('Unknown type', { status: 400, headers: CORS })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [lineItem],
      metadata,
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: user.email ?? undefined,
    })
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }
})
