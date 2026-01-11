import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Case Studies - Datadoktor Labs",
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
    github: "https://github.com/datadoktorlabs/metrics-platform",
    dashboard: "https://metrics.datadoktorlabs.com",
  },
  {
    title: "Streaming ETL Migration",
    sector: "E-commerce",
    summary: "Migrated nightly batch to a streaming pipeline with backpressure handling and alerting.",
    impact: "Sub-5m latency, recovery from failures without manual intervention",
    github: "https://github.com/datadoktorlabs/streaming-etl",
    dashboard: "https://streaming.datadoktorlabs.com",
  },
  {
    title: "Cost-Aware Warehouse Rebuild",
    sector: "Fintech",
    summary: "Refactored models and storage tiers, introducing lineage and automated validation gates.",
    impact: "30% cost reduction, fewer incidents, faster model iteration",
    github: "https://github.com/datadoktorlabs/warehouse-rebuild",
    dashboard: "https://warehouse.datadoktorlabs.com",
  },
];

export default function CaseStudies() {
  return (
    <>
      <PageHeader title="Case Studies" subtitle="Patterns that survive production" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 grid gap-4 md:gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <article key={c.title} className="border-4 border-primary p-4 md:p-6 bg-bg-light dark:bg-bg-dark-section/60 hover:border-secondary transition">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h3 className="text-base md:text-lg font-semibold text-primary dark:text-secondary">{c.title}</h3>
              <span className="text-xs text-text-muted dark:text-slate-400">{c.sector}</span>
            </div>
            <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">{c.summary}</p>
            <p className="mt-2 text-xs md:text-sm text-text-muted dark:text-slate-400">Impact: {c.impact}</p>
            <div className="mt-4 flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
              {c.github && (
                <a href={c.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition">
                  GitHub →
                </a>
              )}
              {c.dashboard && (
                <a href={c.dashboard} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition">
                  Dashboard →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
