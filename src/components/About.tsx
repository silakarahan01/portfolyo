"use client";

import { motion } from "framer-motion";
import { Monitor, Code2, Database, Wrench, BrainCircuit } from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Code2,
    title: "C# / .NET",
    items: ["C#", ".NET", "WPF", "MVVM", "Desktop Uygulama"],
  },
  {
    icon: BrainCircuit,
    title: "Python & AI",
    items: ["Python", "Deep Learning", "TensorFlow / PyTorch", "Veri İşleme", "Django"],
  },
  {
    icon: Database,
    title: "Veritabanı & Araçlar",
    items: ["MySQL", "MSSQL", "SQL", "Git", "GitHub", "Docker", "Vercel", "VS Code"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      {/* Top divider */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent mb-24" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Ben kimim
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
              Hakkımda
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Merhaba! Ben Sıla —{" "}
                <span className="text-slate-300 font-medium">
                  Bilgisayar Mühendisliği mezunu
                </span>
                , modern web teknolojilerinden yapay zeka sistemlerine kadar
                geniş bir yelpazede{" "}
                <span className="text-slate-300 font-medium">
                  uçtan uca (Full Stack)
                </span>{" "}
                çözümler üreten bir yazılım geliştiriciyim.
              </p>
              <p>
                Profesyonel kariyerimde{" "}
                <span className="text-slate-300 font-medium">
                  1 yıl boyunca Frontend Developer
                </span>{" "}
                olarak{" "}
                <a
                  href="https://goaltesting.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                >
                  GoalTesting
                </a>
                ’te görev aldım; JavaScript, TypeScript, React Native, HTML5,
                CSS3, Tailwind CSS ve Bootstrap 5 gibi teknolojilerle kullanıcı
                odaklı, modern arayüzler geliştirdim.
              </p>
              <p>
                Bireysel projelerimde{" "}
                <span className="text-slate-300 font-medium">C# ve .NET</span>{" "}
                ekosistemiyle ölçeklenebilir arka plan mimarileri kurarken,{" "}
                <span className="text-slate-300 font-medium">Python</span> ile{" "}
                <span className="text-slate-300 font-medium">
                  Makine Öğrenmesi ve Derin Öğrenme
                </span>{" "}
                alanlarında model geliştirme süreçlerinde aktif rol aldım.
              </p>
              <p>
                Disiplinler arası bu teknik yetkinliklerimle yenilikçi ve yüksek
                performanslı yazılım ürünleri ortaya koymayı hedefliyorum.
              </p>
            </div>

            {/* Contact shortcut */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:sila.karahan3401@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-sky-600/25"
              >
                E-posta Gönder
              </a>
              <a
                href="https://github.com/silakarahan01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-[#1e293b] hover:border-sky-600/50 text-slate-400 hover:text-sky-400 text-sm font-semibold transition-all"
              >
                GitHub Profili
              </a>
              <a
                href="https://www.linkedin.com/in/sila-karahan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-[#1e293b] hover:border-sky-600/50 text-slate-400 hover:text-sky-400 text-sm font-semibold transition-all"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-[#1e293b] bg-[#0f172a] hover:border-sky-600/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-600/15 flex items-center justify-center">
                    <skill.icon size={16} className="text-sky-400" />
                  </div>
                  <h3 className="font-semibold text-slate-200">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-[#1e293b] text-slate-400 border border-[#2d3f55]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
