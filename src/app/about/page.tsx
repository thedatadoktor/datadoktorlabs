import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About – Datadoktor Labs",
  description: "Vision and mission of Datadoktor Labs (DEaaS).",
  openGraph: { images: ["/og/about.svg"] },
  twitter: { images: ["/og/about.svg"] },
};

export default function About() {
  return (
    <>
      <PageHeader title="About" subtitle="Datadoktor Labs – Vision & Mission" />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">What We Are Building</h2>
          <p className="mt-3 text-text-primary dark:text-slate-300">
            Datadoktor Labs is a Data Engineering as a Service (DEaaS) company. We turn unreliable, messy, and fragmented data into systems that are stable, scalable, and useful for real decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Why Datadoktor Labs Exists</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>pipelines that break silently</li>
            <li>dashboards that disagree</li>
            <li>warehouses that grow expensive and slow</li>
            <li>unclear data ownership and undocumented transformations</li>
            <li>fragile one-off scripts holding critical workflows together</li>
          </ul>
          <p className="mt-3 text-text-primary dark:text-slate-300">We replace fragile systems with engineered ones: reasoned, monitored, reproducible, and evolvable.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">What We Do</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Batch and streaming data pipelines</li>
            <li>Modern data warehouses and lakehouses</li>
            <li>Analytics engineering layers</li>
            <li>Data quality and observability systems</li>
            <li>Cloud data infrastructure</li>
            <li>Cost-aware and secure data platforms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">How We Work</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li><strong>Diagnose</strong> – Audit data flows, architecture, and failure points.</li>
            <li><strong>Design</strong> – Define target architecture, tools, data models, operations.</li>
            <li><strong>Build</strong> – Implement pipelines, infrastructure, transformations, monitoring.</li>
            <li><strong>Operate</strong> – Documentation, alerts, optimization; support systems in production.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">What Makes Us Different</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Engineering-first mindset</li>
            <li>No vendor lock-in evangelism</li>
            <li>No slide decks as final deliverables</li>
            <li>No “just use this tool” thinking</li>
          </ul>
          <p className="mt-3 text-text-primary dark:text-slate-300">Deliverables are working pipelines, documented systems, reproducible infrastructure, and measurable reliability improvements.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Long-Term Direction</h2>
          <p className="mt-3 text-text-primary dark:text-slate-300">
            Datadoktor Hub will evolve into a client portal, data platform layer, pipeline monitoring dashboards, job tracking and SLA reporting, knowledge base and templates — potentially a SaaS product.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Philosophy</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Boring to operate</li>
            <li>Predictable to reason about</li>
            <li>Measurable in behavior</li>
            <li>Documented by default</li>
          </ul>
          <p className="mt-3 text-text-primary dark:text-slate-300">If the system feels exciting in production, something is probably wrong.</p>
        </section>
      </div>
    </>
  );
}
