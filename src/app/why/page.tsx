import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Why - Datadoktor Labs",
  description: "Production code. No slide decks. Systems that survive reality.",
  openGraph: { images: ["/og/why.svg"] },
  twitter: { images: ["/og/why.svg"] },
};

export default function Why() {
  return (
    <>
      <PageHeader title="Why" subtitle="Engineering over theatrics" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">The Problem</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            Most teams don't lack data. They lack dependable systems. Silent failures, disagreeing dashboards, and undocumented transformations bog down decisions.
          </p>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            Businesses everywhere face unreliable data sources, fragmented platforms, regulatory constraints, and infrastructure limits.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Global Approach</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            Datadoktor Labs is designed for real world operations:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Integration with any payment gateway or business system</li>
            <li>GDPR and regional data privacy compliance</li>
            <li>Industry specific regulatory standards</li>
            <li>Tool agnostic analytics that work with your BI platform</li>
            <li>Cost aware cloud architectures</li>
          </ul>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            We understand the challenges of fragmented data landscapes and regulatory complexity. And we engineer around them.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">How We Work</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            Every project follows a structured system:
          </p>
          <ol className="mt-3 list-decimal pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li><strong>Requirement intake & stakeholder mapping</strong></li>
            <li><strong>Data discovery & profiling</strong></li>
            <li><strong>Architecture blueprint</strong></li>
            <li><strong>Pipeline construction</strong></li>
            <li><strong>Automated validation</strong></li>
            <li><strong>Deployment orchestration</strong></li>
            <li><strong>Monitoring & lifecycle management</strong></li>
          </ol>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            All pipelines include lineage tracking, observability, metadata, and documentation. No undocumented systems. No black boxes.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Principles</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Boring to operate; exciting is for demos, not production</li>
            <li>Predictable behavior and measurable reliability</li>
            <li>Documented by default; no hidden magic</li>
            <li>No vendor lock in evangelism; fit tools to problems</li>
            <li>Engineering first mindset, not slide decks as deliverables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What You Get</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We deliver working pipelines, documented systems, reproducible infrastructure, and measurable improvements. Real solutions to real data engineering challenges.
          </p>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            Not slide decks. Not vendor pitches. Not undocumented scripts. Production systems that survive real world growth.
          </p>
        </section>
      </div>
    </>
  );
}
