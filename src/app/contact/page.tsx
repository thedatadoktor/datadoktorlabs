import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact",
  description: "Tell us about your data systems and goals.",
  openGraph: { images: ["/og/contact.svg"] },
  twitter: { images: ["/og/contact.svg"] },
};

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Tell us about your data systems" />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <form action="/api/contact" method="POST" encType="multipart/form-data" className="space-y-4">
          <input type="text" name="name" placeholder="Your name" className="w-full border-3 border-primary px-3 py-2 bg-bg-light dark:bg-bg-dark-section/60 text-text-primary dark:text-slate-300 placeholder-text-muted" required />
          <input type="email" name="email" placeholder="Your email" className="w-full border-3 border-primary px-3 py-2 bg-bg-light dark:bg-bg-dark-section/60 text-text-primary dark:text-slate-300 placeholder-text-muted" required />
          <textarea name="message" placeholder="What are you trying to achieve?" className="w-full border-3 border-primary px-3 py-2 h-32 bg-bg-light dark:bg-bg-dark-section/60 text-text-primary dark:text-slate-300 placeholder-text-muted" required />
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="bg-secondary text-primary px-4 py-2 rounded font-medium hover:bg-accent transition">Send</button>
        </form>
      </div>
    </>
  );
}
