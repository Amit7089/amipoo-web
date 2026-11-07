
import { motion } from "framer-motion";
import {
  Code2,
  Target,
  Lightbulb,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "100% Custom Coding",
    description: "Websites developed around your unique business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    description: "Responsive experiences across mobile, tablet and desktop.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    description: "Clean development practices with security in mind.",
  },
  {
    icon: Rocket,
    title: "Built for Growth",
    description: "Scalable digital solutions that support your business.",
  },
];

// Mobile icon import
function Smartphone() {
  return <span className="text-blue-600 text-xl">▣</span>;
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              <Sparkles size={16} />
              ABOUT AMIPOO WEB
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#071A3A]">
              Turning Your Ideas Into
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8 text-base">
              AMIPOO Web is a website development brand focused on
              creating modern, responsive and custom-coded digital
              solutions for businesses and individuals.
            </p>

            <p className="mt-4 text-slate-500 leading-8 text-sm sm:text-base">
              We believe every business deserves a strong online
              presence. Our goal is to turn your vision into a
              professional website that helps you connect with
              customers and grow your brand.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-8 rounded-xl bg-blue-600 hover:bg-blue-700 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition"
            >
              Work With Us
              <ArrowRight size={19} />
            </a>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-3xl bg-blue-100/70 blur-2xl" />

            <div className="relative rounded-3xl bg-[#071A3A] p-6 sm:p-9 shadow-2xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-300 text-sm font-bold">
                    OUR APPROACH
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white">
                    Ideas to Impact
                  </h3>
                </div>

                <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Code2 className="text-white" size={26} />
                </div>
              </div>

              <div className="mt-9 space-y-6">

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Lightbulb className="text-cyan-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Understand Your Vision</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      We understand your business and goals.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Target className="text-cyan-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Plan & Design</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      We create a design suited to your needs.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Code2 className="text-cyan-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Develop & Test</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      We build and test your website.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Rocket className="text-cyan-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Launch & Support</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      We help take your website live.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-cyan-300 text-sm font-bold">
                  OUR PROMISE
                </p>
                <p className="mt-2 text-white font-semibold">
                  Your Vision, Our Creation.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 text-sm font-extrabold tracking-widest">
              WHY CHOOSE US
            </span>

            <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#071A3A]">
              Why Businesses Choose
              <span className="text-blue-600"> AMIPOO Web</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon size={24} className="text-blue-600" />
                  </div>

                  <h4 className="mt-5 font-extrabold text-[#071A3A]">
                    {reason.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
