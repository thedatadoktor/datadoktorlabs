export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle ? <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p> : null}
      </div>
    </section>
  );
}
