import type { Project } from '../types';

export const fonbetEvent: Project = {
    id: 10,
    title: "Fonbet Ивент",
    subtitle: "Оффлайн, Организация",
    slug: "fonbet-event",
    image: "./images/fonbet/cover.png",
    category: ["other", "offline", "company"],
    starred: true,
    shortDesc: "Интерактив на куполе в планетарии",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Fonbet: Офлайн-ивент</h1>
        <p class="text-xl text-gray-300">Разработка программного обеспечения для мероприятия в Петербургском планетарии. Я выступал связующим звеном между заказчиком и командой разработки, тестировал продукт и презентовал результат клиенту.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-chats text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Коммуникация с заказчиком и их клиентом</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Участие во всех созвонах, сбор и уточнение требований</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Формирование технического задания для команды разработки</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Ручное тестирование приложений (купол + планшеты), поиск и документирование багов</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Презентация готового решения клиентам и заказчику</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-cube text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Техническая составляющая</h2>
          </div>
          <p class="text-gray-300 mb-4">Проект включал две точки взаимодействия с пользователем:</p>
          <ul class="space-y-2 text-gray-300 list-disc pl-5">
            <li><strong>Софт для купола</strong> — активности, выводимые на 360-градусный экран планетария.</li>
            <li><strong>Приложение для планшетов</strong> — головоломки с созвездиями, работающие на сенсорных экранах.</li>
          </ul>
          <p class="text-gray-300 mt-4">Я также участвовал в тестировании приложений: проверял стабильность, разные сценарии использования и фиксировал недочёты.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-check-circle text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Результат</h2>
          </div>
          <p class="text-gray-300">Мероприятие успешно проведено, клиент и заказчик остались довольны. Благодаря чёткой передаче требований и тестированию удалось избежать критических багов на ивенте и уложиться в сроки.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-camera text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Фото с ивента</h2>
          </div>
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/fonbet/event-screen-1.png" alt="Фотография с мероприятия #1">
              </div>
              <div class="carousel-slide">
                <img src="./images/fonbet/event-screen-2.png" alt="Фотография с мероприятия #2">
              </div>
              <div class="carousel-slide">
                <img src="./images/fonbet/event-screen-3.png" alt="Фотография с мероприятия #3">
              </div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
        </div>
      </div>
    `
  }