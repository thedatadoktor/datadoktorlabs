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
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Challenge</h2>
          <p className="mt-2 text-text-primary dark:text-slate-300">
            Pipelines fail silently, backfills take days, and data freshness is unpredictable. Teams spend more time fixing than building.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Idempotent ingestion with checkpointing and retry logic</li>
            <li>Schema validation and evolution at ingestion boundaries</li>
            <li>Clear SLA definition with alerting on breaches</li>
            <li>Backfill strategies that don't block production flows</li>
            <li>Cost-aware scheduling and resource allocation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Production-ready pipeline code with tests</li>
            <li>Monitoring dashboards and alert runbooks</li>
            <li>Documentation for operations and incident response</li>
            <li>Cost and latency benchmarks</li>
          </ul>
        </section>

        <div className="pt-4">
          <CTAButton href="/contact" event="cta_service_detail_pipelines">Discuss your pipeline needs</CTAButton>
        </div>
      </div>
    </>
  );
}
