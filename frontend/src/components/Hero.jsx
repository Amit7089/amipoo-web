
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  ShoppingCart,
  Smartphone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07152E] text-white"
    >

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-semibold mb-7">

              <Sparkles size={16} className="text-cyan-300" />

              Professional Web Development Agency

            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.12] tracking-tight">

              We Build

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 mt-2">
                Powerful Websites
              </span>

              <span className="block mt-2">
                That Grow Your Business.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 text-base sm:text-lg leading-8 text-slate-300 max-w-xl">

              Transform your ideas into powerful digital experiences.
              We create modern, responsive and custom-coded websites
              that help your business grow online.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/30 transition-all duration-300"
              >

                Get a Free Quote

                <ArrowRight size={19} />

              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-blue-400 hover:bg-white/5 px-7 py-4 rounded-xl font-bold transition-all duration-300"
              >

                Explore Portfolio

                <ArrowRight size={19} />

              </a>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  50+
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  2+
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  100%
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Custom Coding
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT WEBSITE PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full min-w-0"
          >

            {/* Glow */}
            <div className="absolute inset-10 bg-blue-500/20 blur-[90px] rounded-full" />

            {/* Main Preview */}
            <div className="relative bg-slate-800 border border-blue-300/20 rounded-2xl p-3 sm:p-4 shadow-2xl">

              {/* Browser Header */}
              <div className="flex items-center justify-between px-2 pb-4">

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="text-xs text-slate-400 bg-slate-900 px-4 py-2 rounded-lg truncate">
                  www.yourbusiness.com
                </div>

              </div>

              {/* Website Mockup */}
              <div className="bg-white rounded-xl overflow-hidden text-slate-900">

                {/* Mockup Navbar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-100">

                  <div className="flex items-center gap-2">

                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Code2 size={18} className="text-white" />
                    </div>

                    <span className="font-extrabold text-sm">
                      Your Brand
                    </span>

                  </div>

                  <div className="hidden sm:flex items-center gap-5 text-xs font-semibold text-slate-500">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>

                </div>

                {/* Mockup Hero */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 sm:p-7 items-center">

                  <div>

                    <span className="text-blue-600 text-xs font-extrabold tracking-wider">
                      DIGITAL SOLUTIONS
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mt-3">
                      Grow Your
                      <span className="block text-blue-600">
                        Business Online
                      </span>
                    </h2>

                    <p className="text-xs text-slate-500 mt-4 leading-6">
                      Professional websites for modern businesses.
                    </p>

                    <div className="inline-flex mt-5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-xs font-bold">
                      Get Started
                    </div>

                  </div>

                  {/* Illustration */}
                  <div className="min-h-48 rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200 flex items-center justify-center relative overflow-hidden">

                    <div className="absolute w-32 h-32 bg-white/40 rounded-full blur-2xl" />

                    <div className="relative w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-600/30">
                      <Code2 size={52} className="text-white" />
                    </div>

                  </div>

                </div>

                {/* Services Preview */}
                <div className="grid grid-cols-3 gap-2 px-4 pb-5">

                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <Globe className="mx-auto text-blue-600" size={22} />
                    <p className="text-[10px] sm:text-xs font-bold mt-2">
                      Websites
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <Smartphone className="mx-auto text-blue-600" size={22} />
                    <p className="text-[10px] sm:text-xs font-bold mt-2">
                      Responsive
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <ShoppingCart className="mx-auto text-blue-600" size={22} />
                    <p className="text-[10px] sm:text-xs font-bold mt-2">
                      E-commerce
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Floating Quality Card */}
            <div className="absolute -bottom-5 -left-2 sm:-left-5 bg-white text-slate-900 rounded-xl shadow-xl p-3 sm:p-4 flex items-center gap-3">

              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="text-green-600" size={24} />
              </div>

              <div>
                <p className="font-extrabold text-sm">
                  Quality Delivered
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Built with precision
                </p>
              </div>

            </div>

            {/* Floating Security Card */}
            <div className="absolute -top-5 -right-2 sm:-right-5 bg-white text-slate-900 rounded-xl shadow-xl p-3 flex items-center gap-2">

              <ShieldCheck className="text-blue-600" size={23} />

              <span className="text-xs font-extrabold">
                Secure & Reliable
              </span>

            </div>

          </motion.div>

        </div>

        {/* Bottom Feature Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 pt-8 border-t border-white/10">

          <div className="flex items-center justify-center gap-3 text-slate-300">
            <Globe className="text-cyan-400" size={21} />
            <span className="text-sm font-semibold">Modern Web Solutions</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-slate-300">
            <ShieldCheck className="text-cyan-400" size={21} />
            <span className="text-sm font-semibold">Secure Development</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-slate-300">
            <Zap className="text-cyan-400" size={21} />
            <span className="text-sm font-semibold">Fast Performance</span>
          </div>

        </div>

      </div>

    </section>
  );
}
