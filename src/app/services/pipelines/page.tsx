import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Data Pipeline Engineering",
  description: "Design and operate reliable batch and streaming ingestion with clear SLAs and monitoring.",
};

export default function Pipelines() {
  return (
    <>
      <PageHeader title="Data Pipeline Engineering" subtitle="Reliable ingestion at scale" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We design and implement production-grade data pipelines — batch and streaming systems that move data reliably from sources to destinations, with monitoring, testing, and clear SLAs.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Pipeline Types</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Batch ETL/ELT Systems</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Scheduled ingestion with orchestration (Airflow, Dagster, Prefect), data validation, and incremental loading strategies</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Streaming Pipelines</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Real-time data ingestion using Kafka, Kinesis, Pub/Sub with event-driven architectures and exactly-once semantics</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">dbt Transformation Layers</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Analytics engineering with tested, documented SQL transformations, version control, and CI/CD</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Data Quality Checks</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Automated validation of completeness, freshness, schema compliance, and business rules with alerting</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Idempotent ingestion with checkpointing and retry logic</li>
            <li>Schema validation and evolution at ingestion boundaries</li>
            <li>Clear SLA definition with alerting on breaches</li>
            <li>Backfill strategies that don't block production flows</li>
            <li>Cost-aware scheduling and resource allocation</li>
            <li>Pipeline monitoring with lineage tracking</li>
            <li>Full documentation and runbooks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Typical Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Source-to-target mappings</li>
            <li>Architecture diagrams</li>
            <li>Tested pipeline code</li>
            <li>Monitoring dashboards</li>
            <li>Full technical documentation</li>
            <li>Alert runbooks</li>
            <li>Cost and latency benchmarks</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_detail_pipelines">Discuss your pipeline needs</CTAButton>
        </div>
      </div>
    </>
  );
}
