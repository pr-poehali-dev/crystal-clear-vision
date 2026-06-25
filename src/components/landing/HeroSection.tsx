import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const guarantees = [
  { icon: "ShieldCheck", text: "Гарантия результата" },
  { icon: "Users", text: "Более 1000 клиентов" },
  { icon: "FileCheck", text: "Сопровождение до получения документов" },
  { icon: "BadgeDollarSign", text: "Без скрытых платежей" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.max(0, 1 - scrolled / (windowHeight * 0.5));
      setScrollOpacity(opacity);
      setScrollY(scrolled * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-black"></div>
      </div>

      <div
        style={{ transform: `translateY(${scrollY}px)`, opacity: scrollOpacity }}
        className="relative pt-36 pb-16 px-4 transition-opacity duration-100 flex items-center min-h-screen"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
              <Icon name="Award" size={16} />
              Агентство по сертификации VK-Sert
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                Сертификация товаров и услуг под ключ
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-zinc-400 max-w-3xl mx-auto">
              Помогаем предпринимателям, производителям, импортёрам и продавцам маркетплейсов
              получить необходимые документы быстро, законно и без лишней головной боли.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => scrollTo("contact")}
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500/40 text-green-400 hover:bg-green-500/10 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://wa.me/77000000000" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {guarantees.map((item, index) => (
              <div
                key={item.text}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="h-full bg-zinc-900/50 rounded-xl p-5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/40">
                  <div className="mb-3 text-primary flex justify-center">
                    <Icon name={item.icon} size={28} />
                  </div>
                  <div className="text-sm text-zinc-300 font-medium">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
