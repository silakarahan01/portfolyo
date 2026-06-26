"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { scrollToHref } from "@/lib/lenis";

export default function Hero() {
  const handleScroll = (href: string) => {
    scrollToHref(href);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -top-10 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-600/40 bg-sky-600/10 text-sky-400 text-sm font-medium mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Bilgisayar Mühendisi
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 tracking-tight"
        >
          Sıla <span className="gradient-text">Karahan</span>
        </motion.h1>

        {/* Tek satır tanıtım */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8"
        >
        </motion.p>

        {/* CTA + social — tek satır, kompakt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/silakarahan01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-sky-400 transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sila-karahan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-sky-400 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sila.karahan3401@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-posta gönder"
              className="text-slate-500 hover:text-sky-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
