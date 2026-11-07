
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Vishal Electricals",
    category: "E-Commerce Website",
    description:
      "A complete online shopping website for electrical products, LED lights, fans, switches and home appliances.",
    image: "/projects/electricals.png",
    url: "https://vishalelectricalsbamitha.com/",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    color: "text-blue-600",
  },
  {
    number: "02",
    name: "Aao Padai Kare",
    category: "Education Platform",
    description:
      "A learning platform for MP Board students with class-wise notes, study resources and quizzes.",
    image: "/projects/aao-padai-kare.png",
    url: "https://aao-padai-kare.vercel.app/",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    color: "text-violet-600",
  },
  {
    number: "03",
    name: "JobHub",
    category: "Job Portal",
    description:
      "A modern job portal for discovering private job opportunities and accessing premium career resources.",
    image: "/projects/job-hub.png",
    url: "https://job-hub-zeta.vercel.app/",
    tags: ["React", "Express.js", "MongoDB", "Razorpay"],
    color: "text-emerald-600",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
    >
      {/* Website screenshot */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden bg-slate-100"
        aria-label={`Visit ${project.name}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="max-w-[70%] truncate text-[10px] text-slate-400">
            {project.url.replace("https://", "")}
          </span>
          <ExternalLink size={14} className="text-slate-400" />
        </div>

        <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#f1f5f9] p-2 sm:p-3">
          <img
            src={project.image}
            alt={`${project.name} actual website screenshot`}
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.025]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />

          <div className="hidden h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-center">
            <span className={`text-sm font-bold ${project.color}`}>
              {project.name}
            </span>
            <span className="mt-2 text-xs text-slate-400">
              Add actual project screenshot
            </span>
          </div>
        </div>

        <span className="absolute right-5 top-[58px] rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-600 shadow-sm">
          Live Website
        </span>
      </a>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className={`text-[10px] font-extrabold uppercase tracking-[0.16em] ${project.color}`}>
            {project.category}
          </span>
          <span className="text-xs font-bold text-slate-300">
            {project.number}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
          {project.name}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-800 transition-all hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            Visit Live Website
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#f8fafc] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600">
            Our Portfolio
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Projects We've Built
            <span className="block text-blue-600">
              With Passion.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Take a look at our live projects and explore the digital
            experiences we've created for different businesses.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-slate-950 px-6 py-10 text-center sm:px-10 lg:flex-row lg:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              Have a project idea?
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Let's build something great.
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Your vision deserves a professional digital experience.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-blue-100"
          >
            Start Your Project
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
