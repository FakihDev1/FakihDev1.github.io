import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  details: string;
}

const projects: Project[] = [
  {
    title: "PAY360 Platform",
    desc: "Payment platform used by ~90% of UK councils.",
    details:
      "Developed and maintained Angular + C# features, optimised SQL queries, and improved backend performance for large-scale payment processing.",
  },
  {
    title: "PayCircle Payroll",
    desc: "Cloud payroll system with HMRC compliance.",
    details:
      "Implemented features and resolved payroll issues using AngularJS, C#, and SQL, including critical data fixes.",
  },
  {
    title: "Distributed Whiteboard",
    desc: "Real-time collaboration app (React + Node + AWS).",
    details:
      "Built with ECS and DynamoDB, enabling live multi-user interaction with low latency.",
  },
  {
    title: "AI Scrabble Game",
    desc: "Algorithm-based Python game.",
    details:
      "Created using Pygame with custom logic for intelligent move generation.",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black text-slate-100">
      {/* HERO */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tight">
          Muneer Fakih
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-slate-400">
          Software Engineer • Enterprise Systems • Full Stack Development
        </motion.p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:scale-105 hover:bg-indigo-500 transition"
            href="#projects">
            Projects
          </a>
          <a
            className="px-6 py-3 border border-slate-600 rounded-xl hover:bg-slate-700 transition"
            href="https://github.com/FakihDev1">
            GitHub
          </a>
          <a
            className="px-6 py-3 bg-white text-slate-900 rounded-xl shadow hover:scale-105 hover:bg-slate-200 transition font-semibold"
            href="/Muneer_Fakih_Tech_CV.pdf"
            download>
            Download CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">About</h2>
          <p className="text-slate-400">
            Software engineer with experience building and supporting
            large-scale enterprise applications used across the UK. Strong
            background in C#, Angular, SQL, and Azure DevOps, with a focus on
            performance optimisation, reliability, and solving complex
            production issues.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3">
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
            <span
              key={skill}
              className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-full text-sm hover:scale-105 hover:border-indigo-500 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE (TIMELINE) */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-semibold mb-10 text-indigo-400">
          Experience
        </h2>

        <div className="relative border-l border-slate-700 pl-6 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative">
            <div className="absolute -left-[34px] top-1 w-4 h-4 bg-indigo-500 rounded-full" />
            <h3 className="font-semibold">
              Technical Specialist — DXC Technology
            </h3>
            <span className="text-xs text-slate-500">2025 — Present</span>
            <p className="text-slate-400 text-sm mt-2">
              Supporting enterprise applications, diagnosing issues using logs
              and monitoring tools, and automating fixes to improve reliability
              and system uptime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative">
            <div className="absolute -left-[34px] top-1 w-4 h-4 bg-indigo-500 rounded-full" />
            <h3 className="font-semibold">
              Junior Software Engineer — The Access Group
            </h3>
            <span className="text-xs text-slate-500">2023 — 2025</span>
            <p className="text-slate-400 text-sm mt-2">
              Built and maintained Angular and C# applications including PAY360.
              Delivered features, fixed bugs, optimised SQL queries, and
              implemented CI/CD pipelines using Azure DevOps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CURRENTLY WORKING ON */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
          Currently Working On
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-800/70 border border-slate-700 p-6 rounded-2xl">
          <ul className="text-slate-400 text-sm space-y-2">
            <li>
              • Improving application support workflows and automation at DXC
            </li>
            <li>• Deepening knowledge in cloud architecture (Azure & AWS)</li>
            <li>
              • Strengthening system design and performance optimisation skills
            </li>
          </ul>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="bg-slate-800/70 border border-slate-700 p-6 rounded-2xl cursor-pointer hover:border-indigo-500 transition"
              onClick={() => setSelected(p)}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-800 border border-slate-600 p-8 rounded-2xl max-w-md">
            <h3 className="text-xl font-semibold mb-2">{selected.title}</h3>
            <p className="text-slate-400">{selected.details}</p>
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              onClick={() => setSelected(null)}>
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-500">
        © 2026 Muneer Fakih
      </footer>
    </div>
  );
}
