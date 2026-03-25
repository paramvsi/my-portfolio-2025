"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="nebula-gradient pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-16">
        {/* Text content */}
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-label text-primary tracking-widest text-sm font-bold uppercase block"
            >
              Senior Full-Stack Engineer · 9+ Years
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight text-on-background"
            >
              Building Digital{" "}
              <br />
              <span className="text-primary italic inline-block hover:scale-110 transition-transform duration-500 cursor-default">
                Structures
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed"
          >
            Crafting high-performance web platforms and enterprise systems with architectural precision. Currently building data monetization tools, streaming ETL engines, and real-time dashboards at telecom scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-4"
          >
            <Link
              href="/work"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold font-headline text-base shadow-lg shadow-primary/20 hover:scale-[1.05] hover:shadow-primary/40 active:scale-95 transition-all group inline-flex items-center gap-2"
            >
              View Projects
              <ArrowRight
                size={18}
                className="inline-block transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="text-on-surface border border-outline-variant/30 px-8 py-4 rounded-xl font-bold font-headline text-base hover:bg-white/5 hover:border-primary/50 transition-all active:scale-95 inline-flex items-center gap-2"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          className="flex-1 relative hidden md:block"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Rotated background layer */}
            <motion.div
              className="absolute inset-0 bg-primary-dark/20 rounded-3xl rotate-3"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Photo container */}
            <div className="absolute inset-0 bg-surface-high rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 -rotate-3 transition-all duration-700 hover:rotate-0 hover:scale-105 group">
              <Image
                src="/images/paramveer-hero.png"
                alt="Paramveer Singh - Senior Full-Stack Engineer"
                fill
                className="object-cover grayscale contrast-125 opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                priority
                sizes="(max-width: 768px) 0px, (max-width: 1024px) 320px, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
