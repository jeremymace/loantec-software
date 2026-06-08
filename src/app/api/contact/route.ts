import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, company, email, phone, offices, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "LoanTec Website <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL || "info@loantec-software.com",
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;">Name</td><td style="padding:8px 0;">${name}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;">Company</td><td style="padding:8px 0;">${company || "—"}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;">Phone</td><td style="padding:8px 0;">${phone || "—"}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;">Offices</td><td style="padding:8px 0;">${offices || "—"}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px 0;">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
