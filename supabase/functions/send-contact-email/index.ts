import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const NOTIFY_TO = "ankitgurjar0607@gmail.com";
const RESEND_TEST_RECIPIENT = "ankit.chhalotra@cdgi.edu.in";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase.from("contacts").insert({
      name: String(name).trim().slice(0, 200),
      email: String(email).trim().slice(0, 320),
      phone: phone ? String(phone).trim().slice(0, 50) : null,
      subject: subject ? String(subject).trim().slice(0, 200) : null,
      message: String(message).trim().slice(0, 5000),
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(JSON.stringify({ error: "Failed to save submission" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(JSON.stringify({ success: false, saved: true, emailed: false, error: "Email notification is not configured." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const esc = (s: string) =>
      String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

    const html = `
      <h2>New portfolio contact</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone || "—")}</p>
      <p><strong>Subject:</strong> ${esc(subject || "—")}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${esc(message)}</pre>
    `;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [NOTIFY_TO],
        reply_to: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        html,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Resend error:", emailRes.status, errText);
      return new Response(
        JSON.stringify({
          success: false,
          saved: true,
          emailed: false,
          error: `Email notification is blocked by Resend until a sending domain is verified. Testing can only send to ${RESEND_TEST_RECIPIENT}.`,
          emailError: errText,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true, saved: true, emailed: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unhandled error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});