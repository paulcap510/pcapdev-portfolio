"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiBriefcase } from "react-icons/fi";

type Role = {
  title: string;
  place: string;
  dates: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Freelance Website Developer",
    place: "Self-employed",
    dates: "Aug 2022 – Present",
    bullets: [
      "Built fully functional websites for small businesses using WordPress, Wix, HTML, CSS, and JavaScript",
      "Implemented JWT/refresh-token authentication, auth cookies, and password-recovery flows for client web applications",
      "Connected websites to third-party plugins, APIs, forms, and analytics tools to extend core functionality",
      "Built prototypes and proof-of-concept applications to help clients test ideas before committing to full builds",
    ],
  },
  {
    title: "Junior Developer",
    place: "Pikoshi",
    dates: "Dec 2023 – Sep 2024",
    bullets: [
      "Implemented JWT/refresh-token authentication, auth cookies, and session logic for a FastAPI/React application",
      "Built OAuth and email-based signup flows, supporting multiple registration methods across the app",
      "Built password-recovery functionality and account lifecycle handling for failed token validation",
      "Refactored service-layer logic and resolved merge conflicts integrating auth features into the main codebase",
    ],
  },
  {
    title: "Data Analyst",
    place: "Klarner Politics",
    dates: "Sep 2022 – Sep 2023",
    bullets: [
      "Collected, cleaned, and analyzed 2M+ public records using Python for policy and demographic research",
      "Built predictive models with scikit-learn examining factors influencing voting behavior and political participation",
      "Conducted statistical analysis in R to track long-term trends in congressional representation and social equity",
      "Validated datasets of 100,000+ records and created visualizations to communicate findings to non-technical audiences",
    ],
  },
  {
    title: "Developer & User Researcher",
    place: "Sairae",
    dates: "Jan 2021 – Jan 2022",
    bullets: [
      "Built interactive prototypes and mockups simulating real website functionality for stakeholder review",
      "Reviewed app designs and user flows to identify usability issues and pain points",
      "Analyzed user feedback and testing data to identify behavioral patterns and recurring issues",
      "Collaborated with senior developers to design entity-relationship diagrams (ERDs) and relational database schemas, mapping table relationships to support application data requirements",
      "Translated usability findings into concrete design and development recommendations",
    ],
  },
    {
    title: "Financial Modeler",
    place: "Freelance",
    dates: "Apr 2019 – Jan 2020",
    bullets: [
      "Developed Python scripts to automate financial data collection and processing, replacing manual workflows and reducing analysis time",
      "Built Python tools to monitor live market data in real time, tracking price and volume movements and flagging trading anomalies",
      "Built Excel- and Python-based financial models (DCF, comparable analysis) to valuate companies and support investment research",
      "Analyzed financial statements and market data programmatically to forecast revenue trends and assess growth potential",
      "Automated recurring reporting workflows, generating data-driven summaries of valuation findings and risk factors for clients",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 sm:px-12 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 100, -60, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/3 w-[550px] h-[450px] bg-blue-600/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 60, 0], y: [0, 50, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <Link href="/#home" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors mb-8">
          <FiArrowLeft size={14} />
          Back to home
        </Link>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-lg text-zinc-300 mb-16 max-w-xl">
            A history of the roles and projects where I&apos;ve built the skills behind my work today.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {roles.map((role, index) => (
            <motion.div
              key={role.title + role.place}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/10 border border-blue-400/20 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <FiBriefcase size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{role.title}</h2>
                    <p className="text-base text-blue-300 font-medium">{role.place}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-zinc-300 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 whitespace-nowrap">
                  {role.dates}
                </span>
              </div>

              <ul className="flex flex-col gap-3 pl-1">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-base text-zinc-200 leading-relaxed">
                    <span className="text-blue-400 mt-1 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}