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
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">Challenge</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Different dashboards show different revenue numbers. No one knows which metric is "correct" or where it comes from.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Our Approach</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Centralized metric definitions with semantic layers</li>
            <li>Version-controlled transformation logic (dbt, Looker, etc.)</li>
            <li>Consistent dimension and measure naming conventions</li>
            <li>Test coverage for critical business metrics</li>
            <li>Lineage from raw data to dashboard</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Metrics catalog with definitions and owners</li>
            <li>Transformation code with tests and CI/CD</li>
            <li>Dashboard templates and documentation</li>
            <li>Training materials for analysts and stakeholders</li>
          </ul>
        </section>

        <div className="pt-4">
          <CTAButton href="/contact" event="cta_service_detail_analytics">Discuss your analytics needs</CTAButton>
        </div>
      </div>
    </>
  );
}
