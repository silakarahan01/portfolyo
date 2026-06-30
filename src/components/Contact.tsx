"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

const contactLinks = [
  {
    IconComponent: Mail,
    isCustom: false,
    label: "E-posta",
    value: "sila.karahan3401@gmail.com",
    href: "mailto:sila.karahan3401@gmail.com",
    description: "İş görüşmeleri için en hızlı iletişim kanalı.",
  },
  {
    IconComponent: null,
    isCustom: true,
    label: "GitHub",
    value: "github.com/silakarahan01",
    href: "https://github.com/silakarahan01",
    description: "Projelerimi ve kod örneklerimi inceleyebilirsiniz.",
  },
  {
    IconComponent: LinkedinIcon,
    isCustom: false,
    label: "LinkedIn",
    value: "linkedin.com/in/sila-karahan",
    href: "https://www.linkedin.com/in/sila-karahan/",
    description: "Profesyonel profilim, iş deneyimim ve referanslarım.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      {/* Top divider */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent mb-24" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            İş Fırsatları
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            İş Görüşmeleri İçin İletişim
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            İş görüşmeleri için aşağıdaki
            kanallardan bana ulaşabilirsiniz. Mesajlarınıza en kısa sürede dönüş
            yaparım.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-[#1e293b] bg-[#0f172a] hover:border-sky-600/40 transition-all card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-600/15 flex items-center justify-center shrink-0 group-hover:bg-sky-600/25 transition-colors">
                {item.isCustom ? (
                  <GithubIcon size={18} className="text-sky-400" />
                ) : item.IconComponent ? (
                  <item.IconComponent size={18} className="text-sky-400" />
                ) : null}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-slate-300">
                    {item.label}
                  </span>
                  <ExternalLink
                    size={12}
                    className="text-slate-600 group-hover:text-sky-400 transition-colors"
                  />
                </div>
                <p className="text-sky-400 text-sm font-medium truncate">
                  {item.value}
                </p>
                <p className="text-slate-500 text-xs mt-1">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <span>© 2026 Sıla Karahan · Tüm hakları saklıdır.</span>
          <span>
            silakarahan.com.tr&nbsp;·&nbsp;{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              Vercel
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
