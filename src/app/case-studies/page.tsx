import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Case Studies – Datadoktor Labs",
  description: "Selected engagements showcasing reliable, scalable data systems.",
  openGraph: { images: ["/og/case-studies.svg"] },
  twitter: { images: ["/og/case-studies.svg"] },
};

const cases = [
  {
    title: "Unified Metrics Platform",
    sector: "SaaS",
    summary: "Built a semantic layer and metrics catalog eliminating dashboard disagreements across teams.",
    impact: "-45% time-to-insight, consistent KPIs across 12 domains",
  },
  {
    title: "Streaming ETL Migration",
    sector: "E-commerce",
    summary: "Migrated nightly batch to a streaming pipeline with backpressure handling and alerting.",
    impact: "Sub-5m latency, recovery from failures without manual intervention",
  },
  {
    title: "Cost-Aware Warehouse Rebuild",
    sector: "Fintech",
    summary: "Refactored models and storage tiers, introducing lineage and automated validation gates.",
    impact: "30% cost reduction, fewer incidents, faster model iteration",
  },
];

export default function CaseStudies() {
  return (
    <>
      <PageHeader title="Case Studies" subtitle="Patterns that survive production" />
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <article key={c.title} className="border border-primary/20 rounded-lg p-6 bg-white dark:bg-bg-dark-section/60 hover:border-secondary transition">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary dark:text-secondary">{c.title}</h3>
              <span className="text-xs text-text-muted dark:text-slate-400">{c.sector}</span>
            </div>
            <p className="mt-2 text-text-primary dark:text-slate-300">{c.summary}</p>
            <p className="mt-2 text-sm text-text-muted dark:text-slate-400">Impact: {c.impact}</p>
          </article>
        ))}
      </div>
    </>
  );
}
