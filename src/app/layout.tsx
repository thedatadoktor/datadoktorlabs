import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datadoktor Labs – Data Engineering as a Service",
  description: "Production-grade data pipelines, warehouses and analytics systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Persist theme before hydration */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') document.documentElement.classList.add('dark');
              else if (theme === 'light') document.documentElement.classList.remove('dark');
            } catch {}
          `}
        </Script>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Plausible analytics */}
        <Script defer data-domain="datadoktorlabs.com" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  );
}
