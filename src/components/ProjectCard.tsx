"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";
import Image from "next/image";
import GithubIcon from "@/components/icons/GithubIcon";
import type { Project } from "@/data/projects";

const categoryLabels: Record<Project["category"], string> = {
  "web-app": "Web Uygulaması",
  landing: "Landing Page",
  desktop: "Masaüstü",
  platform: "Platform",
  "data-science": "Veri Bilimi",
};

const statusColors: Record<Project["status"], string> = {
  live: "text-green-400 bg-green-400/10 border-green-400/20",
  "github-only": "text-slate-400 bg-slate-400/10 border-slate-400/20",
  "live-no-repo": "text-green-400 bg-green-400/10 border-green-400/20",
};

const statusLabels: Record<Project["status"], string> = {
  live: "Canlı",
  "github-only": "GitHub",
  "live-no-repo": "Canlı",
};

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-2xl border border-[#1e293b] bg-[#0f172a] overflow-hidden card-hover"
    >
      {/* Screenshot */}
      <div className="relative h-44 bg-[#020617] overflow-hidden">
        <Image
          src={project.screenshot}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/screenshots/placeholder.svg";
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#030712]/80 backdrop-blur-sm text-slate-400 border border-[#1e293b]">
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}
          >
            {project.status === "live" || project.status === "live-no-repo" ? (
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            ) : (
              <Monitor size={10} />
            )}
            {statusLabels[project.status]}
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        {/* Metrics — veri bilimi sonuçlarını tek bakışta gösterir */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.metrics.map((m) => (
              <span
                key={m.label}
                className="flex items-baseline gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-400/10 border border-emerald-400/20"
              >
                <span className="text-sm font-bold text-emerald-300">
                  {m.value}
                </span>
                <span className="text-xs text-emerald-400/70">{m.label}</span>
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1e293b] text-slate-300 border border-[#2d3f55]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-all hover:shadow-md hover:shadow-sky-600/25 active:scale-95"
            >
              <ExternalLink size={14} />
              Canlı Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#1e293b] hover:border-sky-600/50 text-slate-400 hover:text-sky-400 text-sm font-medium transition-all active:scale-95 ${
                !project.demo ? "flex-1" : ""
              }`}
            >
              <GithubIcon size={14} />
              {!project.demo ? "GitHub'da Gör" : "Kod"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
