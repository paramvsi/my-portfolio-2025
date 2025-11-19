"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:paramsinghkhattra@gmail.com",
    icon: Mail,
    label: "paramsinghkhattra@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paramveer-singh-3623a9183/",
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/paramvsi",
    icon: Github,
    label: "View on GitHub",
  },
];

export default function ContactCTA() {
  return (
    <AnimatedSection className="py-16 md:py-24">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl glass-heavy p-10 md:p-16 max-w-4xl mx-auto">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-hero-gradient opacity-20" />

          <div className="relative text-center">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Let&apos;s Build{" "}
                <span className="text-gradient">Modern, High-Quality Products</span>{" "}
                Together
              </h2>
              <p className="text-lg text-foreground-muted/80 mb-6 max-w-2xl mx-auto">
                I&apos;m open to collaborating on modern web applications, enterprise systems, real-time platforms, and high-impact product ideas.
              </p>
              <p className="text-foreground-muted text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always open to discussing new projects, consulting opportunities, or collaborations. Whether you&apos;re planning a new product, improving an existing one, or just want to connect, feel free to reach out.
              </p>
              <p className="text-sm font-medium text-primary/90 mb-8">
                Currently available for freelance, consulting, and part-time engagements.
              </p>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground font-medium rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
                >
                  Get in touch
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/paramveer_resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/40 hover:border-primary/60 hover:bg-primary/10 font-medium rounded-full transition-all duration-300"
                >
                  Download resume
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 justify-center pt-8 border-t border-white/10"
            >
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-foreground-muted hover:text-primary transition-all duration-300 relative"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      className="transition-transform duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <span className="text-sm relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
