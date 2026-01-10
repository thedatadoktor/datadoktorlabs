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
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Challenge</h2>
          <p className="mt-2 text-text-primary dark:text-slate-300">
            Bad data makes it to dashboards before anyone notices. Pipelines break silently, and downstream teams discover issues days later.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Schema validation and constraint checks at ingestion</li>
            <li>Statistical anomaly detection for data drift</li>
            <li>Column-level lineage and impact analysis</li>
            <li>SLO definition and alerting on critical datasets</li>
            <li>Data quality dashboards and incident tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Validation rules and tests for critical datasets</li>
            <li>Observability dashboards (Great Expectations, Monte Carlo, etc.)</li>
            <li>Alerting policies and escalation procedures</li>
            <li>Lineage graphs and impact documentation</li>
          </ul>
        </section>

        <div className="pt-4">
          <CTAButton href="/contact" event="cta_service_detail_observability">Discuss your observability needs</CTAButton>
        </div>
      </div>
    </>
  );
}
