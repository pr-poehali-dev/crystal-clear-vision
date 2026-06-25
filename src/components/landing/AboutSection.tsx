import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://cdn.poehali.dev/projects/c323c566-2057-4db9-b38a-310ea3012072/files/35895698-9865-4b45-a8c0-1ba173389de7.jpg"
              alt="Айгерим Байгудинова — руководитель агентства VK-Sert"
              className="w-full aspect-square object-cover rounded-3xl relative z-10 border border-white/10"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
              <Icon name="UserCheck" size={16} />
              Руководитель агентства
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
              Меня зовут Айгерим Байгудинова
            </h2>
            <p className="text-lg mb-5 text-zinc-300">
              Я руководитель компании VK-Sert, эксперт по сертификации с опытом более 10 лет.
            </p>
            <p className="text-lg mb-8 text-zinc-400">
              Помогла более 1000 предпринимателям пройти все этапы оформления документов и успешно
              вывести продукцию на рынок.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 rounded-xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-zinc-400">лет опыта</div>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-zinc-400">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
