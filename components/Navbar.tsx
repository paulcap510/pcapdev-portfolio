"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <a href="/#home" className="group relative inline-block transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-full bg-sky-400/0 blur-lg transition-all duration-300 group-hover:bg-sky-400/30 group-hover:scale-125" />
            <Image src="/logo.png" alt="Paul C. logo" width={200} height={72} className="relative w-auto h-14 sm:h-20" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-300">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="group relative inline-block transition-transform duration-300 hover:-translate-y-0.5 hover:text-blue-400">
                <span className="absolute inset-0 -m-2 rounded-full bg-sky-400/0 blur-md transition-all duration-300 group-hover:bg-sky-400/25" />
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="md:hidden relative z-50 text-white">
            <FiMenu size={28} className={`transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
            <FiX size={28} className={`absolute top-0 left-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black">
          <div className="flex flex-col items-center gap-8 pt-32 text-2xl font-medium">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}