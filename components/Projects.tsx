"use clinet";

import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative bg-black text-white px-6 sm:px-12 py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-400 mt-4 mb-4 rounded-full" />
          <p className="text-xl text-cyan-300 font-medium">
            Check out all my projects below.
          </p>

        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-8"
        >


          {featured.map((project) => (
<div
  key={project.title}
  className="group relative flex flex-col rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20"
>
  {/* Shine sweep */}
  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
    <div className="absolute top-0 -left-full h-full w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[150%]" />
  </div>

  <div className="w-full aspect-[4/3] bg-zinc-900">
  <div className="relative w-full h-full">
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover object-top"
    />
  </div>
  <div className="h-1 w-full bg-blue-400" />
</div>



  <div className="flex flex-col flex-1 p-6">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-5">
      {project.description}
    </p>

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
                  </motion.div>


        <div className="flex justify-center mt-14">
          <Link href="/projects" className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            View All Projects
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}