
import {
  ArrowUpRight,
  Code2,
  Mail,
  MessageCircle,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Projects", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Website Development",
    "E-commerce Development",
    "Business Websites",
    "Custom Web Applications",
    "Portfolio Websites",
    "Website Maintenance",
  ];

  return (
    <footer className="bg-[#07152e] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand Section */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2 mb-5">
              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                <Code2 size={25} />
              </div>

              <span className="text-2xl font-bold tracking-wide">
                AMIPOO <span className="text-blue-400">Web</span>
              </span>
            </a>

            <p className="text-gray-400 leading-7 text-sm max-w-xs">
              We build modern, responsive and powerful websites
              that help businesses grow digitally.
            </p>

            <p className="text-blue-400 font-medium mt-4">
              Your Vision, Our Creation.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <p className="font-semibold mb-3">Follow Us</p>

              <div className="flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/amipooweb?rpxt=anV2MTQyeXFpMzFy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm hover:bg-pink-600 transition duration-300"
                >
                  IG
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19gHQNVqKp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-xl hover:bg-blue-600 transition duration-300"
                >
                  f
                </a>

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-blue-400 transition">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>

            <div className="space-y-5">

              <a
                href="https://wa.me/917089030657"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <MessageCircle size={19} className="mt-1 shrink-0" />

                <span className="text-sm">
                  WhatsApp
                  <br />
                  +91 70890 30657
                </span>
              </a>

              <a
                href="mailto:hello@amipooweb.com"
                className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <Mail size={19} className="mt-1 shrink-0" />

                <span className="text-sm">
                  hello@amipooweb.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <Globe size={19} className="mt-1 shrink-0" />

                <span className="text-sm">
                  Website Development
                  <br />
                  Across India
                </span>
              </div>

            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-7 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-sm font-semibold transition"
            >
              Start Your Project
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {currentYear} AMIPOO Web. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Designed & Developed by{" "}
            <span className="text-blue-400 font-semibold">
              AMIPOO Web
            </span>
          </p>

          <a
            href="#home"
            className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition"
          >
            Back to Top
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
