"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main id="home" className="relative flex min-h-screen items-center justify-center bg-black text-white px-6 sm:px-12 overflow-hidden pt-20 scroll-mt-20">
        {/* Aurora background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/40 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
          <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-600/35 rounded-full blur-3xl animate-pulse-slow [animation-delay:4s]" />
          <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow [animation-delay:3s]" />
        </div>

        <div className="relative z-10 max-w-6xl w-full flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-20">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-center sm:text-left space-y-6"
          >
            <p className="text-lg text-zinc-400">Hi there,</p>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              I am{" "}
              <span className="inline-block bg-linear-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105 cursor-default">
                Paul C.
              </span>
            </h1>

            <p className="text-xl">
              <span className="inline-block text-blue-300 font-medium transition-colors duration-300 hover:text-white cursor-default">
                Full-Stack Developer
              </span>
              {" "}&{" "}
              <span className="inline-block text-cyan-300 font-medium transition-colors duration-300 hover:text-white cursor-default">
                UX Researcher
              </span>
            </p>

            <p className="text-lg text-zinc-200 leading-relaxed">
              I build web applications for small businesses, grounded in real user research rather than guesswork.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-blue-400/30 shrink-0 transition-colors duration-300 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/40"
            >
            <Image
              src="/image1.jpg"
              alt="Paul C."
              width={384}
              height={384}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-blue-500/25 mix-blend-color" />
          </motion.div>
        </div>
      </main>

      <About />
      <Projects />
      <Contact />
    </>
  );
}