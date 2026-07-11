import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/projects";

export default function AllProjectsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 sm:px-12 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-16">
          All Projects
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden transition-colors duration-300 hover:border-blue-400/40"
            >
              <div className="relative w-full aspect-[4/3] bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
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
        </div>
      </div>
    </main>
  );
}