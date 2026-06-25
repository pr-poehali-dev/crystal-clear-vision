import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Данияр",
    role: "Импортёр электроники",
    text: "Оформили все декларации для ввоза товара за неделю. Помогли разобраться с регламентами ЕАЭС, всё чётко и без скрытых платежей.",
  },
  {
    name: "Алия",
    role: "Продавец на Kaspi",
    text: "Kaspi требовал документы на продукцию — VK-Sert подготовили полный пакет. Магазин разблокировали, продажи пошли. Спасибо!",
  },
  {
    name: "Ержан",
    role: "Производитель продуктов",
    text: "Получили сертификаты ISO для участия в тендере. Сопровождали на каждом этапе, объясняли понятным языком. Рекомендую.",
  },
];

const ReviewsSection = () => {
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
    <section ref={ref} id="reviews" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Что говорят наши клиенты
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`bg-zinc-900/50 rounded-2xl p-7 border border-white/10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-zinc-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
