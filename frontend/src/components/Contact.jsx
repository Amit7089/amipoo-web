
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Clock3,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const WHATSAPP_NUMBER = "917089030657";
const API_URL = "http://localhost:5000/api/inquiries";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.service) {
      setError("Please select the type of website you need.");
      return;
    }

    if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.includes("X")) {
      setError("Please add your WhatsApp number in Contact.jsx first.");
      return;
    }

    setSubmitting(true);
    setError("");
    setSuccess("");

    // Open a blank tab now so the browser does not block WhatsApp later.
    const whatsappWindow = window.open("about:blank", "_blank");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit your inquiry.");
      }

      const whatsappMessage = `
Hello AMIPOO Web! I want to discuss a website project.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Project Type: ${form.service}
Budget: ${form.budget || "Not decided"}

Project Details:
${form.message}

Inquiry submitted through AMIPOO Web website.
      `;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.location.href = whatsappUrl;
      }

      setSuccess("Your inquiry has been saved successfully!");
      setForm(initialForm);
    } catch (err) {
      if (whatsappWindow) {
        whatsappWindow.close();
      }

      setError(
        err.message ||
          "Something went wrong. Please check your internet connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email Us",
      value: "Let's discuss your project",
      link: "mailto:amipooweb@gmail.com",
      color: "bg-blue-500/10 text-blue-300",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with our team",
      link: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: "bg-emerald-500/10 text-emerald-300",
    },
    {
      icon: Clock3,
      title: "Working Hours",
      value: "Monday – Saturday",
      link: null,
      color: "bg-violet-500/10 text-violet-300",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8fafc] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            <MessageCircle size={14} />
            Get In Touch
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Let's Talk About
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Your Next Project.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Have an idea? Tell us about it. We'll help you turn
            your vision into a professional digital experience.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Contact Information
              </span>

              <h3 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                Let's create something
                <span className="block text-blue-400">amazing together.</span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Share your requirements with us. Whether you need
                a business website, online store or custom application,
                we're ready to help.
              </p>

              <div className="mt-10 space-y-7">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                      >
                        <Icon size={21} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-slate-400">
                          {item.title}
                        </p>

                        {item.link ? (
                          <a
                            href={item.link}
                            target={
                              item.link.startsWith("https")
                                ? "_blank"
                                : undefined
                            }
                            rel="noopener noreferrer"
                            className="mt-1 block text-sm font-semibold text-white transition hover:text-cyan-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-semibold text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-xs text-slate-400">
                Your Vision, Our Creation.
              </p>
              <p className="mt-2 text-lg font-extrabold tracking-wide">
                AMIPOO <span className="text-cyan-300">Web.</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_55px_rgba(15,23,42,0.06)] sm:p-9"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-slate-950">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Fill in your details and tell us about your project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="Enter mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Project Type *
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={updateForm}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="">Select a service</option>
                    <option>Business Website</option>
                    <option>E-commerce Website</option>
                    <option>Education Website</option>
                    <option>Portfolio Website</option>
                    <option>Job Portal</option>
                    <option>Custom Web Application</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Budget
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={updateForm}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">Select your budget</option>
                  <option>Below ₹5,000</option>
                  <option>₹5,000 – ₹10,000</option>
                  <option>₹10,000 – ₹20,000</option>
                  <option>₹20,000 – ₹50,000</option>
                  <option>Above ₹50,000</option>
                  <option>Not decided yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Tell Us About Your Project *
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  placeholder="Describe your website idea and requirements..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {error}
                </p>
              )}

              {success && (
                <p
                  role="status"
                  className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                >
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? "Submitting Inquiry..." : "Send Inquiry on WhatsApp"}
                <Send size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-slate-400">
                Your inquiry will be saved securely and prepared in a WhatsApp
                message for you to send.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
