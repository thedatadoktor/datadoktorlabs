"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  event?: string;
  props?: Record<string, string>;
  className?: string;
};

export default function CTAButton({ href, children, event = "CTA Click", props, className }: Props) {
  const onClick = () => {
    try {
      // @ts-expect-error plausible may not be typed
      if (typeof window !== "undefined" && typeof window.plausible === "function") {
        // @ts-expect-error runtime call
        window.plausible(event, { props });
      }
    } catch {}
  };

  return (
    <Link href={href} onClick={onClick} className={className ?? "bg-secondary text-primary px-4 py-2 rounded font-medium hover:bg-accent transition"}>
      {children}
    </Link>
  );
}
