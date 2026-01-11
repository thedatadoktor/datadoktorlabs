import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Analytics Engineering",
  description: "Define metrics, semantic layers, and transformations for consistent, trustworthy dashboards.",
};

export default function Analytics() {
  return (
    <>
      <PageHeader title="Analytics Engineering" subtitle="Metrics teams can trust" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We build analytics systems that business teams can trust — centralized metric definitions, semantic layers, dashboards, and reporting pipelines that deliver consistent, reliable insights.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Analytics Solutions</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">KPI Modeling & Metric Definitions</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Centralized business metrics with clear definitions, calculations, and ownership to eliminate dashboard disagreements</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Semantic Layers</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Business logic abstraction with dbt metrics, LookML, or Cube.js for consistent data access across tools</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Dashboard Development</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Power BI, Looker, Metabase, Tableau — interactive dashboards with drill-downs, filters, and scheduled delivery</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Scheduled Reports</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Automated email/Slack reports with critical metrics, alerts on anomalies, and stakeholder summaries</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Forecasting Visualizations</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Time series forecasting, trend analysis, and scenario planning with confidence intervals</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Stakeholder Training</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Training sessions for business users on dashboard usage, self-service analytics, and metric interpretation</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Centralized metric definitions with semantic layers</li>
            <li>Version-controlled transformation logic (dbt, Looker)</li>
            <li>Consistent dimension and measure naming conventions</li>
            <li>Test coverage for critical business metrics</li>
            <li>Lineage from raw data to dashboard</li>
            <li>Automated dataset refresh schedules</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>KPI dictionaries with metric definitions</li>
            <li>Dashboards (Power BI, Looker, Metabase)</li>
            <li>Automated datasets and reporting pipelines</li>
            <li>Transformation code with tests and CI/CD</li>
            <li>Training materials for analysts</li>
            <li>Dashboard documentation</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_detail_analytics">Discuss your analytics needs</CTAButton>
        </div>
      </div>
    </>
  );
}
