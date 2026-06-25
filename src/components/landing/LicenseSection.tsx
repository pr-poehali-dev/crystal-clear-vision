import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServiceItem {
  name: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    name: "Сертификат соответствия",
    description: "Подтверждение соответствия продукции требованиям технических регламентов ЕАЭС и РК.",
    icon: "FileCheck2",
  },
  {
    name: "Декларация о соответствии",
    description: "Оформление деклараций на продукцию для законной реализации на рынке.",
    icon: "FileText",
  },
  {
    name: "Свидетельство о госрегистрации (СГР)",
    description: "Регистрация продукции, подлежащей санитарно-эпидемиологическому контролю.",
    icon: "Stamp",
  },
  {
    name: "Сертификаты ISO",
    description: "Внедрение и сертификация систем менеджмента качества по стандартам ISO.",
    icon: "Award",
  },
  {
    name: "Отказное письмо",
    description: "Документ, подтверждающий, что товар не подлежит обязательной сертификации.",
    icon: "MailCheck",
  },
  {
    name: "Документы для маркетплейсов",
    description: "Полный пакет для Kaspi, Wildberries, Ozon и других торговых площадок.",
    icon: "ShoppingCart",
  },
  {
    name: "Пожарные сертификаты",
    description: "Оформление документов пожарной безопасности на материалы и продукцию.",
    icon: "Flame",
  },
  {
    name: "Экспертиза и протоколы испытаний",
    description: "Организация лабораторных испытаний и подготовка экспертных заключений.",
    icon: "FlaskConical",
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LicenseSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Наши услуги</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Мы оформляем все виды сертификатов и разрешительных документов для товаров и услуг. Если
            вы не нашли нужный документ — оставьте заявку, наши специалисты подберут решение.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`relative h-full bg-zinc-900/50 border-white/10 ${
                  hoveredCard === index ? "scale-105 border-primary/40" : "scale-100"
                } transition-all duration-300`}
              >
                <CardContent className="relative p-6 h-full flex flex-col">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/30 mb-4 w-fit">
                    <Icon name={service.icon} size={26} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{service.name}</h3>
                  <p className="text-sm text-zinc-400">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-8"
            onClick={() => scrollTo("contact")}
          >
            Получить бесплатную консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
