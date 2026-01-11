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
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We design and implement cloud data warehouses and lakehouses with robust data modeling, documentation, and performance optimization — scalable platforms for analytics and machine learning.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Warehousing Solutions</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Cloud Data Warehouses</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Snowflake, BigQuery, Redshift, Azure Synapse — architecture, setup, and optimization</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Data Lakehouses</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Databricks, Delta Lake, Iceberg for unified analytics and ML workloads</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Data Modeling</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Dimensional modeling (Kimball), one-big-table, or Data Vault patterns based on use case</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Incremental Loading</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Efficient data refresh strategies with CDC, merge patterns, and partition management</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Cost Optimization</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Storage tier optimization, query performance tuning, and resource scheduling that respects your budget</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Documentation & Governance</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Data dictionaries, ERDs, column-level docs, and access controls</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Dimensional modeling or one big table patterns as needed</li>
            <li>Column level documentation and data dictionaries</li>
            <li>Incremental model builds with version control</li>
            <li>Storage tier optimization (hot/warm/cold)</li>
            <li>Query performance analysis and indexing strategies</li>
            <li>Cost aware architectures that fit your needs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Documented data models with ERDs and schemas</li>
            <li>Transformation code (dbt, SQL, Spark)</li>
            <li>Cost and performance benchmarks</li>
            <li>Governance policies and access controls</li>
            <li>Data dictionaries and lineage documentation</li>
            <li>Query optimization recommendations</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_detail_warehousing">Discuss your warehouse needs</CTAButton>
        </div>
      </div>
    </>
  );
}
