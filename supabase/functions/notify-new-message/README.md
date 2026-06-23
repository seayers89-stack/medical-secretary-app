# Deploying the new-message email notification

This Edge Function emails a user when they receive a new message. It needs Resend (free, 3,000 emails/month) and the Supabase CLI.

## 1. Get a Resend API key
1. Sign up at https://resend.com (free)
2. Verify a sending domain (or use their shared test domain for development)
3. Create an API key under **API Keys**

## 2. Install the Supabase CLI and link this project
```
npm install -g supabase
supabase login
supabase link --project-ref kdknadmgbiebyuqwigfi
```

## 3. Set the function secrets
```
supabase secrets set RESEND_API_KEY=your_resend_key
supabase secrets set SITE_URL=https://your-deployed-site-url
```
(`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically to Edge Functions — no need to set them.)

## 4. Deploy the function
```
supabase functions deploy notify-new-message
```

## 5. Update the "from" address
Edit `index.ts` and change `notifications@veyn.app` to an address on a domain you've verified in Resend (Resend's test domain only works for sending to your own verified email while testing).

## 6. Create the Database Webhook
In the Supabase dashboard: **Database → Webhooks → Create a new webhook**
- Table: `messages`
- Events: `INSERT`
- Type: `Supabase Edge Functions`
- Edge Function: `notify-new-message`

That's it — every new row in `messages` will now trigger an email to the recipient.
