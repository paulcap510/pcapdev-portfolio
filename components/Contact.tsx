"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiClock } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbdvnqqq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-black text-white px-6 sm:px-12 py-32 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0">
          <motion.div
    animate={{ x: [0, 150, -80, 0], y: [0, -100, 60, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl"
  />
  <motion.div
    animate={{ x: [0, -130, 80, 0], y: [0, 90, -60, 0] }}
    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-cyan-400/25 rounded-full blur-3xl"
  />
  <motion.div
    animate={{ x: [0, 100, -110, 0], y: [0, -80, 90, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-3xl"
  />

        {/* <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-cyan-400/25 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-3xl animate-pulse-slow [animation-delay:4s]" /> */}
      </div>

      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative z-10 max-w-xl mx-auto"
      >
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-base text-zinc-200 mb-10">
          Have a project in mind or just want to say hi? Send me a message.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center rounded-2xl bg-white/[0.04] border border-blue-400/20 backdrop-blur-sm">
            <FiCheckCircle size={40} className="text-blue-400" />
            <p className="text-lg font-semibold">Message sent — thanks for reaching out!</p>
            <p className="text-sm text-zinc-400">I'll get back to you as soon as I can.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 sm:p-8 transition-colors duration-300 hover:border-blue-400/30">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-blue-300 uppercase tracking-wide mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:bg-blue-400/5 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-cyan-300 uppercase tracking-wide mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-sky-300 uppercase tracking-wide mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400 focus:bg-sky-400/5 transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong — please try again, or email me directly.
              </p>
            )}

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-black font-semibold shadow-lg shadow-blue-500/20 hover:brightness-110 hover:shadow-blue-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend size={16} />
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              <p className="flex items-center gap-1.5 text-xs text-zinc-200">
                <FiClock size={13} />
                Usually respond within 24 hours
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}