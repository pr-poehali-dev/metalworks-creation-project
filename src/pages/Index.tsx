import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const services = [
    {
      icon: "Warehouse",
      title: "Торговые палатки",
      description: "Изготовление металлических каркасов для торговых палаток любой сложности"
    },
    {
      icon: "Stairs",
      title: "Лестницы",
      description: "Проектирование и монтаж металлических лестниц для дома и бизнеса"
    },
    {
      icon: "Building2",
      title: "Металлоконструкции",
      description: "Производство небольших сооружений, навесов, беседок из металла"
    },
    {
      icon: "DoorOpen",
      title: "Ворота",
      description: "Распашные, откатные ворота, калитки с автоматикой и художественной ковкой"
    },
    {
      icon: "Sparkles",
      title: "Художественная ковка",
      description: "Кованые изделия: перила, решетки, декоративные элементы на заказ"
    },
    {
      icon: "Zap",
      title: "Сварочные работы",
      description: "Все виды сварочных работ, ремонт металлоконструкций, монтаж на объекте"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-white">МеталлМастер</h1>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Заказать звонок</Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-secondary to-secondary/80">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/15561570-50d9-4371-8ec9-fde047ebbf40/files/21188cb7-dca3-43c8-807d-ed67e6f457c2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider bg-primary/10 px-4 py-2 rounded">
                Профессиональная металлообработка
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Изготовление металлоконструкций
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Сварка, ковка, монтаж — полный цикл работ с металлом. Торговые палатки, лестницы, ворота, художественная ковка под ключ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                Получить расчёт
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6">
                Наши работы
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="relative">
            <Icon name="Flame" className="text-primary spark-animate" size={48} />
            <Icon name="Sparkle" className="text-primary absolute -top-4 -right-4" size={24} style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши услуги</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Специализируемся на изготовлении металлоконструкций любой сложности с гарантией качества
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors">
                    <Icon name={service.icon} className="text-primary group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Почему выбирают нас</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Более 14 лет опыта в металлообработке и сотни довольных клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full group-hover:bg-primary transition-colors duration-300">
                <Icon name="Award" className="text-primary group-hover:text-white transition-colors" size={40} />
              </div>
              <h4 className="text-3xl font-bold text-secondary mb-2">14+</h4>
              <p className="text-gray-600 font-medium">лет опыта</p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full group-hover:bg-primary transition-colors duration-300">
                <Icon name="Users" className="text-primary group-hover:text-white transition-colors" size={40} />
              </div>
              <h4 className="text-3xl font-bold text-secondary mb-2">500+</h4>
              <p className="text-gray-600 font-medium">выполненных проектов</p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full group-hover:bg-primary transition-colors duration-300">
                <Icon name="Shield" className="text-primary group-hover:text-white transition-colors" size={40} />
              </div>
              <h4 className="text-3xl font-bold text-secondary mb-2">3 года</h4>
              <p className="text-gray-600 font-medium">гарантия на работы</p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full group-hover:bg-primary transition-colors duration-300">
                <Icon name="Clock" className="text-primary group-hover:text-white transition-colors" size={40} />
              </div>
              <h4 className="text-3xl font-bold text-secondary mb-2">24/7</h4>
              <p className="text-gray-600 font-medium">консультации</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши работы</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов — от художественной ковки до сложных конструкций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/15561570-50d9-4371-8ec9-fde047ebbf40/files/9d0d7dc7-3fe6-403d-bbe1-035808f79a8a.jpg"
                alt="Металлическая лестница"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">Металлические лестницы</h4>
                  <p className="text-gray-200">Изготовление и монтаж</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/15561570-50d9-4371-8ec9-fde047ebbf40/files/5a479758-59ab-48be-9f86-4673b973a3b8.jpg"
                alt="Кованые ворота"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">Художественная ковка</h4>
                  <p className="text-gray-200">Ворота с декором</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/15561570-50d9-4371-8ec9-fde047ebbf40/files/638d4b18-74c5-44aa-8620-ccd427213019.jpg"
                alt="Торговые палатки"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">Торговые палатки</h4>
                  <p className="text-gray-200">Каркасы из металла</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Оставьте заявку</h3>
            <p className="text-lg text-gray-300">
              Свяжемся с вами в течение 15 минут и рассчитаем стоимость работ
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg py-6"
              />
            </div>
            <div>
              <Input
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg py-6"
              />
            </div>
            <div>
              <Textarea
                placeholder="Опишите вашу задачу"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg min-h-32"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white py-12 px-4 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="text-primary" size={28} />
                <h4 className="text-xl font-bold">МеталлМастер</h4>
              </div>
              <p className="text-gray-400">Профессиональная металлообработка с 2010 года</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@metallmaster.ru
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Режим работы</h5>
              <p className="text-gray-400">Пн-Пт: 8:00 - 18:00</p>
              <p className="text-gray-400">Сб-Вс: 10:00 - 16:00</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 МеталлМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}