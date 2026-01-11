import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Datadoktor Labs - Data Engineering as a Service",
  description: "We design, build, and operate production-grade data systems that survive reality.",
  openGraph: { images: ["/og/home.svg"] },
  twitter: { images: ["/og/home.svg"] },
};

export default function Home() {
  return (
    <div className="font-sans">
      <section className="bg-gradient-to-b from-bg-light via-bg-light to-bg-light dark:from-bg-dark-section dark:to-bg-dark-section/80">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">Reliable Data Systems. Built for Reality.</h1>
            <p className="mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
              We design, build, and operate production-grade data pipelines, warehouses, and analytics systems for teams that need their data to actually work.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <CTAButton href="/contact" event="cta_contact" className="bg-secondary text-black px-4 py-2 rounded font-medium hover:bg-accent transition text-center">Book a consultation</CTAButton>
              <CTAButton href="/services" event="cta_services" className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-secondary transition text-center">See services</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section/60 hover:border-secondary transition">
              <h3 className="font-semibold text-primary dark:text-secondary">Reliable ingestion</h3>
              <p className="mt-2 text-sm text-text-muted dark:text-slate-400">Backed by monitoring and clear SLAs.</p>
            </div>
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section/60 hover:border-secondary transition">
              <h3 className="font-semibold text-primary dark:text-secondary">Consistent metrics</h3>
              <p className="mt-2 text-sm text-text-muted dark:text-slate-400">Definitions your dashboards can agree on.</p>
            </div>
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section/60 hover:border-secondary transition">
              <h3 className="font-semibold text-primary dark:text-secondary">Scalable pipelines</h3>
              <p className="mt-2 text-sm text-text-muted dark:text-slate-400">Batch and streaming systems with failover.</p>
            </div>
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section/60 hover:border-secondary transition">
              <h3 className="font-semibold text-primary dark:text-secondary">Observability</h3>
              <p className="mt-2 text-sm text-text-muted dark:text-slate-400">Detect drift and breakages early.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b-4 border-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">Why</h2>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            Production code. No slide decks. Systems that survive reality.
          </p>
        </div>
      </section>

      <section className="bg-bg-light dark:bg-bg-dark-section/50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">How We Work</h2>
          <div className="mt-6 md:mt-8 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section hover:border-secondary transition"><strong className="text-primary dark:text-secondary">Diagnose</strong><p className="mt-3 text-sm text-text-muted dark:text-slate-400">Audit data flows and failure points.</p></div>
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section hover:border-secondary transition"><strong className="text-primary dark:text-secondary">Design</strong><p className="mt-3 text-sm text-text-muted dark:text-slate-400">Target architecture and models.</p></div>
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section hover:border-secondary transition"><strong className="text-primary dark:text-secondary">Build</strong><p className="mt-3 text-sm text-text-muted dark:text-slate-400">Pipelines, infra, transformations, monitoring.</p></div>
            <div className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section hover:border-secondary transition"><strong className="text-primary dark:text-secondary">Operate</strong><p className="mt-3 text-sm text-text-muted dark:text-slate-400">Docs, alerts, optimization in production.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
