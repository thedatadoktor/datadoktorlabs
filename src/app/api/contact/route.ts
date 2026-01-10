import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    await resend.emails.send({
      from: "Datadoktor Labs <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: "New contact request",
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    });

    return NextResponse.redirect(new URL("/contact?sent=true", req.url));
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
