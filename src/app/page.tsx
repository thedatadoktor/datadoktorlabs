import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Datadoktor Labs – Data Engineering as a Service",
  description: "We design, build, and operate production-grade data systems that survive reality.",
  openGraph: { images: ["/og/home.svg"] },
  twitter: { images: ["/og/home.svg"] },
};

export default function Home() {
  return (
    <div className="font-sans">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">Data Engineering as a Service</h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              We design, build, and operate production-grade data pipelines, warehouses, and analytics systems for teams that need their data to actually work.
            </p>
            <div className="mt-6 flex gap-4">
              <CTAButton href="/contact" event="cta_contact" className="border px-4 py-2 rounded">Book a consultation</CTAButton>
              <CTAButton href="/services" event="cta_services" className="border px-4 py-2 rounded">See services</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded p-4 bg-white dark:bg-gray-950">
              <h3 className="font-semibold">Reliable ingestion</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Backed by monitoring and clear SLAs.</p>
            </div>
            <div className="border rounded p-4 bg-white dark:bg-gray-950">
              <h3 className="font-semibold">Consistent metrics</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Definitions your dashboards can agree on.</p>
            </div>
            <div className="border rounded p-4 bg-white dark:bg-gray-950">
              <h3 className="font-semibold">Scalable pipelines</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Batch and streaming systems with failover.</p>
            </div>
            <div className="border rounded p-4 bg-white dark:bg-gray-950">
              <h3 className="font-semibold">Observability</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Detect drift and breakages early.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">Why</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Production code. No slide decks. Systems that survive reality.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-4">
            <div className="border rounded p-4 bg-white dark:bg-gray-950"><strong>Diagnose</strong><p className="mt-2 text-sm">Audit data flows and failure points.</p></div>
            <div className="border rounded p-4 bg-white dark:bg-gray-950"><strong>Design</strong><p className="mt-2 text-sm">Target architecture and models.</p></div>
            <div className="border rounded p-4 bg-white dark:bg-gray-950"><strong>Build</strong><p className="mt-2 text-sm">Pipelines, infra, transformations, monitoring.</p></div>
            <div className="border rounded p-4 bg-white dark:bg-gray-950"><strong>Operate</strong><p className="mt-2 text-sm">Docs, alerts, optimization in production.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
