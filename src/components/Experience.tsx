"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Goal Testing",
    role: "Web Developer",
    type: "Yarı Zamanlı · Zorunlu Staj",
    period: "Ağustos 2025 — Temmuz 2026",
    location: "İstanbul, Türkiye",
    current: false,
    description:
      "Goal Testing ekosistemindeki ana web platformu ve kullanıcı portallarının geliştirilme süreçlerinde rol alarak, modüler mimari standartlarına uygun uçtan uca web çözümleri ürettim; ağırlıklı olarak backend mimarisinde çalışırken frontend arayüzlerinin geliştirilmesine de katkı verdim. Bu süreçte Şubat–Mayıs 2026 arasındaki zorunlu stajımı da aynı ekipte tamamladım.",
    highlights: [
      "İstemci ve sunucu tarafı iletişimini optimize etmek amacıyla asenkron veri yönetimi tekniklerini uyguladım; RESTful API entegrasyonlarıyla güvenli ve hatasız veri akışını sağladım.",
      "Karmaşık veri tabloları ve dinamik form bileşenleri içeren yönetici (CMS/Admin) ekranlarında state yönetimini kurguladım; performans optimizasyonları ve kod bölme (code-splitting) mimarilerini entegre ettim.",
      "Modern UI/UX ve responsive tasarım ilkelerine uygun, yeniden kullanılabilir arayüz bileşenleri geliştirerek frontend mimarisine de katkı sağladım.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "BEM", "REST API"],
    color: "sky",
  },
  {
    company: "Wguard",
    role: "Sistem Mühendisi Stajyeri",
    type: "Gönüllü Staj",
    period: "Haziran 2024 — Ağustos 2024",
    location: "İstanbul, Türkiye",
    current: false,
    description:
      "Kurumsal ağ güvenliği altyapılarının izlenmesi ve sistem operasyonları süreçlerine destek verdim.",
    highlights: [
      "Kurumsal ağ güvenliği altyapılarının izlenmesi süreçlerine aktif destek verdim.",
      "Sistem operasyonları için gerekli teknik dokümantasyon çalışmalarını yürüttüm.",
    ],
    tech: ["Ağ Güvenliği", "Sistem İzleme", "Teknik Dokümantasyon"],
    color: "slate",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent mb-24" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Kariyer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            İş Deneyimi
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Staj ve profesyonel deneyimlerim boyunca edindiğim beceriler ve katkılarım.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-600" />
            <div className="w-2 h-2 rounded-full bg-sky-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky-600" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-600/50 via-[#1e293b] to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative sm:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-6 hidden sm:flex">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "border-sky-500 bg-sky-600/20"
                        : "border-slate-600 bg-[#0f172a]"
                    }`}
                  >
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl border bg-[#0f172a] p-6 transition-all card-hover ${
                    exp.current
                      ? "border-sky-600/30"
                      : "border-[#1e293b]"
                  }`}
                >
                  <div className="flex">
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-slate-100">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-sky-600/15 text-sky-400 border border-sky-600/25">
                            Aktif
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#1e293b] text-slate-400 border border-[#2d3f55]">
                          {exp.type}
                        </span>
                      </div>

                      {/* Company + meta */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          <Briefcase size={13} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5">
                        {exp.highlights.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1e293b] text-slate-400 border border-[#2d3f55]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
