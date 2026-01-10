import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Streaming Systems",
  description: "Implement event-driven processing and real-time analytics with backpressure and failover.",
};

export default function Streaming() {
  return (
    <>
      <PageHeader title="Streaming Systems" subtitle="Real-time data with reliability" />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">Challenge</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Nightly batch is too slow, but streaming feels fragile. Messages get lost, duplicates appear, and lag grows unpredictably.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Our Approach</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>At-least-once or exactly-once semantics as required</li>
            <li>Backpressure handling and consumer group scaling</li>
            <li>Dead letter queues and replay strategies</li>
            <li>Windowing and stateful aggregation patterns</li>
            <li>Lag monitoring and auto-scaling triggers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Stream processing topology (Kafka, Flink, etc.)</li>
            <li>Metrics and alerting for lag and throughput</li>
            <li>Disaster recovery and replay procedures</li>
            <li>Performance tuning and resource allocation</li>
          </ul>
        </section>

        <div className="pt-4">
          <CTAButton href="/contact" event="cta_service_detail_streaming">Discuss your streaming needs</CTAButton>
        </div>
      </div>
    </>
  );
}
