import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

type AdminClient = ReturnType<typeof createClient>

export const STRIPE_MIN_GBP_PENCE = 30

// Sum of every account_credit_ledger row for a profile — positive rows are
// credit granted, negative rows are credit spent.
export async function getCreditBalance(db: AdminClient, profileId: string): Promise<number> {
  const { data } = await db
    .from('account_credit_ledger')
    .select('amount_pence')
    .eq('profile_id', profileId)
  return (data ?? []).reduce((sum: number, r: { amount_pence: number }) => sum + r.amount_pence, 0)
}

// Per-type purchase side effects — the single source of truth for "what does
// buying this actually grant". Used both by stripe-webhook (after Stripe
// confirms payment) and by create-checkout-session for the zero-cost path
// where credit fully covers the price and no Stripe session is ever created.
export async function grantPurchaseEffect(
  db: AdminClient,
  type: string,
  userId: string,
  meta: Record<string, string>,
  stripePaymentIntentId: string | null,
): Promise<void> {
  if (type === 'contact') {
    await db.from('unlocks').insert({
      consultant_id: userId,
      secretary_id: meta.secretary_id,
      price_paid: 12,
      stripe_payment_intent_id: stripePaymentIntentId,
    })

  } else if (type === 'pass') {
    const days = parseInt(meta.days, 10)
    if (isNaN(days) || days < 1 || days > 365) throw new Error('Invalid pass duration')
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
    await db.from('consultant_profiles')
      .update({ pass_type: meta.plan, pass_expires_at: expires })
      .eq('profile_id', userId)

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
        consultant_id: userId,
        title: String(d.title).slice(0, 500),
        specialty: d.specialty,
        systems: Array.isArray(d.systems) ? d.systems : [],
        location: d.location,
        day_rate: d.day_rate,
        description: d.description ? String(d.description).slice(0, 5000) : null,
        status: 'open',
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      })
    }

  } else if (type === 'premium_boost') {
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    await db.from('secretary_profiles')
      .update({ premium_active: true, premium_expires_at: expires })
      .eq('profile_id', userId)

  } else if (type === 'specialist_course') {
    const price = parseFloat(meta.price)
    if (isNaN(price) || price <= 0 || price > 1000) throw new Error('Invalid course price')
    await db.from('specialist_course_purchases').insert({
      profile_id: userId,
      course_slug: meta.slug,
      price_paid: price,
    })

  } else if (type === 'specialist_bundle') {
    const slugs = meta.slugs.split(',')
    const rows = slugs.map((slug: string) => ({
      profile_id: userId,
      course_slug: slug,
      price_paid: parseFloat((35 / 3).toFixed(2)),
    }))
    await db.from('specialist_course_purchases').insert(rows)
  }
}
