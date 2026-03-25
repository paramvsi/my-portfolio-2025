"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface/80 backdrop-blur-xl shadow-2xl shadow-primary/5"
            : "bg-transparent"
        )}
      >
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-black tracking-tighter text-white hover:scale-105 transition-transform"
          >
            Paramveer Singh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight text-sm uppercase">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors active:scale-95 duration-200",
                  pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant/60 hover:text-on-surface"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <Link
            href="/paramveer_resume.pdf"
            target="_blank"
            className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-lg font-bold font-headline text-sm hover:brightness-110 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Resume
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <nav className="relative h-full flex flex-col items-center justify-center space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold font-headline uppercase tracking-tight transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-on-surface"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/paramveer_resume.pdf"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold font-headline text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
