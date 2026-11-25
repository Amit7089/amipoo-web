
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Globe,
  Hotel,
  Image,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Star,
  Utensils,
  Wifi,
  CalendarCheck,
  BedDouble,
  Camera,
  X,
  Coffee,
  Car,
  Eye,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "917089030657";

const hotelMessage =
  "Hello AMIPOO Web, I want a professional website for my hotel, resort or homestay. Please share the details.";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const demoPath = "/demo/khajuraho-heritage-stay";

const features = [
  {
    icon: BedDouble,
    title: "Rooms & Accommodation",
    description:
      "Showcase room categories, photographs, facilities and pricing to help guests choose their stay.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Enquiry",
    description:
      "Let visitors send room booking enquiries directly from your hotel website.",
  },
  {
    icon: Camera,
    title: "Hotel Photo Gallery",
    description:
      "Display beautiful photographs of rooms, property, restaurant, pool and surroundings.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    description:
      "Allow guests to contact your hotel directly through WhatsApp with one click.",
  },
  {
    icon: MapPin,
    title: "Google Maps Location",
    description:
      "Help travellers find your hotel with an integrated location map.",
  },
  {
    icon: Globe,
    title: "Google Search Friendly",
    description:
      "Get a search-engine-friendly website structure to build your online presence.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "₹3,999",
    description: "A simple online presence for small properties.",
    features: [
      "One-page hotel website",
      "Hotel introduction",
      "Rooms and facilities",
      "Photo gallery",
      "WhatsApp enquiry",
      "Mobile responsive design",
    ],
  },
  {
    name: "Business",
    price: "₹6,999",
    popular: true,
    description: "A complete website for growing hotels.",
    features: [
      "Up to 5 website pages",
      "Home and About pages",
      "Rooms and facilities pages",
      "Photo gallery",
      "Booking enquiry form",
      "WhatsApp integration",
      "Google Maps integration",
    ],
  },
  {
    name: "Premium",
    price: "₹11,999",
    description: "A premium digital experience for your property.",
    features: [
      "Up to 7 website pages",
      "Custom premium design",
      "Detailed room sections",
      "Advanced enquiry form",
      "Gallery and facilities",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic SEO setup",
    ],
  },
];

const hotelTypes = [
  "Hotels",
  "Luxury Resorts",
  "Homestays",
  "Guest Houses",
  "Boutique Hotels",
  "Travel Properties",
];

export default function HotelLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf9f6] text-[#252b29]">

      {/* TOP ANNOUNCEMENT */}
      <div className="bg-[#172d29] px-4 py-2 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        Professional Hotel & Resort Website Development
        <span className="mx-2 text-[#d9b77a]">•</span>
        Serving Khajuraho & Beyond
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#e9e4d9] bg-[#faf9f6]/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#173b32] text-white">
              <Hotel size={23} />
            </div>
            <div className="leading-tight">
              <h2 className="text-xl font-extrabold tracking-tight text-[#173b32]">
                AMIPOO <span className="text-[#bd9457]">Web</span>
              </h2>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b8375]">
                Hospitality Websites
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <a href="#hotel-services" className="text-sm font-semibold text-[#5c625c] hover:text-[#bd9457]">
              Services
            </a>
            <a href="#hotel-features" className="text-sm font-semibold text-[#5c625c] hover:text-[#bd9457]">
              Features
            </a>
            <a href="#hotel-pricing" className="text-sm font-semibold text-[#5c625c] hover:text-[#bd9457]">
              Packages
            </a>
            <Link to={demoPath} className="flex items-center gap-1.5 text-sm font-bold text-[#a47a3e] hover:text-[#173b32]">
              Live Demo <ArrowUpRight size={15} />
            </Link>
          </div>

          <a
            href={whatsappLink(hotelMessage)}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#173b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#285747] sm:flex"
          >
            <MessageCircle size={17} />
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-[#e5ddcf] p-2.5 text-[#173b32] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#e9e4d9] bg-[#faf9f6] p-5 shadow-xl lg:hidden">
            <a href="#hotel-services" onClick={closeMenu} className="block border-b border-[#e9e4d9] py-3 font-semibold">
              Services
            </a>
            <a href="#hotel-features" onClick={closeMenu} className="block border-b border-[#e9e4d9] py-3 font-semibold">
              Features
            </a>
            <a href="#hotel-pricing" onClick={closeMenu} className="block border-b border-[#e9e4d9] py-3 font-semibold">
              Packages
            </a>
            <Link to={demoPath} onClick={closeMenu} className="flex items-center gap-2 border-b border-[#e9e4d9] py-3 font-bold text-[#a47a3e]">
              <Eye size={18} /> View Live Hotel Demo
            </Link>
            <a href={whatsappLink(hotelMessage)} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#173b32] py-3.5 font-bold text-white">
              <MessageCircle size={18} /> Contact Us
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative bg-[#172d29]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2000"
            alt="Luxury resort hotel"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10251f]/95 via-[#10251f]/75 to-[#10251f]/20" />
        </div>

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8bc8b]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#efd5a8]">
              <Star size={15} className="fill-current" />
              Websites Made for Hospitality
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Your Property Deserves a
              <span className="mt-2 block italic text-[#dfbd83]">
                Beautiful Online Presence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              We design elegant, mobile-friendly websites for hotels,
              resorts and homestays. Showcase your rooms, highlight
              your facilities and receive direct guest enquiries.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href={whatsappLink(hotelMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c5a16a] px-7 py-4 font-bold text-[#172d29] transition hover:bg-[#dfbd83]"
              >
                Get Your Hotel Website
                <ArrowUpRight size={19} />
              </a>

              <Link
                to={demoPath}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#173b32]"
              >
                <Eye size={19} />
                View Live Hotel Demo
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#dfbd83]" />
                Mobile Friendly
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#dfbd83]" />
                Custom Design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#dfbd83]" />
                Direct Enquiries
              </span>
            </div>
          </div>

          {/* HOTEL WEBSITE PREVIEW */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-[28px] border border-white/30 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <div className="overflow-hidden rounded-[20px] bg-[#faf9f6]">

                <div className="relative h-[290px]">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000"
                    alt="Beautiful hotel resort"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#efd5a8]">
                      Your Hotel Name
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-bold">
                      A Stay to Remember
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      Comfort · Luxury · Hospitality
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#a47a3e]">
                        Hotel Website Preview
                      </p>
                      <p className="mt-1 text-lg font-bold text-[#173b32]">
                        Rooms & Experiences
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#eae4d8] p-3 text-[#173b32]">
                      <Hotel size={23} />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-[#f0ede6] p-3 text-center">
                      <BedDouble className="mx-auto text-[#987344]" size={20} />
                      <p className="mt-2 text-[11px] font-bold text-[#494b43]">Rooms</p>
                    </div>
                    <div className="rounded-xl bg-[#f0ede6] p-3 text-center">
                      <Camera className="mx-auto text-[#987344]" size={20} />
                      <p className="mt-2 text-[11px] font-bold text-[#494b43]">Gallery</p>
                    </div>
                    <div className="rounded-xl bg-[#f0ede6] p-3 text-center">
                      <MapPin className="mx-auto text-[#987344]" size={20} />
                      <p className="mt-2 text-[11px] font-bold text-[#494b43]">Location</p>
                    </div>
                  </div>

                  <Link
                    to={demoPath}
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#173b32] py-3 font-bold text-white transition hover:bg-[#285747]"
                  >
                    Explore Sample Website <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
              <p className="text-xs font-semibold text-[#8a8173]">
                Website Package Starting
              </p>
              <p className="mt-1 text-2xl font-extrabold text-[#173b32]">
                ₹3,999
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="hotel-services" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1100"
              alt="Elegant hotel room interior"
              className="h-[430px] w-full rounded-2xl object-cover"
            />

            <div className="absolute -bottom-7 right-4 max-w-[250px] rounded-2xl bg-[#173b32] p-6 text-white shadow-xl sm:right-8">
              <p className="font-serif text-3xl italic text-[#dfbd83]">
                Your Hotel.
              </p>
              <p className="mt-1 text-lg font-bold">Your Digital Identity.</p>
              <p className="mt-2 text-sm text-white/70">
                Designed around your hospitality business.
              </p>
            </div>
          </div>

          <div className="lg:pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47a3e]">
              Why Your Hotel Needs a Website
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#173b32] sm:text-5xl">
              Make Your First Impression Count, Even Before Guests Arrive.
            </h2>

            <p className="mt-6 leading-8 text-[#77766e]">
              Today's travellers explore hotels online before planning
              their stay. They want to see rooms, photographs, facilities,
              location and contact information in one place.
            </p>

            <p className="mt-4 leading-8 text-[#77766e]">
              A professional hotel website helps you present your property,
              build confidence and make it easier for guests to contact you.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Show your property professionally",
                "Display rooms, amenities and photographs",
                "Receive direct WhatsApp enquiries",
                "Make your hotel easier to discover online",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 font-semibold text-[#454b45]">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#a47a3e]" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(hotelMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#173b32] px-7 py-4 font-bold text-white transition hover:bg-[#285747]"
            >
              Discuss Your Website <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#eeeae1] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47a3e]">
            Built for Hospitality Businesses
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-[#173b32] sm:text-5xl">
            What Kind of Property Do You Own?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#77766e]">
            We create custom website experiences for different types
            of hospitality businesses.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {hotelTypes.map((type) => (
              <div key={type} className="rounded-2xl border border-[#e0d8c9] bg-[#faf9f6] px-3 py-7 transition hover:-translate-y-1 hover:shadow-lg">
                <Hotel className="mx-auto text-[#a47a3e]" size={29} />
                <p className="mt-4 text-sm font-bold text-[#39443d]">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="hotel-features" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47a3e]">
              What We Build
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#173b32] sm:text-5xl">
              Everything Your Hotel Website Needs.
            </h2>
            <p className="mt-5 leading-7 text-[#77766e]">
              Beautiful design combined with useful features to help
              your guests explore your property and contact you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="group rounded-2xl border border-[#e9e4d9] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c5a16a] hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eeeae1] text-[#a47a3e] transition group-hover:bg-[#173b32] group-hover:text-white">
                  <feature.icon size={27} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#173b32]">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-[#77766e]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO SHOWCASE */}
      <section className="bg-[#173b32] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dfbd83]">
              Explore Our Sample Project
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              See How Your Hotel Website Could Look.
            </h2>
            <p className="mt-6 leading-8 text-white/70">
              We have created a sample hotel website to demonstrate
              the design, room sections, gallery, facilities and
              booking enquiry experience.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Hotel-style homepage and navigation",
                "Rooms, gallery and facilities",
                "WhatsApp booking enquiry",
                "Mobile-friendly layout",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <Check size={18} className="text-[#dfbd83]" />
                  {item}
                </div>
              ))}
            </div>

            <Link
              to={demoPath}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#dfbd83] px-8 py-4 font-bold text-[#173b32] transition hover:bg-white"
            >
              <Eye size={19} />
              View Khajuraho Hotel Demo
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <Link to={demoPath} className="group relative block overflow-hidden rounded-3xl border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1100"
              alt="Sample luxury hotel website preview"
              className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[430px]"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-transparent to-transparent p-7 sm:p-9">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfbd83]">
                  Sample Website
                </p>
                <h3 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                  Khajuraho Heritage Stay
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-white">
                  Explore Live Demo <ArrowRight size={17} />
                </p>
              </div>
            </div>
            <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#173b32]">
              LIVE DEMO ↗
            </div>
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section id="hotel-pricing" className="bg-[#f2efe8] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47a3e]">
              Website Packages
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#173b32] sm:text-5xl">
              Choose the Right Website for Your Property.
            </h2>
            <p className="mt-5 leading-7 text-[#77766e]">
              Flexible starting packages for hotels, resorts and homestays.
              Final pricing depends on your requirements.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-3xl border bg-[#faf9f6] p-8 ${
                  pkg.popular
                    ? "border-[#a47a3e] shadow-2xl shadow-[#c5a16a]/20"
                    : "border-[#e4ddcf] shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#a47a3e] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold text-[#173b32]">{pkg.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#77766e]">
                  {pkg.description}
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-[#173b32]">
                    {pkg.price}
                  </span>
                  <span className="ml-2 text-xs text-[#898174]">starting price</span>
                </div>

                <div className="my-7 h-px bg-[#e5ded2]" />

                <div className="flex-1 space-y-4">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-[#545c54]">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#a47a3e]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink(
                    `Hello AMIPOO Web, I am interested in your ${pkg.name} hotel website package (${pkg.price}). Please share the details.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-9 flex items-center justify-center gap-2 rounded-full px-5 py-4 font-bold transition ${
                    pkg.popular
                      ? "bg-[#173b32] text-white hover:bg-[#285747]"
                      : "border border-[#173b32] text-[#173b32] hover:bg-[#173b32] hover:text-white"
                  }`}
                >
                  Choose {pkg.name} <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#898174]">
            Prices are introductory estimates. Domain registration, paid hosting,
            online payment gateways, third-party booking systems and real-time
            room availability are not included unless agreed separately.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47a3e]">
              Simple Process
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#173b32] sm:text-5xl">
              From Your Idea to Your Website.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Share Your Requirements",
                description: "Tell us about your hotel, rooms, facilities and website requirements.",
              },
              {
                number: "02",
                title: "Design & Development",
                description: "We create a website based on your brand, photographs and preferences.",
              },
              {
                number: "03",
                title: "Review & Launch",
                description: "Review the website, request agreed changes and launch your online presence.",
              },
            ].map((step) => (
              <div key={step.number} className="rounded-2xl border border-[#e9e4d9] bg-white p-8">
                <p className="font-serif text-5xl font-bold text-[#c5a16a]">
                  {step.number}
                </p>
                <h3 className="mt-6 text-xl font-bold text-[#173b32]">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-[#77766e]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#172d29] px-5 py-24 text-center text-white lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#dfbd83]/40 bg-white/10 text-[#dfbd83]">
            <Hotel size={31} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#dfbd83]">
            Let's Build Something Beautiful
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Give Your Hotel the Online Presence It Deserves.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Whether you own a hotel, resort or homestay, let's create
            a professional website that showcases your property.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(hotelMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#dfbd83] px-8 py-4 font-bold text-[#173b32] transition hover:bg-white"
            >
              <MessageCircle size={20} />
              Start Your Project
            </a>

            <Link
              to={demoPath}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#173b32]"
            >
              <Eye size={19} />
              Explore Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#10231e] px-5 pb-8 pt-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="text-2xl font-extrabold">
              AMIPOO <span className="text-[#dfbd83]">Web</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">
              Professional website design and development for hotels,
              resorts and hospitality businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Explore</h4>
            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a href="#hotel-services" className="block hover:text-[#dfbd83]">Our Services</a>
              <a href="#hotel-features" className="block hover:text-[#dfbd83]">Website Features</a>
              <a href="#hotel-pricing" className="block hover:text-[#dfbd83]">Packages</a>
              <Link to="/" className="block hover:text-[#dfbd83]">Main Website</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Sample Project</h4>
            <div className="mt-5 space-y-3 text-sm text-white/60">
              <Link to={demoPath} className="block hover:text-[#dfbd83]">Khajuraho Heritage Stay</Link>
              <Link to={demoPath} className="block hover:text-[#dfbd83]">View Live Hotel Demo</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Get In Touch</h4>
            <a
              href={whatsappLink(hotelMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#dfbd83] px-5 py-3 text-sm font-bold text-[#173b32] hover:bg-white"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <p className="mt-4 text-xs text-white/50">
              Serving Khajuraho and nearby areas.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} AMIPOO Web. All rights reserved.
          <p className="mt-2">Your Vision, Our Creation.</p>
        </div>
      </footer>
    </div>
  );
}
