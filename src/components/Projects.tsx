"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const dataScience = projects.filter((p) => p.domain === "data-science");
const frontend = projects.filter((p) => p.domain === "frontend");

interface ColumnProps {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  items: Project[];
  className?: string;
}

function ProjectColumn({
  id,
  eyebrow,
  title,
  description,
  items,
  className = "",
}: ColumnProps) {
  return (
    <div id={id} className={className}>
      {/* Column header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        {eyebrow && (
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
          {title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">{description}</p>
        <div className="mt-5 h-px w-24 bg-gradient-to-r from-sky-600 to-transparent" />
      </motion.div>

      {/* Cards — sütun içinde 2'şerli, kompakt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-10 xl:px-14">
      <div className="max-w-[1700px] mx-auto">
        {/* Bölüm başlığı */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-10 block text-center"
        >
          Portfolyo
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Sol — Veri Bilimi */}
          <ProjectColumn
            id="data-science"
            title="Veri Bilimi Projeleri"
            description="Python ile makine öğrenmesi, derin öğrenme ve veri analizi."
            items={dataScience}
            className="lg:pr-10 xl:pr-14"
          />

          {/* Sağ — Frontend */}
          <ProjectColumn
            id="frontend-projects"
            title="Backend ve Frontend Projeleri"
            description="Gerçek dünyada kullanılan Full Stack web projeleri ve C# .NET projeleri."
            items={frontend}
            className="lg:pl-10 xl:pl-14 lg:border-l lg:border-[#1e293b]"
          />
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Daha fazla proje için GitHub profilimi ziyaret edebilirsin.
          </p>
          <a
            href="https://github.com/silakarahan01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e293b] hover:border-sky-600/50 text-slate-400 hover:text-sky-400 font-medium transition-all text-sm"
          >
            github.com/silakarahan01 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
