"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          {/* 404 Number */}
          <h1 className="text-9xl md:text-[12rem] font-bold text-gradient mb-4">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>

          <p className="text-foreground-muted text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-medium rounded-full transition-colors"
            >
              <Home size={18} />
              Go to Homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 font-medium rounded-full transition-colors"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-foreground-muted mb-4">
              Here are some helpful links instead:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/work"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
