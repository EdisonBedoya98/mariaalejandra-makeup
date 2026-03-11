import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, Calendar, Instagram, ArrowRight, Menu, X } from "lucide-react";

// Fade in animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const portfolioImages = [
  "/images/WhatsApp Image 2026-03-10 at 21.38.58.jpeg",
  "/images/WhatsApp Image 2026-03-10 at 21.38.58 (1).jpeg",
  "/images/WhatsApp Image 2026-03-10 at 21.38.58 (2).jpeg",
  "/images/WhatsApp Image 2026-03-10 at 21.38.58 (3).jpeg",
  "/images/WhatsApp Image 2026-03-10 at 21.38.59.jpeg",
  "/images/WhatsApp Image 2026-03-10 at 21.38.59 (1).jpeg",
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-stone-900 font-sans selection:bg-[#d4af37] selection:text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div
            className="font-serif text-2xl font-semibold tracking-wider cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            MA.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-widest uppercase hover:text-[#d4af37] transition-colors"
            >
              Acerca
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm tracking-widest uppercase hover:text-[#d4af37] transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-stone-900 text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-[#d4af37] transition-all duration-300"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 md:hidden">
          <button
            onClick={() => scrollToSection("about")}
            className="text-xl font-serif tracking-widest uppercase"
          >
            Acerca
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-xl font-serif tracking-widest uppercase"
          >
            Portafolio
          </button>
          <button
            onClick={() => scrollToSection("booking")}
            className="bg-stone-900 text-white px-8 py-3 text-sm tracking-widest uppercase"
          >
            Agendar Cita
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left pt-10 md:pt-0"
          >
            <motion.p
              variants={fadeIn}
              className="text-sm md:text-base tracking-[0.2em] uppercase text-stone-500 mb-4"
            >
              Medellín, Colombia
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6"
            >
              María
              <br />
              <span className="italic text-stone-500">Alejandra</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-stone-600 mb-10 max-w-md mx-auto md:mx-0 font-light"
            >
              Maquilladora profesional dedicada a resaltar tu belleza natural
              para tus momentos más especiales.
            </motion.p>
            <motion.div variants={fadeIn}>
              <button
                onClick={() => scrollToSection("booking")}
                className="group inline-flex items-center space-x-4 border-b border-stone-900 pb-2 text-sm tracking-widest uppercase hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
              >
                <span>Reserva tu espacio</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 md:order-2 h-[60vh] md:h-[80vh] relative"
          >
            <img
              src="/images/WhatsApp Image 2026-03-10 at 21.38.58.jpeg"
              alt="Makeup by María Alejandra"
              className="w-full h-full object-cover rounded-sm"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1512496115851-a1c8f1307e5e?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-serif mb-8"
            >
              Aprendiendo con{" "}
              <span className="italic text-[#d4af37]">amor</span> y brochas
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-stone-600 leading-relaxed font-light mb-8 max-w-2xl mx-auto"
            >
              Cada rostro cuenta una historia diferente. Mi pasión es descubrir
              la esencia de cada persona y realzarla a través del maquillaje.
              Con base en Medellín, ofrezco un servicio personalizado para
              novias, eventos sociales y producciones editoriales.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex justify-center items-center space-x-2 text-stone-500 text-sm tracking-widest uppercase"
            >
              <MapPin size={16} />
              <span>Medellín, Colombia</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Portafolio</h2>
            <p className="tracking-widest uppercase text-xs text-stone-500">
              Un vistazo a mi trabajo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index % 4) }}
                className={`aspect-[4/5] overflow-hidden group ${
                  index % 4 === 1 || index % 4 === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Portfolio makeup ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1512496115851-a1c8f1307e5e?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://instagram.com/marialejandra_makeup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm tracking-widest uppercase">
                Ver más en Instagram
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 md:py-32 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif mb-6"
            >
              Agenda tu cita
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-stone-400 mb-12 font-light max-w-lg mx-auto"
            >
              Permíteme ser parte de tu día especial. Contáctame para consultar
              disponibilidad y tarifas.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="https://wa.me/573192202911" // Replace with real WhatsApp number later
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white text-stone-900 px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#d4af37] hover:text-white transition-all duration-300"
              >
                <Calendar size={18} />
                <span>Escríbeme por WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/marialejandra_makeup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 border border-white/30 px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
              >
                <Instagram size={18} />
                <span>DM en Instagram</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-stone-100">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="font-serif text-2xl font-semibold tracking-wider">
            MA.
          </div>
          <p className="text-xs tracking-widest uppercase text-stone-400">
            © {new Date().getFullYear()} María Alejandra Makeup.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
