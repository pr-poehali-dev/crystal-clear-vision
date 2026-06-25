import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const checkItems = [
  "нужна ли сертификация именно вашему товару",
  "какие документы потребуются",
  "сколько будет стоить оформление",
  "как избежать штрафов и блокировок",
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const IntroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-zinc-300 mb-4">
            Помогаем предпринимателям, производителям, импортёрам и продавцам маркетплейсов получить
            необходимые документы быстро, законно и без лишней головной боли.
          </p>
          <p className="text-base text-zinc-400">
            Берём на себя весь процесс взаимодействия с лабораториями, экспертными организациями и
            государственными структурами.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-950/40 to-zinc-900/40 rounded-3xl p-8 md:p-12 border border-primary/20 backdrop-blur-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/30 mb-5">
                <Icon name="ClipboardCheck" size={28} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Бесплатная экспертная проверка
              </h2>
              <p className="text-zinc-400 mb-6">
                Оставьте заявку и получите консультацию специалиста. Мы подскажем:
              </p>
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-8"
                onClick={() => scrollTo("contact")}
              >
                Получить бесплатную консультацию
              </Button>
            </div>
            <ul className="space-y-4">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-primary">
                    <Icon name="CheckCircle2" size={22} />
                  </div>
                  <span className="text-zinc-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
