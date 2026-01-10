import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b bg-white/70 dark:bg-gray-950/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Datadoktor Labs</Link>
        <nav className="flex items-center gap-4">
          <Link href="/about">About</Link>
          <Link href="/why">Why</Link>
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="underline">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
