import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-primary/20 bg-bg-light/95 dark:bg-bg-dark-section/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-primary text-lg">Datadoktor Labs</Link>
        <nav className="flex items-center gap-6 text-text-primary dark:text-slate-200">
          <Link href="/about" className="hover:text-secondary transition">About</Link>
          <Link href="/why" className="hover:text-secondary transition">Why</Link>
          <Link href="/services" className="hover:text-secondary transition">Services</Link>
          <Link href="/case-studies" className="hover:text-secondary transition">Case Studies</Link>
          <Link href="/blog" className="hover:text-secondary transition">Blog</Link>
          <Link href="/contact" className="bg-secondary text-primary px-4 py-2 rounded font-medium hover:bg-accent transition">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
