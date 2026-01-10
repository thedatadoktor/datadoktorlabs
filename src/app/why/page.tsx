import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Why – Datadoktor Labs",
  description: "Production code. No slide decks. Systems that survive reality.",
  openGraph: { images: ["/og/why.svg"] },
  twitter: { images: ["/og/why.svg"] },
};

export default function Why() {
  return (
    <>
      <PageHeader title="Why" subtitle="Engineering over theatrics" />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Problem</h2>
          <p className="mt-2 text-text-primary dark:text-slate-300">
            Most teams don’t lack data — they lack dependable systems. Silent failures, disagreeing dashboards, and undocumented transformations bog down decisions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Principles</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Boring to operate; exciting is for demos, not production.</li>
            <li>Predictable behavior and measurable reliability.</li>
            <li>Documented by default; no hidden magic.</li>
            <li>No vendor lock-in evangelism; fit tools to problems.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Outcome</h2>
          <p className="mt-2 text-text-primary dark:text-slate-300">
            We deliver working pipelines, documented systems, reproducible infrastructure, and measurable improvements — the foundation for Datadoktor Hub.
          </p>
        </section>
      </div>
    </>
  );
}
