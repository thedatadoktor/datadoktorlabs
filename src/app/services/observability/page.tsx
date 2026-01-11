import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Data Quality & Observability",
  description: "Detect drift and failures early with validation, lineage, and proactive alerting.",
};

export default function Observability() {
  return (
    <>
      <PageHeader title="Data Quality & Observability" subtitle="Catch problems before users do" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We implement data quality and observability systems that detect drift, schema changes, and pipeline failures before they reach dashboards — proactive monitoring, validation, and alerting for production data systems.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Observability Solutions</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Pipeline Monitoring & Alerting</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Real-time pipeline health monitoring with SLA tracking, failure detection, and automated alerts via Slack, email, or PagerDuty</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Data Quality Validation</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Automated checks for completeness, freshness, schema compliance, and business rules using Great Expectations, dbt tests, or custom frameworks</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Data Lineage & Impact Analysis</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Column-level lineage tracking to understand data flow from source to dashboard, with impact analysis for schema changes</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Drift Detection</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Statistical anomaly detection for data distribution changes, volume shifts, and unexpected patterns</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Metadata Management</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Centralized metadata catalogs with data dictionaries, owners, and documentation for discovery and governance</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Incident Response Runbooks</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Documented procedures for common failures with resolution steps and escalation paths</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Schema validation and constraint checks at ingestion</li>
            <li>Statistical anomaly detection for data drift</li>
            <li>Column-level lineage and impact analysis</li>
            <li>SLO definition and alerting on critical datasets</li>
            <li>Data quality dashboards and incident tracking</li>
            <li>Automated remediation where possible</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Validation rules and tests for critical datasets</li>
            <li>Observability dashboards (Great Expectations, Monte Carlo, Datadog)</li>
            <li>Alerting policies and escalation procedures</li>
            <li>Lineage graphs and impact documentation</li>
            <li>Data quality metrics and SLA reports</li>
            <li>Incident response runbooks</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_detail_observability">Discuss your observability needs</CTAButton>
        </div>
      </div>
    </>
  );
}
