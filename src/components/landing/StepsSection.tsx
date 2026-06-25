import { useRef, useEffect, useState } from "react";

const steps = [
  {
    title: "Оставляете заявку",
    text: "Связываемся с вами и изучаем задачу.",
  },
  {
    title: "Бесплатно консультируем",
    text: "Определяем, какие документы действительно нужны.",
  },
  {
    title: "Подбираем решение",
    text: "Формируем оптимальную схему оформления.",
  },
  {
    title: "Готовим документы",
    text: "Сопровождаем весь процесс оформления.",
  },
  {
    title: "Вы получаете результат",
    text: "Через 1–2 недели вы получите оригиналы документов и бухгалтерские бумаги. Бесплатная доставка.",
  },
];

const StepsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="steps" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Как проходит работа</h2>
          <p className="text-zinc-400">Получить документы проще, чем кажется</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2"></div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className={index % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                  <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-3 mb-2 md:justify-start">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shrink-0">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-zinc-400">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
