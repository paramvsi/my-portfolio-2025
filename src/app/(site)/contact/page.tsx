"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "paramsinghkhattra@gmail.com",
    href: "mailto:paramsinghkhattra@gmail.com",
    description: "Best for detailed inquiries and project discussions",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "/in/paramveer-singh-3623a9183",
    href: "https://www.linkedin.com/in/paramveer-singh-3623a9183/",
    description: "Connect for professional networking",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@paramvsi",
    href: "https://github.com/paramvsi",
    description: "Check out my open-source contributions",
  },
];

const availability = [
  {
    icon: Clock,
    title: "Response Time",
    value: "24–48 Hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dubai, UAE",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12">
        <Container>
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
          >
            <SectionHeader
              eyebrow="Get in Touch"
              title="Let's Build Something Great Together"
              description="Open to freelance projects, collaborations, and full-time opportunities."
              centered
            />
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <GlassCard
                      hover
                      className="h-full group hover:border-primary/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          className="p-3 rounded-lg bg-primary/10 mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon
                            size={32}
                            className="text-primary drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]"
                          />
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-1 pb-4 border-b border-white/10 w-full">
                          {method.title}
                        </h3>
                        <p className="text-primary font-mono text-sm mb-3 mt-4 break-all">
                          {method.value}
                        </p>
                        <p className="text-sm text-white/50">
                          {method.description}
                        </p>
                      </div>
                    </GlassCard>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Availability Info - Horizontal Pill Style */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 max-w-2xl mx-auto">
              {availability.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        size={20}
                        className="text-primary drop-shadow-[0_0_6px_rgba(6,182,212,0.3)]"
                      />
                    </motion.div>
                    <div>
                      <p className="text-xs text-foreground-muted/80 uppercase tracking-wider">
                        {item.title}
                      </p>
                      <p className="font-semibold text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard className="text-center relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Need a <span className="text-gradient">Frontend Engineer</span> or{" "}
                  <span className="text-gradient">Full-Stack Partner</span>?
                </h3>
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  I help teams build fast, scalable, and beautifully crafted web applications.
                  Whether it's a real-time dashboard, performance optimization, or building a
                  complete frontend architecture — I can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:paramsinghkhattra@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={18} />
                    <span className="relative">
                      Let's Connect
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white/50 transition-all group-hover:w-full" />
                    </span>
                  </motion.a>
                  <motion.a
                    href="/paramveer_resume.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/40 hover:border-primary/60 hover:bg-primary/10 font-medium rounded-full transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative">
                      Download Resume
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
                    </span>
                  </motion.a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Response Note */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto mt-8"
          >
            <div className="text-center text-sm text-foreground-muted/70">
              <p>
                I respond to most messages within 24–48 hours.
              </p>
            </div>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
