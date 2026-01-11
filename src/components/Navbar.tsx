import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="border-b-4 border-primary bg-bg-light/95 dark:bg-bg-dark-section/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-primary text-base md:text-lg hover:text-secondary transition flex-shrink-0">
          Datadoktor Labs
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base text-text-primary dark:text-slate-200">
          <Link href="/" className="hover:text-secondary transition">Home</Link>
          <Link href="/about" className="hover:text-secondary transition">About</Link>
          <Link href="/why" className="hover:text-secondary transition">Why</Link>
          <Link href="/services" className="hover:text-secondary transition">Services</Link>
          <Link href="/case-studies" className="hover:text-secondary transition whitespace-nowrap">Case Studies</Link>
          <Link href="/blog" className="hover:text-secondary transition">Blog</Link>
          <Link href="/contact" className="bg-secondary text-black px-3 lg:px-4 py-2 rounded font-medium hover:bg-accent transition whitespace-nowrap">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
