
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">

        <a href="/" className="group relative inline-block transition-transform duration-300 hover:-translate-y-1">
  <div className="absolute inset-0 rounded-full bg-sky-400/0 blur-lg transition-all duration-300 group-hover:bg-sky-400/30 group-hover:scale-125" />
  <Image
    src="/logo.png"
    alt="Paul C. logo"
    width={200}
    height={72}
    className="relative w-auto h-20"
  />
</a>




<div className="flex gap-8 text-base font-medium text-zinc-300">
  <a href="/#home" className="group relative inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-sky-400">
    <span className="absolute inset-0 -m-2 rounded-full bg-sky-400/0 blur-md transition-all duration-300 group-hover:bg-sky-400/25" />
    <span className="relative">Home</span>
  </a>
  <a href="/#about" className="group relative inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-sky-400">
    <span className="absolute inset-0 -m-2 rounded-full bg-sky-400/0 blur-md transition-all duration-300 group-hover:bg-sky-400/25" />
    <span className="relative">About</span>
  </a>
  <a href="/#projects" className="group relative inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-sky-400">
    <span className="absolute inset-0 -m-2 rounded-full bg-sky-400/0 blur-md transition-all duration-300 group-hover:bg-sky-400/25" />
    <span className="relative">Projects</span>
  </a>
  {/* <a href="#wrtiting" className="group relative inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-sky-400">
    <span className="absolute inset-0 -m-2 rounded-full bg-sky-400/0 blur-md transition-all duration-300 group-hover:bg-sky-400/25" />
    <span className="relative">Writing</span>
  </a> */}
  <a href="#/contact" className="group relative inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-sky-400">
    <span className="absolute inset-0 -m-2 rounded-full bg-sky-400/0 blur-md transition-all duration-300 group-hover:bg-sky-400/25" />
    <span className="relative">Contact</span>
  </a>
</div>
      </div>
    </nav>
  );
}