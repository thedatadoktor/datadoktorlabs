import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata = {
  title: "Services - Datadoktor Labs",
  description: "Data pipelines, warehousing, streaming, analytics engineering, cloud infrastructure, and observability.",
  openGraph: { images: ["/og/services.svg"] },
  twitter: { images: ["/og/services.svg"] },
};

const services = [
  {
    title: "Data Pipeline Engineering",
    desc: "Design and operate reliable batch and streaming ingestion with clear SLAs and monitoring.",
    href: "/services/pipelines",
  },
  {
    title: "Warehousing & Modeling",
    desc: "Build scalable warehouses/lakehouses with robust data models, versioning, and documentation.",
    href: "/services/warehousing",
  },
  {
    title: "Streaming Systems",
    desc: "Implement event-driven processing and real-time analytics with backpressure and failover.",
    href: "/services/streaming",
  },
  {
    title: "Analytics Engineering",
    desc: "Define metrics, semantic layers, and transformations for consistent, trustworthy dashboards.",
    href: "/services/analytics",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Provision secure, cost-aware data platforms with reproducible IaC and least-privilege access.",
    href: "/services/infrastructure",
  },
  {
    title: "Data Quality & Observability",
    desc: "Detect drift and failures early with validation, lineage, and proactive alerting.",
    href: "/services/observability",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader title="Services" subtitle="Production data systems, engineered for reality" />
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="border-4 border-primary p-6 bg-bg-light dark:bg-bg-dark-section/60 hover:border-secondary transition">
            <h3 className="text-lg font-semibold text-primary dark:text-secondary">{s.title}</h3>
            <p className="mt-2 text-text-primary dark:text-slate-300">{s.desc}</p>
            <div className="mt-4 flex gap-3">
              <Link href={s.href} className="text-sm text-secondary hover:text-accent font-medium transition">Learn more →</Link>
              <CTAButton href="/contact" event={`cta_service_${s.title.toLowerCase().replace(/\s+/g,'_')}`}>Discuss</CTAButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
