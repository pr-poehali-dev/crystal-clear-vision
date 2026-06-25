import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navLinks = [
  { id: "services", label: "Услуги" },
  { id: "benefits", label: "Преимущества" },
  { id: "steps", label: "Этапы работы" },
  { id: "reviews", label: "Отзывы" },
  { id: "about", label: "О нас" },
  { id: "contact", label: "Контакты" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex flex-col leading-tight">
          <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            VK-<span className="text-primary">Sert</span>
          </span>
          <span className="text-[10px] md:text-xs text-zinc-400 tracking-wide uppercase">
            Сертификация товаров и услуг
          </span>
        </a>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-black/95 md:bg-transparent flex-col md:flex-row`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-4 mr-2">
            <a
              href="https://wa.me/77000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-zinc-300 hover:text-primary transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-300 hover:text-primary transition-colors"
            >
              <Icon name="Instagram" size={20} />
            </a>
            <a
              href="tel:+77000000000"
              aria-label="Телефон"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-primary transition-colors"
            >
              <Icon name="Phone" size={18} />
              <span className="text-sm font-medium">+7 700 000 00 00</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs border-l border-white/10 pl-4">
              <Icon name="Clock" size={16} />
              <span>Пн–Пт 9:00–18:00</span>
            </div>
          </div>

          <Button
            className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90"
            onClick={() => scrollToSection("contact")}
          >
            Консультация
          </Button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
