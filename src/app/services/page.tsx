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
  {
    title: "Machine Learning & AI",
    desc: "Build production ML systems with predictive models, fraud detection, and full MLOps.",
    href: "/services/ml",
  },
  {
    title: "Data Governance & Compliance",
    desc: "GDPR and NDPR compliance with data inventories, access control, and retention policies.",
    href: "/services/governance",
  },
  {
    title: "Agri-Data Solutions",
    desc: "Agricultural data systems for Nigerian farms with yield prediction and market intelligence.",
    href: "/services/agri",
  },
  {
    title: "Custom Automation",
    desc: "Workflow automation and API integrations with Nigerian payment gateways and business tools.",
    href: "/services/automation",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader title="Services" subtitle="Production data systems, engineered for reality" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 grid gap-4 md:gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section/60 hover:border-secondary transition">
            <h3 className="text-base md:text-lg font-semibold text-primary dark:text-secondary">{s.title}</h3>
            <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">{s.desc}</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href={s.href} className="text-sm text-secondary hover:text-accent font-medium transition text-center sm:text-left">Learn more →</Link>
              <CTAButton href="/contact" event={`cta_service_${s.title.toLowerCase().replace(/\s+/g,'_')}`} className="bg-secondary text-black px-4 py-2 rounded font-medium hover:bg-accent transition text-center">Discuss</CTAButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
