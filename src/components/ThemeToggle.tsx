"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const el = document.documentElement;
    const next = el.classList.toggle("dark") ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button onClick={toggle} className="border px-2 py-1 rounded">Toggle</button>
  );
}
