import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Services – Datadoktor Labs",
  description: "Data pipelines, warehousing, streaming, analytics engineering, cloud infrastructure, and observability.",
};

const services = [
  {
    title: "Data Pipeline Engineering",
    desc: "Design and operate reliable batch and streaming ingestion with clear SLAs and monitoring.",
  },
  {
    title: "Warehousing & Modeling",
    desc: "Build scalable warehouses/lakehouses with robust data models, versioning, and documentation.",
  },
  {
    title: "Streaming Systems",
    desc: "Implement event-driven processing and real-time analytics with backpressure and failover.",
  },
  {
    title: "Analytics Engineering",
    desc: "Define metrics, semantic layers, and transformations for consistent, trustworthy dashboards.",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Provision secure, cost-aware data platforms with reproducible IaC and least-privilege access.",
  },
  {
    title: "Data Quality & Observability",
    desc: "Detect drift and failures early with validation, lineage, and proactive alerting.",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader title="Services" subtitle="Production data systems, engineered for reality" />
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="border rounded p-6 bg-white dark:bg-gray-950">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
