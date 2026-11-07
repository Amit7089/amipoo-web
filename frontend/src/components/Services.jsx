
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  UserRound,
  Code2,
  Smartphone,
  Bot,
  ArrowUpRight,
  Check,
  Sparkles,
  Layers3,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Business Website",
    subtitle: "Build Your Digital Identity",
    description:
      "Create a professional online presence with a modern, fast and responsive website for your business.",
    features: [
      "Professional UI Design",
      "Mobile Responsive",
      "WhatsApp Integration",
    ],
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-commerce Website",
    subtitle: "Sell Online, Grow Faster",
    description:
      "Launch your online store with product management, shopping cart and secure payment integration.",
    features: [
      "Product Management",
      "Shopping Cart & Checkout",
      "Online Payment Integration",
    ],
    gradient: "from-violet-500 to-blue-500",
    bg: "bg-violet-50",
  },
  {
    number: "03",
    icon: UserRound,
    title: "Portfolio Website",
    subtitle: "Showcase Your Work",
    description:
      "Showcase your skills, achievements and projects through an attractive professional portfolio.",
    features: [
      "Personal Branding",
      "Project Showcase",
      "Contact Integration",
    ],
    gradient: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
  },
  {
    number: "04",
    icon: Code2,
    title: "Web Applications",
    subtitle: "Custom Digital Solutions",
    description:
      "Build powerful web applications with custom functionality, backend systems and database integration.",
    features: [
      "Custom Admin Dashboard",
      "Backend Development",
      "Database Integration",
    ],
    gradient: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Landing Pages",
    subtitle: "Convert Visitors Into Leads",
    description:
      "Get beautiful landing pages designed to promote your products, services and marketing campaigns.",
    features: [
      "Modern UI Layout",
      "Lead Generation Forms",
      "Call To Action",
    ],
    gradient: "from-orange-500 to-pink-500",
    bg: "bg-orange-50",
  },
  {
    number: "06",
    icon: Bot,
    title: "AI Integration",
    subtitle: "Make Your Website Smarter",
    description:
      "Add intelligent features to your website using AI tools, chatbots and smart automation.",
    features: [
      "AI Chatbot Integration",
      "Smart Automation",
      "API Integration",
    ],
    gradient: "from-emerald-500 to-cyan-500",
    bg: "bg-emerald-50",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
            <Sparkles size={16} />
            OUR EXPERTISE
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#071A3A] sm:text-4xl lg:text-5xl">
            Digital Solutions
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Designed for Growth
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We turn your ideas into powerful digital experiences.
            From professional business websites to advanced web
            applications, we create solutions that help your business grow.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
              >

                {/* Card Top */}
                <div className="flex items-center justify-between">

                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} transition-transform duration-300 group-hover:scale-105`}>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-md`}>
                      <Icon size={23} className="text-white" />
                    </div>
                  </div>

                  <span className="text-3xl font-extrabold text-slate-100 transition-colors group-hover:text-blue-100">
                    {service.number}
                  </span>

                </div>

                {/* Card Content */}
                <div className="mt-5">

                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-[#071A3A]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                </div>

                {/* Features */}
                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">

                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-slate-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <Check size={12} className="text-blue-600" />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

                {/* Bottom Link */}
                <a
                  href="#contact"
                  className="mt-auto flex items-center justify-between pt-6 text-sm font-bold text-blue-600"
                >
                  <span className="transition-transform group-hover:translate-x-1">
                    Discuss Your Project
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </a>

              </motion.article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-14 overflow-hidden rounded-3xl bg-[#071A3A] p-7 sm:p-10 lg:p-12"
        >

          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-7 md:flex-row">

            <div className="text-center md:text-left">

              <div className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                <Layers3 size={17} />
                LET'S BUILD SOMETHING GREAT
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Have a Project in Mind?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                Share your idea with us and let's create something amazing.
              </p>

            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-cyan-500"
            >
              Start Your Project
              <ArrowUpRight size={20} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
