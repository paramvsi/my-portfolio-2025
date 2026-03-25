"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { fadeUp } from "@/lib/animations";

const contactChannels = [
  {
    icon: Mail,
    label: "Email Me",
    value: "paramsinghkhattra@gmail.com",
    href: "mailto:paramsinghkhattra@gmail.com",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Linkedin,
    label: "Professional",
    value: "linkedin.com/in/paramveer-singh",
    href: "https://www.linkedin.com/in/paramveer-singh-3623a9183/",
    accent: "bg-tertiary/10 text-tertiary",
  },
  {
    icon: Github,
    label: "Repository",
    value: "github.com/paramvsi",
    href: "https://github.com/paramvsi",
    accent: "bg-secondary/10 text-secondary",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative min-h-screen">
        {/* Background Nebula */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full nebula-gradient -z-10 pointer-events-none" />

        {/* Hero Header */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block">
            Get in touch
          </span>
          <h1 className="font-headline font-extrabold text-6xl md:text-8xl tracking-tighter text-on-background mb-6">
            Let&apos;s <span className="text-primary italic">Connect.</span>
          </h1>
          <p className="max-w-2xl text-lg text-on-surface-variant leading-relaxed">
            Currently looking for new opportunities and high-impact
            collaborations. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>
        </motion.section>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={index}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl bg-surface-low hover:bg-surface-high transition-all duration-300 block"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${channel.accent} flex items-center justify-center`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                          {channel.label}
                        </p>
                        <p className="text-on-surface font-semibold">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location Card */}
            <div className="rounded-xl overflow-hidden glass-card h-64 relative">
              <div className="w-full h-full bg-gradient-to-br from-surface-high via-surface-container to-surface-variant opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-xs font-label text-on-surface">
                  Based in Dubai, UAE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card p-8 md:p-12 rounded-xl shadow-2xl">
              <h3 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
                Send a Message
                <span className="w-12 h-px bg-outline-variant" />
              </h3>

              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full bg-surface-low border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/30 font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full bg-surface-low border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/30 font-body"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full bg-surface-low border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/30 font-body"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full bg-surface-low border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/30 resize-none font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-on-primary py-4 rounded-lg font-headline font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Transmit Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
