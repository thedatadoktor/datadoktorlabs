export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b-4 border-primary bg-gradient-to-b from-bg-light via-bg-light to-bg-light dark:from-bg-dark-section dark:via-bg-dark-section dark:to-bg-dark-section/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-primary dark:text-secondary">{title}</h1>
        {subtitle ? <p className="mt-2 text-text-muted dark:text-slate-400 text-lg">{subtitle}</p> : null}
      </div>
    </section>
  );
}
