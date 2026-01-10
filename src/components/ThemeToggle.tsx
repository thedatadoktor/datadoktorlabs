"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const el = document.documentElement;
    const next = el.classList.toggle("dark") ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button onClick={toggle} className="px-3 py-2 rounded border border-primary/30 hover:bg-primary/10 transition text-text-primary dark:text-slate-200 text-sm font-medium" title="Toggle dark mode">
      {typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "☀️" : "🌙"}
    </button>
  );
}
