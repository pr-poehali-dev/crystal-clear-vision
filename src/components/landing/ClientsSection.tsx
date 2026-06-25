import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const clients = [
  {
    icon: "Truck",
    title: "Импортёры",
    text: "Помогаем оформить документы для ввоза продукции и её законной реализации на территории Казахстана и стран ЕАЭС.",
  },
  {
    icon: "Factory",
    title: "Производители",
    text: "Подбираем оптимальную схему сертификации и сопровождаем оформление документов.",
  },
  {
    icon: "ShoppingBag",
    title: "Продавцы маркетплейсов",
    text: "Подготавливаем документы для Kaspi, Wildberries, Ozon и других торговых площадок.",
  },
  {
    icon: "Gavel",
    title: "Участники тендеров",
    text: "Помогаем получить сертификаты и документы для участия в государственных и коммерческих закупках.",
  },
  {
    icon: "Plane",
    title: "Экспортёры",
    text: "Сопровождаем оформление документов для поставок продукции за пределы Казахстана.",
  },
];

const ClientsSection = () => {
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
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Кому мы помогаем</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Работаем с предпринимателями по всему Казахстану и в странах СНГ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.title}
              className={`bg-zinc-900/50 rounded-2xl p-7 border border-white/10 hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/30 mb-4">
                <Icon name={client.icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{client.title}</h3>
              <p className="text-sm text-zinc-400">{client.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
