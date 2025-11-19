"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <AnimatedSection className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s work together</h2>
        <p className="text-foreground-muted mb-8">Have a project in mind? Let&apos;s chat.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-medium rounded-full transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </AnimatedSection>
  );
}
