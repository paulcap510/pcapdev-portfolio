"use client";

import { motion } from "framer-motion";

import {
  SiPython, SiFastapi, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiSqlalchemy,
  SiPandas, SiR, SiGit, SiDjango, SiDocker, SiPostgresql, SiNextdotjs,
} from "react-icons/si";

const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#00C7B7" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#D71F00" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "R", icon: SiR, color: "#276DC3" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white px-6 sm:px-12 py-32 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-bold tracking-tight mb-6"
        >
          Behind the Code
        </motion.h2>
        {/* <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
          Behind the Code
        </h2> */}

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-zinc-200 leading-relaxed max-w-2xl mb-16"
        >


        {/* <p className="text-lg text-zinc-200 leading-relaxed max-w-2xl mb-16"> */}
          I hold a Ph.D. in cultural anthropology and spent years in public
          health research before moving into software development. That
          background shapes how I build. I care as much about how people
          actually use a product as I do about the code underneath it. These
          days I&apos;m focused on full-stack development, building tools
          that are grounded in real user behavior.
        </motion.p>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"> */}
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
              >
                <Icon
                  size={36}
                  style={{ color: skill.color }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium text-zinc-300">
                  {skill.name}
                </span>
              </div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}
