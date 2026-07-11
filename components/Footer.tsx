import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 text-white px-6 sm:px-12 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] bg-blue-600/25 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-1/4 w-[450px] h-[350px] bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-sky-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
              great
            </span>
            .
          </h2>
          <p className="text-sm text-zinc-200 mb-6">
            Open to new projects, collaborations, and opportunities.
          </p>

            <div className="flex items-center gap-3">
            <a href="https://github.com/paulcap510" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:rotate-12 hover:bg-blue-400 hover:border-blue-400">
                <FiGithub size={18} className="transition-all duration-300 text-white group-hover:text-black group-hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/pjcapphd510/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:-rotate-12 hover:bg-cyan-400 hover:border-cyan-400">
                <FiLinkedin size={18} className="transition-all duration-300 text-white group-hover:text-black group-hover:scale-110" />
            </a>
            <a href="mailto:paulcapob@gmail.com" aria-label="Email" className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:rotate-12 hover:bg-sky-400 hover:border-sky-400">
                <FiMail size={18} className="transition-all duration-300 text-white group-hover:text-black group-hover:scale-110" />
            </a>
            </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <a href="#home" className="text-base font-bold tracking-tight">
            <span className="text-zinc-500">{"<"}</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Paul C.
            </span>
            <span className="text-zinc-200">{"/>"}</span>
          </a>

          <p className="text-xs text-zinc-200">
            © {year} Paul C. Built with Next.js & Tailwind CSS.
          </p>

          <a href="#home" className="group flex items-center gap-2 text-xs text-zinc-200 hover:text-blue-400 transition-colors">
            Back to top
            <FiArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}