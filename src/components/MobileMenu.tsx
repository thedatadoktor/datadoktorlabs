"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuContent = isOpen ? (
    <div 
      className="fixed top-16 left-0 right-0 bottom-0 bg-[#16263F]/95 backdrop-blur z-[9999] overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <nav className="flex flex-col py-2" onClick={(e) => e.stopPropagation()}>
            <Link href="/" className="px-6 py-3 hover:bg-primary/20 transition text-white" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="px-6 py-3 hover:bg-primary/20 transition text-white" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/why" className="px-6 py-3 hover:bg-primary/20 transition text-white" onClick={() => setIsOpen(false)}>
              Why
            </Link>
            <Link href="/services" className="px-6 py-3 hover:bg-primary/20 transition text-white" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/case-studies" className="px-6 py-3 hover:bg-primary/20 transition text-white" onClick={() => setIsOpen(false)}>
              Case Studies
            </Link>
            <Link href="/blog" className="px-6 py-3 hover:bg-primary/20 transition text-white" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <div className="px-6 py-3">
              <Link
                href="/contact"
                className="block bg-secondary text-black px-4 py-3 text-center rounded font-medium hover:bg-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
  ) : null;

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2 relative"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {mounted && menuContent && createPortal(menuContent, document.body)}
    </div>
  );
}
