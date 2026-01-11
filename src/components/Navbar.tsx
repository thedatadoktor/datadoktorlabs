import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b-4 border-primary bg-bg-light/95 dark:bg-bg-dark-section/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image src="/logo.png" alt="Datadoktor Labs" width={40} height={40} className="h-10 w-auto" />
          <span className="font-semibold text-primary text-lg hidden sm:inline">Datadoktor Labs</span>
        </Link>
        <nav className="flex items-center gap-6 text-text-primary dark:text-slate-200">
          <Link href="/" className="hover:text-secondary transition">Home</Link>
          <Link href="/about" className="hover:text-secondary transition">About</Link>
          <Link href="/why" className="hover:text-secondary transition">Why</Link>
          <Link href="/services" className="hover:text-secondary transition">Services</Link>
          <Link href="/case-studies" className="hover:text-secondary transition">Case Studies</Link>
          <Link href="/blog" className="hover:text-secondary transition">Blog</Link>
          <Link href="/contact" className="bg-secondary text-black px-4 py-2 rounded font-medium hover:bg-accent transition">Contact</Link>

        </nav>
      </div>
    </header>
  );
}
