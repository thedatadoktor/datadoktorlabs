"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const el = document.documentElement;
    const newDark = !el.classList.contains("dark");
    if (newDark) {
      el.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      el.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(newDark);
  };

  return (
    <button onClick={toggle} className="px-3 py-2 border-3 border-primary bg-bg-light dark:bg-bg-dark-section hover:bg-accent dark:hover:bg-accent transition text-text-primary dark:text-secondary text-sm font-medium" title="Toggle dark mode">
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
