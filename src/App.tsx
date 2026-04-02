import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  details: string;
  link: string | undefined;
}

const projects: Project[] = [
  {
    title: "PAY360 Platform",
    desc: "Payment platform used by ~90% of UK councils.",
    details:
      "Developed and maintained Angular + C# features, optimised SQL queries, and improved backend performance for large-scale payment processing.",
    link: undefined,
  },
  {
    title: "PayCircle Payroll",
    desc: "Cloud payroll system with HMRC compliance.",
    details:
      "Implemented features and resolved payroll issues using AngularJS, C#, and SQL, including critical data fixes.",
    link: undefined,
  },
  {
    title: "Distributed Whiteboard",
    desc: "Real-time collaboration app (React + Node + AWS).",
    details:
      "Built with ECS and DynamoDB, enabling live multi-user interaction with low latency.",
    link: undefined,
  },
  {
    title: "AI Scrabble Game",
    desc: "Algorithm-based Python game.",
    details:
      "Created using Pygame with custom logic for intelligent move generation.",
    link: undefined,
  },
  {
    title: "REACO Platform",
    desc: "Community engagement & payment app.",
    details:
      "Currently developing a full-stack application with user login, payments, and content management. Built with Angular/React front-end and C# backend with database integration.",
    link: "https://www.reaco.org.uk",
  },
  {
    title: "Zanzibar Daily",
    desc: "Tourism & travel portal for Zanzibar.",
    details:
      "Designed and maintained a tourism-focused website with responsive UI, content management, and automated updates. Focused on showcasing attractions and travel information.",
    link: "https://www.zanzibardaily.com",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    // Updated background with a lighter, dynamic gradient
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-900 font-sans antialiased">
      {/* HERO - Brighter content */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl tracking-tighter text-slate-950 bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
          Muneer Fakih
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-xl text-slate-600 max-w-xl mx-auto">
          Software Engineer • Enterprise Systems • Full Stack Development
        </motion.p>

        {/* Call to action buttons with more dramatic hover effects */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.05, translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-sky-600 text-white rounded-2xl shadow-lg hover:bg-sky-700 transition duration-300 font-semibold text-lg"
            href="#projects">
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-2xl hover:bg-slate-100 transition duration-300 text-lg"
            href="https://github.com/FakihDev1">
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white border border-slate-200 text-slate-950 rounded-2xl shadow-md hover:bg-slate-50 transition duration-300 font-semibold text-lg"
            href="/Muneer_Fakih_Tech_CV.pdf"
            download>
            Download CV
          </motion.a>
        </div>
      </section>

      {/* ABOUT - Glassmorphism card */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-10 border border-slate-200 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-950 tracking-tight">
            About Me
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Software engineer with experience building and supporting
            large-scale enterprise applications used across the UK. Strong
            background in C#, Angular, SQL, and Azure DevOps, with a focus on
            performance optimisation, reliability, and solving complex
            production issues.
          </p>
        </motion.div>
      </section>

      {/* SKILLS - Interactive badges */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-slate-950 tracking-tight">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            "C#",
            ".NET",
            "Angular",
            "React",
            "SQL Server",
            "Azure DevOps",
            "AWS",
            "CI/CD",
            "REST APIs",
            "Git",
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1, translateY: -2 }}
              className="px-5 py-3 bg-white border border-slate-200 text-sky-700 font-medium rounded-full text-base shadow-sm hover:border-sky-500 hover:text-sky-800 transition-all cursor-default">
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE - Dynamic timeline with clean design */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-slate-950 tracking-tight">
          Experience
        </h2>

        <div className="relative border-l-2 border-slate-200 pl-10 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-md">
            <div className="absolute -left-[51px] top-6 w-8 h-8 bg-white border-4 border-sky-500 rounded-full shadow" />
            <h3 className="font-semibold text-slate-950 text-xl">
              Technical Specialist — DXC Technology
            </h3>
            <span className="text-sm font-medium text-slate-500">
              2025 — Present
            </span>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              Supporting enterprise applications, diagnosing issues using logs
              and monitoring tools, and automating fixes to improve reliability
              and system uptime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-md">
            <div className="absolute -left-[51px] top-6 w-8 h-8 bg-white border-4 border-sky-500 rounded-full shadow" />
            <h3 className="font-semibold text-slate-950 text-xl">
              Junior Software Engineer — The Access Group
            </h3>
            <span className="text-sm font-medium text-slate-500">
              2023 — 2025
            </span>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              Built and maintained Angular and C# applications including PAY360.
              Delivered features, fixed bugs, optimised SQL queries, and
              implemented CI/CD pipelines using Azure DevOps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CURRENTLY WORKING ON - Focused section with clean aesthetic */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-slate-950 tracking-tight">
          Currently Working On
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg">
          <ul className="text-slate-700 text-lg space-y-3 leading-relaxed">
            <li>
              • Developing REACO into a full-featured platform with login,
              payments, and user content management.
            </li>
            <li>
              • Maintaining and enhancing Zanzibar Daily, improving UI/UX and
              content delivery.
            </li>
            <li>
              • Deepening knowledge in cloud architecture (Azure & AWS) and
              scalable app design.
            </li>
            <li>
              • Strengthening system design, backend performance, and modern
              frontend frameworks.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* PROJECTS - Grid with more distinct cards and animations */}
      <section id="projects" className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-slate-950 tracking-tight">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                translateY: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              className="bg-white border border-slate-200 p-8 rounded-3xl cursor-pointer hover:border-sky-300 transition duration-300 shadow-lg relative flex flex-col justify-between"
              onClick={() => setSelected(p)}>
              <div>
                <h3 className="text-2xl font-semibold text-slate-950 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-base mt-3Leading-relaxed">
                  {p.desc}
                </p>
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // prevent modal opening
                  className="mt-5 inline-block px-5 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 text-base transition duration-300 font-semibold text-center w-full">
                  Visit Site
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL - Simplified and cleaner with dynamic entry */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50 backdrop-blur-sm"
            onClick={() => setSelected(null)}>
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-slate-100 p-10 rounded-3xl max-w-lg shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // stop click from closing modal
            >
              <button
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
                onClick={() => setSelected(null)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="text-3xl font-bold mb-4 text-slate-950 tracking-tight">
                {selected.title}
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                {selected.details}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 px-6 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 text-lg transition duration-300 font-semibold w-full"
                onClick={() => setSelected(null)}>
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER - Clean text with dynamic content */}
      <footer className="text-center py-10 text-slate-500 text-base">
        © {new Date().getFullYear()} Muneer Fakih • Built with precision
      </footer>
    </div>
  );
}
