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
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We implement event-driven streaming systems for real-time data processing — Kafka, Kinesis, Pub/Sub architectures with backpressure handling, exactly-once semantics, and failure recovery.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Streaming Solutions</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Event Streaming Platforms</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Kafka, AWS Kinesis, GCP Pub/Sub — architecture, topic design, and consumer group management</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Stream Processing</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Apache Flink, Spark Streaming, Kafka Streams for stateful transformations and aggregations</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Change Data Capture (CDC)</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Real-time database replication with Debezium, Airbyte, or Fivetran for event-driven architectures</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Exactly-Once Semantics</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Idempotent processing patterns to prevent duplicates and ensure data consistency</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Backpressure & Scaling</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Consumer group scaling, lag monitoring, and auto-scaling triggers for high-volume streams</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Dead Letter Queues & Replay</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Failure handling with DLQs, poison pill detection, and event replay strategies</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>At-least-once or exactly-once semantics as required</li>
            <li>Backpressure handling and consumer group scaling</li>
            <li>Dead letter queues and replay strategies</li>
            <li>Windowing and stateful aggregation patterns</li>
            <li>Lag monitoring and auto-scaling triggers</li>
            <li>Schema evolution and compatibility management</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Stream processing topology (Kafka, Flink, Kinesis)</li>
            <li>Metrics and alerting for lag and throughput</li>
            <li>Disaster recovery and replay procedures</li>
            <li>Performance tuning and resource allocation</li>
            <li>Schema registry and compatibility checks</li>
            <li>Monitoring dashboards and runbooks</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_detail_streaming">Discuss your streaming needs</CTAButton>
        </div>
      </div>
    </>
  );
}
