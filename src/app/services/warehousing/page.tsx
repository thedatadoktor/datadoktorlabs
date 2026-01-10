import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Warehousing & Modeling",
  description: "Build scalable warehouses/lakehouses with robust data models, versioning, and documentation.",
};

export default function Warehousing() {
  return (
    <>
      <PageHeader title="Warehousing & Modeling" subtitle="Scalable, documented data models" />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Challenge</h2>
          <p className="mt-2 text-text-primary dark:text-slate-300">
            Queries get slower, costs balloon, and nobody knows what columns mean. Tables multiply without clear ownership or lineage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Dimensional modeling or one-big-table patterns as needed</li>
            <li>Column-level documentation and data dictionaries</li>
            <li>Incremental model builds with version control</li>
            <li>Storage tier optimization (hot/warm/cold)</li>
            <li>Query performance analysis and indexing strategies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Documented data models with ERDs and schemas</li>
            <li>Transformation code (dbt, SQL, Spark)</li>
            <li>Cost and performance benchmarks</li>
            <li>Governance policies and access controls</li>
          </ul>
        </section>

        <div className="pt-4">
          <CTAButton href="/contact" event="cta_service_detail_warehousing">Discuss your warehouse needs</CTAButton>
        </div>
      </div>
    </>
  );
}
