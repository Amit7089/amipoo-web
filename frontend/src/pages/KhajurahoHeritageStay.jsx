
import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  MessageCircle,
  Wifi,
  Car,
  Coffee,
  Utensils,
  BedDouble,
  Star,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Camera,
  Clock,
} from "lucide-react";

const WHATSAPP_NUMBER = "917089030657";

const bookingMessage =
  "Hello Khajuraho Heritage Stay, I would like to enquire about room availability and booking.";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹2,499",
    description: "A comfortable and elegant room for a relaxing stay.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    features: ["King Size Bed", "Air Conditioning", "Private Bathroom"],
  },
  {
    name: "Premium Room",
    price: "₹3,499",
    description: "More space, beautiful interiors and extra comfort.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900",
    features: ["Premium Interiors", "Air Conditioning", "Free Wi-Fi"],
  },
  {
    name: "Family Suite",
    price: "₹4,999",
    description: "A spacious stay designed for families and groups.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    features: ["Spacious Room", "Family Friendly", "Sitting Area"],
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900",
];

const facilities = [
  { icon: Wifi, title: "Free Wi-Fi", text: "Stay connected throughout your visit." },
  { icon: Car, title: "Parking", text: "Convenient parking for your vehicle." },
  { icon: Utensils, title: "Restaurant", text: "Enjoy delicious food during your stay." },
  { icon: Coffee, title: "Room Service", text: "Comfort and convenience at your door." },
];

export default function KhajurahoHeritageStay() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#29251f]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#e9e2d6] bg-[#faf8f3]/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="leading-tight">
            <span className="block text-xl font-extrabold tracking-wide text-[#72502e] sm:text-2xl">
              KHAJURAHO
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b805e]">
              Heritage Stay
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Rooms", "#rooms"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-sm font-semibold text-[#62584b] transition hover:text-[#a47742]"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href={whatsappLink(bookingMessage)}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 bg-[#80603b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#63472b] md:flex"
          >
            Book Your Stay <ArrowUpRight size={17} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-[#ded4c5] p-2 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#e9e2d6] bg-[#faf8f3] p-5 md:hidden">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Rooms", "#rooms"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={closeMenu}
                className="block border-b border-[#e9e2d6] py-3 font-semibold"
              >
                {name}
              </a>
            ))}
            <a
              href={whatsappLink(bookingMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex justify-center bg-[#80603b] py-3 font-bold text-white"
            >
              Book Your Stay
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-[650px] items-center bg-[#30271e]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              <Star size={15} className="text-amber-300" />
              A Sample Heritage Hospitality Experience
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Experience the
              <span className="block font-serif italic text-[#e8c99b]">
                Beauty of Khajuraho
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
              Discover comfort, warm hospitality and a memorable stay
              while exploring the timeless beauty of Khajuraho.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#rooms"
                className="flex items-center justify-center gap-3 bg-[#b58b59] px-8 py-4 font-bold text-white transition hover:bg-[#987047]"
              >
                Explore Our Rooms <ArrowRight size={19} />
              </a>
              <a
                href={whatsappLink(bookingMessage)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 border border-white/70 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#29251f]"
              >
                <MessageCircle size={19} /> Enquire Now
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-7 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <MapPin size={17} className="text-amber-300" />
                Khajuraho, Madhya Pradesh
              </span>
              <span className="flex items-center gap-2">
                <Star size={17} className="text-amber-300" />
                A Sample Hotel Demo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000"
              alt="Luxury hotel swimming pool"
              className="h-[440px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-4 bg-[#80603b] p-6 text-white sm:-right-6">
              <p className="font-serif text-3xl italic">Welcome</p>
              <p className="mt-1 text-xs uppercase tracking-widest">To Khajuraho</p>
            </div>
          </div>

          <div className="lg:pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47742]">
              About Our Property
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#33291f] sm:text-5xl">
              Comfort Meets the Charm of Heritage
            </h2>
            <p className="mt-7 leading-8 text-[#766b5d]">
              Khajuraho Heritage Stay is a sample hospitality concept
              created to demonstrate a premium hotel website experience.
              It brings together welcoming spaces, comfortable rooms and
              the spirit of a memorable travel destination.
            </p>
            <p className="mt-4 leading-8 text-[#766b5d]">
              Explore our sample rooms, discover the facilities and send
              a booking enquiry directly to our team.
            </p>

            <a
              href="#rooms"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#a47742] pb-2 font-bold text-[#80603b]"
            >
              Discover Our Rooms <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[#eee8de] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47742]">
              Our Facilities
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#33291f] sm:text-5xl">
              Designed for Your Comfort
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <div key={facility.title} className="bg-[#faf8f3] p-8 text-center">
                <facility.icon className="mx-auto text-[#a47742]" size={34} />
                <h3 className="mt-5 text-lg font-bold">{facility.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#766b5d]">
                  {facility.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47742]">
                Accommodation
              </p>
              <h2 className="mt-4 font-serif text-4xl text-[#33291f] sm:text-5xl">
                Our Rooms & Suites
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#766b5d]">
              Explore our sample room categories and find a stay
              that suits your travel needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="overflow-hidden border border-[#e8dfd2] bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-serif text-2xl text-[#33291f]">
                    {room.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#766b5d]">
                    {room.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-[#62584b]">
                        <CheckCircle2 size={16} className="text-[#a47742]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#e8dfd2] pt-5">
                    <div>
                      <p className="text-xs text-[#8b7c69]">Sample price from</p>
                      <p className="text-2xl font-extrabold text-[#80603b]">
                        {room.price}
                        <span className="text-xs font-normal text-[#8b7c69]"> / night</span>
                      </p>
                    </div>
                    <a
                      href={whatsappLink(
                        `Hello, I would like to enquire about the ${room.name} at Khajuraho Heritage Stay.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#80603b] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#63472b]"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#eee8de] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Camera className="mx-auto text-[#a47742]" size={30} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[#a47742]">
              Photo Gallery
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#33291f] sm:text-5xl">
              A Glimpse of the Experience
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {gallery.map((image, index) => (
              <div key={image} className="group overflow-hidden">
                <img
                  src={image}
                  alt={`Hotel gallery sample ${index + 1}`}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64 lg:h-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47742]">
              Find Us
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#33291f] sm:text-5xl">
              Explore the Beauty of Khajuraho
            </h2>
            <p className="mt-6 leading-8 text-[#766b5d]">
              Plan your visit to Khajuraho, Madhya Pradesh, and discover
              its famous heritage and cultural attractions.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="shrink-0 text-[#a47742]" />
                <div>
                  <p className="font-bold">Location</p>
                  <p className="mt-1 text-sm text-[#766b5d]">
                    Khajuraho, Chhatarpur, Madhya Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="shrink-0 text-[#a47742]" />
                <div>
                  <p className="font-bold">Enquiry</p>
                  <p className="mt-1 text-sm text-[#766b5d]">
                    Contact us for booking information.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Khajuraho+Madhya+Pradesh"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#80603b] px-6 py-4 font-bold text-white transition hover:bg-[#63472b]"
            >
              Explore on Google Maps <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="min-h-[350px] overflow-hidden border border-[#e8dfd2]">
            <iframe
              title="Khajuraho map"
              src="https://maps.google.com/maps?q=Khajuraho%20Madhya%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[350px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="contact" className="bg-[#30271e] px-5 py-24 text-center text-white lg:px-8">
        <div className="mx-auto max-w-3xl">
          <BedDouble className="mx-auto text-[#e8c99b]" size={43} />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[#e8c99b]">
            Your Journey Begins Here
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Make Your Khajuraho Visit Memorable
          </h2>
          <p className="mt-6 leading-8 text-white/75">
            Have questions about rooms or your stay? Send us an enquiry
            and our team will be happy to assist you.
          </p>

          <a
            href={whatsappLink(bookingMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-[#b58b59] px-8 py-4 font-bold text-white transition hover:bg-[#987047]"
          >
            <MessageCircle size={21} />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#211b15] px-5 py-10 text-center text-white/70">
        <h3 className="font-serif text-2xl font-bold text-white">
          Khajuraho Heritage Stay
        </h3>
        <p className="mt-3 text-sm">
          A sample hotel website concept by AMIPOO Web.
        </p>
        <div className="mt-6 flex justify-center gap-5 text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#rooms" className="hover:text-white">Rooms</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} Khajuraho Heritage Stay · Demo Concept
        </div>
        <a
          href="https://amipoo-web.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-bold text-[#e8c99b] hover:text-white"
        >
          Website Designed by AMIPOO Web
        </a>
      </footer>
    </div>
  );
}
