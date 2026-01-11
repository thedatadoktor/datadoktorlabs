import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About - Datadoktor Labs",
  description: "Reliable Data Systems. Built for Reality. A global data engineering, analytics, and machine learning consultancy.",
  openGraph: { images: ["/og/about.svg"] },
  twitter: { images: ["/og/about.svg"] },
};

export default function About() {
  return (
    <>
      <PageHeader title="About" subtitle="Reliable Data Systems. Built for Reality." />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-10 md:space-y-12">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Mission</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            To build reliable, compliant, and intelligent data systems that empower organizations to automate operations, optimize decisions, and scale with confidence.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Vision</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            To become a leading global data consultancy, combining engineering precision, analytics insight, machine intelligence, and regulatory trust.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Are Building</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            Datadoktor Labs is a global data engineering, analytics, and machine learning consultancy. We design, build, and operate production-grade data systems for organizations that need their data to actually work, not just look good in demos.
          </p>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            We serve businesses and institutions worldwide with compliance ready architecture and global engineering standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Why Datadoktor Labs Exists</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            Most organizations run on spreadsheets, disconnected tools, manual reconciliation, and fragile reporting. As companies grow, this breaks:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Fraud becomes harder to detect</li>
            <li>Financial reporting becomes unreliable</li>
            <li>Operations become opaque</li>
            <li>Compliance becomes risky</li>
          </ul>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            Datadoktor Labs exists to turn this chaos into engineered systems that survive real world growth.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Do</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We help organizations move from fragmented, unreliable data to systems that are structured, monitored, compliant, scalable, and decision-ready.
          </p>
          <p className="mt-3 text-base md:text-lg font-semibold text-primary dark:text-secondary">Our work covers the full lifecycle:</p>
          <ul className="mt-3 list-decimal pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Data ingestion</li>
            <li>Data transformation</li>
            <li>Warehousing & modeling</li>
            <li>Analytics & reporting</li>
            <li>Machine learning systems</li>
            <li>Governance & compliance</li>
            <li>Automation</li>
          </ul>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            Every system we build includes documentation, testing, monitoring, and long-term operability by default.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Target Sectors</h2>
          <div className="mt-3 md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-primary dark:text-secondary">Fintech</h3>
              <p className="mt-1 text-sm md:text-base text-text-muted dark:text-slate-400">Payment systems, fraud detection, compliance</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-primary dark:text-secondary">Agriculture & Agribusiness</h3>
              <p className="mt-1 text-sm md:text-base text-text-muted dark:text-slate-400">Farmer data, yield prediction, market intelligence</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-primary dark:text-secondary">Logistics & Mobility</h3>
              <p className="mt-1 text-sm md:text-base text-text-muted dark:text-slate-400">Fleet tracking, route optimization, demand forecasting</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-primary dark:text-secondary">Retail & SMEs</h3>
              <p className="mt-1 text-sm md:text-base text-text-muted dark:text-slate-400">Inventory systems, sales analytics, customer insights</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-primary dark:text-secondary">NGOs & Development</h3>
              <p className="mt-1 text-sm md:text-base text-text-muted dark:text-slate-400">Impact tracking, program analytics, reporting automation</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-primary dark:text-secondary">Public Sector</h3>
              <p className="mt-1 text-sm md:text-base text-text-muted dark:text-slate-400">Data-driven policy, transparency dashboards, analytics</p>
            </div>
          </div>
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
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What Makes Us Different</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Engineering first mindset, not slide decks as deliverables</li>
            <li>Flexible integration with any payment gateway or business tool</li>
            <li>GDPR and data privacy compliance by default</li>
            <li>Cost aware cloud architectures that respect your budget</li>
            <li>No vendor lock-in evangelism</li>
            <li>Working pipelines, documented systems, reproducible infrastructure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Compliance & Certifications Roadmap</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Company level:</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-base md:text-lg text-text-primary dark:text-slate-300">
                <li>ISO 27001</li>
                <li>GDPR compliance</li>
                <li>SOC 2 Type II</li>
                <li>Industry specific compliance as needed</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Employee certifications across:</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-base md:text-lg text-text-primary dark:text-slate-300">
                <li>Data engineering (dbt, Airflow, Spark)</li>
                <li>Analytics (Power BI, Looker, Metabase)</li>
                <li>Machine learning and AI</li>
                <li>Cloud platforms (AWS, Azure, GCP)</li>
                <li>Security and compliance</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Philosophy</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Boring to operate</li>
            <li>Predictable to reason about</li>
            <li>Measurable in behavior</li>
            <li>Documented by default</li>
          </ul>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            If the system feels exciting in production, something is probably wrong.
          </p>
        </section>
      </div>
    </>
  );
}
