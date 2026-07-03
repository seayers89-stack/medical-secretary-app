// Veyn: emails the recipient when a new message arrives.
// Triggered by a Supabase Database Webhook on messages INSERT (configure in
// the dashboard — see supabase/functions/notify-new-message/README.md).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SITE_URL = Deno.env.get("SITE_URL") ?? "https://example.com";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const message = payload.record;

    if (!message) {
      return new Response("No record in payload", { status: 400 });
    }

    const recipientId =
      message.sender_id === message.consultant_id
        ? message.secretary_id
        : message.consultant_id;

    const { data: recipient, error: recipientError } = await supabase
      .from("profiles")
      .select("first_name, email")
      .eq("id", recipientId)
      .single();

    if (recipientError || !recipient || !recipient.email) {
      return new Response("Recipient not found or has no email", { status: 200 });
    }

    const { data: sender } = await supabase
      .from("profiles")
      .select("first_name, last_name")
      .eq("id", message.sender_id)
      .single();

    const esc = (s: string) => String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

    const senderName = sender ? `${esc(sender.first_name)} ${esc(sender.last_name)}` : "Someone";
    const recipientName = esc(recipient.first_name || "there");
    const threadUrl = `${SITE_URL}/account/thread.html?consultant_id=${message.consultant_id}&secretary_id=${message.secretary_id}`;
    const rawBody = String(message.body || "");
    const preview = esc(rawBody.slice(0, 200));
    const truncated = rawBody.length > 200;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Veyn <notifications@veyn.uk>",
        to: recipient.email,
        subject: `New message from ${senderName} on Veyn`,
        html: `
          <p>Hi ${recipientName},</p>
          <p><strong>${senderName}</strong> sent you a message on Veyn:</p>
          <blockquote style="border-left:3px solid #B8924A;margin:16px 0;padding:8px 16px;color:#1B2430;">
            ${preview}${truncated ? "…" : ""}
          </blockquote>
          <p><a href="${threadUrl}">Reply on Veyn →</a></p>
        `,
      }),
    });

    if (!emailRes.ok) {
      console.error("Resend error:", await emailRes.text());
      return new Response("Failed to send notification email", { status: 502 });
    }

    return new Response("ok", { status: 200 });
  } catch (err) {
    console.error("Function error:", err);
    return new Response("Internal error", { status: 500 });
  }
});
