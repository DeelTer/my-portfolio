import type { Project } from '../types';

export const nsClicker: Project = {
    id: 12,
    title: "BetBoom Кликер",
    subtitle: "Telegram, Организация",
    slug: "ns-clicker",
    image: "./images/betboom/ns_clicker/cover.webp",
    category: ["telegram", "company"],
    starred: true,
    shortDesc: "Разработка мини-апп приложения",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">BetBoom Кликер</h1>
        <p class="text-xl text-gray-300">Аналог Hamster Kombat для прямого эфира BetBoom. Проект реализован в статусе субподрядчика через агенство</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-chats text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Коммуникация с агентством</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Участие в созвонах, сбор и уточнение требований</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Формирование ТЗ для команды разработки</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Согласование брендинга, цветов, шрифтов с дизайнерами</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Уточнение сроков и условий оплаты (предоплата, постоплата)</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Координация между отделами</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-check-circle text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Результат</h2>
          </div>
          <p class="text-gray-300">Кликер успешно запущен в срок. Заказчик получил полностью функционирующий инструмент для повышения вовлечённости аудитории.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-camera text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Скриншоты кликера</h2>
          </div>
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/betboom/ns_clicker/app-1.webp" alt="Главный экран кликера">
              </div>
              <div class="carousel-slide">
                <img src="./images/betboom/ns_clicker/app-2.webp" alt="Бусты">
              </div>
              <div class="carousel-slide">
                <img src="./images/betboom/ns_clicker/app-3.webp" alt="Аукционы">
              </div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
        </div>
      </div>
    `
  };