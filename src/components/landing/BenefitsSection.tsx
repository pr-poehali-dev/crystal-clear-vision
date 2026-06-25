import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const benefits = [
  "Бесплатную первичную консультацию",
  "Анализ вашей ситуации",
  "Чёткий план действий",
  "Прозрачную стоимость работ",
  "Персонального специалиста",
  "Контроль сроков оформления",
  "Полное сопровождение до получения документов",
];

const BenefitsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="benefits" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
      <div className="container mx-auto px-4 max-w-5xl relative">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Почему выбирают нас</h2>
          <p className="text-xl text-primary font-semibold mb-2">Мы не продаём лишние услуги</p>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Каждый клиент получает только те документы, которые действительно необходимы его бизнесу.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className={`flex items-center gap-3 bg-zinc-900/50 rounded-xl p-5 border border-white/10 transition-all duration-500 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="shrink-0 text-primary">
                <Icon name="CheckCircle2" size={24} />
              </div>
              <span className="text-zinc-200 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
