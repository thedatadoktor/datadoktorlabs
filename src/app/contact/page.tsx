import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Tell us about your data challenges and requirements in detail.",
  openGraph: { images: ["/og/contact.svg"] },
  twitter: { images: ["/og/contact.svg"] },
};

export default function Contact() {
  return (
    <>
      <PageHeader title="Project Intake" subtitle="Help us understand your data challenges" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <ContactForm />
      </div>
    </>
  );
}
