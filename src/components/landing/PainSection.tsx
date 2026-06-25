import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const pains = [
  "Не знаете, нужна ли сертификация вашему товару",
  "Боитесь штрафов и претензий со стороны проверяющих органов",
  "Маркетплейс требует документы на продукцию",
  "Не понимаете, какие документы нужны именно вам",
  "Теряете время на изучение законодательства",
  "Получаете противоречивую информацию от разных специалистов",
];

const fines = [
  "Продажа товара без обязательных документов",
  "Неправильно оформленные декларации",
  "Отсутствие подтверждения соответствия",
  "Ошибки при импорте продукции",
  "Неверно выбранная схема сертификации",
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const PainSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Знакомы эти ситуации?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {pains.map((pain) => (
            <div
              key={pain}
              className="flex items-start gap-3 bg-zinc-900/50 rounded-xl p-5 border border-white/10"
            >
              <div className="mt-0.5 shrink-0 text-red-500">
                <Icon name="XCircle" size={22} />
              </div>
              <span className="text-zinc-200">{pain}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Мы берём эти вопросы на себя
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
            Вы занимаетесь бизнесом — мы занимаемся документами. Специалист подробно ответит на все
            ваши вопросы.
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-8"
            onClick={() => scrollTo("contact")}
          >
            Получить бесплатную консультацию
          </Button>
        </div>

        <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/40 rounded-3xl p-8 md:p-12 border border-red-500/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            За что чаще всего штрафуют предпринимателей в Казахстане?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {fines.map((fine) => (
              <div
                key={fine}
                className="flex items-start gap-3 bg-black/40 rounded-xl p-4 border border-white/10"
              >
                <Icon name="AlertTriangle" size={20} className="text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-200">{fine}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-zinc-300 mb-5">
              Предлагаем обезопасить себя и пройти проверку по всем пунктам бесплатно
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-8"
              onClick={() => scrollTo("contact")}
            >
              Проверить свой товар
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
