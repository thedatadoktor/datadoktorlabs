"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const el = document.documentElement;
    const next = el.classList.toggle("dark") ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button onClick={toggle} className="px-3 py-2 border-3 border-primary bg-bg-light dark:bg-bg-dark-section hover:bg-accent dark:hover:bg-accent transition text-text-primary dark:text-secondary text-sm font-medium" title="Toggle dark mode">
      {typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "☀️" : "🌙"}
    </button>
  );
}
