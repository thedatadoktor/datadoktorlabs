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
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <form action="/api/contact" method="POST" encType="multipart/form-data" className="space-y-4">
          <input type="text" name="name" placeholder="Your name" className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white placeholder-text-muted text-sm md:text-base" required />
          <input type="email" name="email" placeholder="Your email" className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white placeholder-text-muted text-sm md:text-base" required />
          <textarea name="message" placeholder="What are you trying to achieve?" className="w-full border-3 border-primary px-3 py-2 md:py-3 h-32 md:h-40 bg-bg-light text-white placeholder-text-muted text-sm md:text-base" required />
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="w-full sm:w-auto bg-secondary text-black px-6 py-3 rounded font-medium hover:bg-accent transition text-sm md:text-base">Send</button>
        </form>
      </div>
    </>
  );
}
