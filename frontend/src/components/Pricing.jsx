
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  UserRound,
  Building2,
  GraduationCap,
  ShoppingBag,
  Code2,
  MessageCircle,
} from "lucide-react";

const plans = [
  {
    name: "Personal Website",
    subtitle: "For individuals & professionals",
    price: "2,999",
    description: "Create your professional identity online.",
    icon: UserRound,
    popular: false,
    color: "blue",
    features: [
      "Up to 5 website pages",
      "Premium responsive design",
      "Personal portfolio / profile",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Social media links",
    ],
  },
  {
    name: "Business Website",
    subtitle: "For shops & growing businesses",
    price: "5,999",
    description: "Build a strong digital presence for your business.",
    icon: Building2,
    popular: true,
    color: "blue",
    features: [
      "Up to 8 website pages",
      "Custom business design",
      "Product / service showcase",
      "Inquiry management",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic SEO setup",
      "Mobile & tablet optimization",
    ],
  },
  {
    name: "Education Website",
    subtitle: "For schools & coaching institutes",
    price: "9,999",
    description: "Make learning resources accessible online.",
    icon: GraduationCap,
    popular: false,
    color: "violet",
    features: [
      "Class & course pages",
      "Notes and study material",
      "PDF resource section",
      "Video integration",
      "Student registration",
      "Admin content management",
      "Responsive design",
      "Basic SEO setup",
    ],
  },
  {
    name: "E-commerce Website",
    subtitle: "For online stores & retailers",
    price: "14,999",
    description: "Take your products online and start selling.",
    icon: ShoppingBag,
    popular: false,
    color: "cyan",
    features: [
      "Product & category management",
      "Shopping cart & checkout",
      "Customer registration",
      "Order management",
      "Payment gateway integration",
      "Admin dashboard",
      "Product search & filters",
      "Mobile-friendly storefront",
    ],
  },
  {
    name: "Custom Web Application",
    subtitle: "For unique business requirements",
    price: "24,999+",
    description: "Turn your unique business idea into a web application.",
    icon: Code2,
    popular: false,
    color: "dark",
    features: [
      "Custom UI / UX development",
      "Frontend & backend",
      "Database integration",
      "Login & user management",
      "Admin dashboard",
      "API integrations",
      "Custom business workflows",
      "Scalable architecture",
    ],
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    badge: "bg-blue-50 text-blue-700",
    button: "bg-blue-600 hover:bg-blue-700",
    border: "border-blue-200",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    badge: "bg-violet-50 text-violet-700",
    button: "bg-violet-600 hover:bg-violet-700",
    border: "border-violet-200",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-700",
    badge: "bg-cyan-50 text-cyan-700",
    button: "bg-slate-950 hover:bg-blue-700",
    border: "border-cyan-200",
  },
  dark: {
    icon: "bg-slate-100 text-slate-800",
    badge: "bg-slate-100 text-slate-700",
    button: "bg-slate-950 hover:bg-blue-700",
    border: "border-slate-300",
  },
};

function PricingCard({ plan, index }) {
  const Icon = plan.icon;
  const style = colorStyles[plan.color];

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        plan.popular
          ? "border-blue-500 shadow-[0_15px_45px_rgba(37,99,235,0.12)]"
          : "border-slate-200 shadow-sm hover:shadow-slate-200"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-6 flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
          <Sparkles size={12} />
          Most Popular
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.icon}`}>
          <Icon size={23} />
        </div>
        <span className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider ${style.badge}`}>
          {plan.subtitle.split(" ")[1] || "Website"}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-950">
        {plan.name}
      </h3>

      <p className="mt-2 min-h-[44px] text-sm leading-6 text-slate-500">
        {plan.description}
      </p>

      <div className="mt-6 border-y border-slate-100 py-5">
        <p className="text-xs font-semibold text-slate-400">
          Starting from
        </p>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-lg font-bold text-slate-500">₹</span>
          <span className="text-4xl font-extrabold tracking-tight text-slate-950">
            {plan.price.replace("+", "")}
          </span>
          {plan.price.includes("+") && (
            <span className="text-xl font-bold text-slate-500">+</span>
          )}
        </div>
        <p className="mt-1 text-[11px] text-slate-400">
          One-time development cost
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
          What's Included
        </p>

        <ul className="mt-5 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-sm leading-5 text-slate-600">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#contact"
        className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 ${style.button}`}
      >
        Get Started
        <ArrowRight size={17} />
      </a>
    </motion.article>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#f8fafc] px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-violet-100/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            <Sparkles size={14} />
            Transparent Pricing
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Find the Perfect Plan
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              For Your Business.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Professional websites and custom digital solutions at
            affordable starting prices. Choose your plan and let's
            build something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
            />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
          <div>
            <h3 className="text-xl font-extrabold text-slate-950">
              Have a custom project in mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tell us your requirements. We'll prepare a custom quotation.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            <MessageCircle size={17} />
            Get Custom Quote
          </a>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-slate-400">
          Prices are indicative starting rates. Final quotation depends
          on pages, features and project requirements. Domain, hosting,
          paid third-party services and applicable taxes may be extra.
        </p>
      </div>
    </section>
  );
}
