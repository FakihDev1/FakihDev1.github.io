import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  details: string;
  link?: string;
  videoSrc?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "PAY360 Platform",
    desc: "Payment platform used by ~90% of UK councils.",
    details:
      "Developed and maintained Angular + C# features, optimised SQL queries, and improved backend performance for large-scale payment processing.",
    link: "https://www.accesspaysuite.com/our-brands/pay360/",
  },
  {
    title: "PayCircle Payroll",
    desc: "Cloud payroll system with HMRC compliance.",
    details:
      "Implemented features and resolved payroll issues using AngularJS, C#, and SQL, including critical data fixes.",
    link: "https://payroll.paycircle.co.uk/login",
  },
  {
    title: "Distributed Whiteboard",
    desc: "Real-time collaboration app (React + Node + AWS).",
    details:
      "Built with ECS and DynamoDB, enabling live multi-user interaction with low latency.",
    videoSrc: "/interactive-whiteboard-demo.mp4",
    githubLink: "https://github.com/FakihDev1/InteractiveWhiteboard-uni",
  },
  {
    title: "AI Scrabble Game",
    desc: "Algorithm-based Python game.",
    details:
      "Created using Pygame with custom logic for intelligent move generation.",
    videoSrc: "/pyscrabble-demo.mp4",
    githubLink: "https://github.com/FakihDev1/Scrabble-python",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-900 font-sans antialiased">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl tracking-tighter text-slate-950 bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
          Muneer Fakih
        </motion.h1>
        <p className="mt-6 text-xl text-slate-600 max-w-xl mx-auto">
          Software Engineer • Enterprise Systems • Full Stack Development
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-sky-600 text-white rounded-2xl shadow-lg hover:bg-sky-700 transition font-semibold text-lg">
            Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/FakihDev1"
            target="_blank"
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-2xl hover:bg-slate-100 transition text-lg font-semibold bg-white">
            GitHub
          </motion.a>
        </div>
      </section>

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
              Applications Engineer — DXC Technology
            </h3>
            <span className="text-sm font-medium text-slate-500">
              2025 — Present
            </span>
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

      <section id="projects" className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl mb-8 text-slate-950 tracking-tight">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, translateY: -5 }}
              onClick={() => setSelected(p)}
              className="bg-white border border-slate-200 p-8 rounded-3xl cursor-pointer hover:border-sky-300 transition-all shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-base mt-3 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 text-center font-semibold transition">
                    Visit Site
                  </a>
                ) : (
                  <button className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 text-center font-semibold transition">
                    View Details
                  </button>
                )}
                {p.videoSrc && (
                  <div className="flex items-center text-sky-600 font-medium px-2">
                    <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2 animate-pulse"></span>
                    Demo Available
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-3xl max-w-2xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                onClick={() => setSelected(null)}>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="text-3xl font-bold text-slate-950 mb-4">
                {selected.title}
              </h3>

              {/* VIDEO PLAYER SECTION */}
              {selected.videoSrc && (
                <div className="mb-6 rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                  <video controls className="w-full aspect-video">
                    <source src={selected.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                {selected.details}
              </p>

              <div className="flex gap-4">
                {selected.githubLink && (
                  <a
                    href={selected.githubLink}
                    target="_blank"
                    className="flex-1 py-3 bg-sky-600 text-white rounded-xl text-center font-semibold">
                    View Source Code
                  </a>
                )}
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    className="flex-1 py-3 bg-sky-600 text-white rounded-xl text-center font-semibold">
                    Visit Project Site
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-center py-10 text-slate-500">
        © {new Date().getFullYear()} Muneer Fakih
      </footer>
    </div>
  );
}
