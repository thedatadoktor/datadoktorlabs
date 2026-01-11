import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;
    if (!apiKey || !to) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const formData = await req.formData();
    
    // Extract all form data
    const data: Record<string, any> = {};
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Handle file attachments
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer,
        });
      } else if (key === 'services') {
        // Collect multiple service selections
        if (!data.services) {
          data.services = [];
        }
        data.services.push(value);
      } else {
        data[key] = value;
      }
    }

    // Format services as a readable list
    if (Array.isArray(data.services)) {
      data.services = data.services.join(', ');
    }

    // Create formatted email body
    const emailBody = `
      <h2>New Project Intake Form Submission</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.name || 'N/A'}</p>
      <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
      <p><strong>Organization:</strong> ${data.organization || 'N/A'}</p>
      <p><strong>Role:</strong> ${data.role || 'N/A'}</p>
      
      <h3>Project Scope</h3>
      <p><strong>Services Needed:</strong> ${data.services || 'N/A'}</p>
      <p><strong>Industry:</strong> ${data.industry || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${data.timeline || 'N/A'}</p>
      <p><strong>Budget Range:</strong> ${data.budget || 'Not specified'}</p>
      
      <h3>Current Data Landscape</h3>
      <p><strong>Current Tools:</strong><br/>${(data.current_tools || 'N/A').replace(/\n/g, '<br/>')}</p>
      <p><strong>Data Sources:</strong><br/>${(data.data_sources || 'N/A').replace(/\n/g, '<br/>')}</p>
      <p><strong>Data Volume:</strong> ${data.data_volume || 'Not specified'}</p>
      
      <h3>The Challenge</h3>
      <p><strong>Problem Statement:</strong><br/>${(data.problem || 'N/A').replace(/\n/g, '<br/>')}</p>
      <p><strong>Success Criteria:</strong><br/>${(data.goals || 'N/A').replace(/\n/g, '<br/>')}</p>
      <p><strong>Constraints:</strong><br/>${(data.constraints || 'None specified').replace(/\n/g, '<br/>')}</p>
      
      <h3>Supporting Materials</h3>
      <p><strong>Documentation Links:</strong><br/>${(data.documentation_links || 'None provided').replace(/\n/g, '<br/>')}</p>
      <p><strong>Additional Notes:</strong><br/>${(data.additional_notes || 'None').replace(/\n/g, '<br/>')}</p>
      ${attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.length} file(s) attached</p>` : ''}
    `;

    // Send email with attachments if any
    await resend.emails.send({
      from: "Datadoktor Labs <onboarding@resend.dev>",
      to,
      subject: `New Project Intake: ${data.organization || 'Unknown'} - ${data.services ? (Array.isArray(data.services) ? data.services[0] : data.services.split(',')[0]) : 'General'}`,
      html: emailBody,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    // Get the origin from the request
    const url = new URL(req.url);
    const origin = url.origin;
    
    return NextResponse.redirect(`${origin}/contact?sent=true`, 303);
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
