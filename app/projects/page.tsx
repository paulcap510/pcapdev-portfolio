"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projects } from "@/lib/projects";

const categoryConfig: Record<string, { color: string; icon: string | null }> = {
  "All": { color: "blue", icon: null },
  "Web Applications": { color: "cyan", icon: "🌐" },
  "Research & Data Tools": { color: "purple", icon: "📊" },
  "APIs & Automation": { color: "orange", icon: "⚙️" },
  "Other": { color: "zinc", icon: "✦" },
};

const categories = Object.keys(categoryConfig);

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-black text-white px-6 sm:px-12 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[350px] bg-cyan-400/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Link href="/#home" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors mb-8">
          <FiArrowLeft size={14} />
          Back to home
        </Link>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
          All Projects
        </h1>
        <p className="text-zinc-400 mb-10">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-3 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "bg-blue-400 text-black border-blue-400 shadow-lg shadow-blue-400/30 scale-105"
                    : "bg-white/[0.03] text-zinc-300 border-white/10 hover:border-blue-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5"
                }`}
              >
                <span className="mr-1.5">{categoryConfig[cat].icon}</span>
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col sm:flex-row gap-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute top-0 -left-full h-full w-1/4 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[150%]" />
              </div>

              <div className="relative w-full sm:w-64 aspect-[4/3] sm:aspect-square shrink-0 rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 256px"
                  className="object-cover object-top"
                />
                <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                  {categoryConfig[project.category]?.icon} {project.category}
                </span>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                      <FiGithub size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full bg-blue-400 text-black hover:bg-blue-300 transition-colors">
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}