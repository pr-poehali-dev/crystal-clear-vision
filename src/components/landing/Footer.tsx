import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-2">
              VK-<span className="text-primary">Sert</span>
            </div>
            <p className="text-sm text-zinc-400">
              Агентство по сертификации товаров и услуг под ключ. Работаем по всему Казахстану и в
              странах СНГ.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+77000000000" className="hover:text-white transition-colors">
                  +7 700 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                Пн–Пт 9:00–18:00
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/77000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={22} />
              </a>
              <a
                href="tel:+77000000000"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Телефон"
              >
                <Icon name="Phone" size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} VK-Sert. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
