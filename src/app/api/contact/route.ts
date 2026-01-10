import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;
    if (!apiKey || !to) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    await resend.emails.send({
      from: "Datadoktor Labs <onboarding@resend.dev>",
      to,
      subject: "New contact request",
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    });

    return NextResponse.redirect(new URL("/contact?sent=true", req.url));
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
