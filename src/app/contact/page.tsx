import PageHeader from "@/components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Tell us about your data systems" />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <form action="/api/contact" method="POST" encType="multipart/form-data" className="space-y-4">
          <input type="text" name="name" placeholder="Your name" className="w-full border px-3 py-2 rounded" required />
          <input type="email" name="email" placeholder="Your email" className="w-full border px-3 py-2 rounded" required />
          <textarea name="message" placeholder="What are you trying to achieve?" className="w-full border px-3 py-2 rounded h-32" required />
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="border px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </>
  );
}
