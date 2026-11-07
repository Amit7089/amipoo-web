
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/amipoo-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

        {/* Official Brand Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="AMIPOO Web Official Logo"
            className="w-14 h-14 object-contain"
          />

          <div className="leading-tight">
            <h2 className="text-2xl font-extrabold text-[#071A3A]">
              AMIPOO <span className="text-blue-600">Web</span>
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
              Your Vision, Our Creation
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-semibold hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Let's Talk <ArrowUpRight size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-3 rounded-xl bg-blue-50 text-blue-700"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 p-5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-semibold text-slate-700 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-blue-600 text-white py-3 rounded-xl mt-3 font-bold"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
