import type { Project } from '../types';

export const plyazhni: Project = {
    id: 11, // или 10, если заменяете
    title: "Пляжный",
    subtitle: "TikTok",
    slug: "plyazhni",
    image: "./images/tiktok/deelter/cover.jpg",
    category: ["tiktok", "other"],
    starred: true,
    shortDesc: "Контент по игре Minecraft, инструкции для VR",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Пляжный</h1>
        <p class="text-xl text-gray-300">Тикток-канал, где я помогаю людям разобраться с VR-версией Minecraft, настройкой шлемов, даю советы по игре и создаю полезные инструкции.</p>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-video text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Концепция канала</h2>
          </div>
          <p class="text-gray-300">Цель — сделать VR-гейминг в Minecraft доступным и понятным. Я рассказываю, какой шлем выбрать, как его настроить, как избежать ошибок, а также делюсь лайфхаками и показываю моменты из игр. Видео строятся по принципу «вопрос — ответ» или пошаговые инструкции.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-scissors text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Процесс создания</h2>
          </div>
          <p class="text-gray-300 mb-4">Сначала я пишу сценарий, стараясь сделать его полезным и интересным. Затем снимаю футажи в игре (иногда с помощью захвата экрана шлема). Монтаж делаю в CapCut — это быстро и позволяет эффективно добавлять субтитры, музыку и эффекты.</p>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Написание сценария с чёткой структурой</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Запись игрового процесса в VR</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Монтаж в CapCut с акцентами на ключевые моменты</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Оформление текстом, звуком, динамичной нарезкой</li>
          </ul>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Для кого это</h2>
          </div>
          <p class="text-gray-300">Начинающие пользователи VR, которые хотят попробовать Minecraft в виртуальной реальности, но не знают, с чего начать. А также опытные игроки, ищущие лайфхаки и вдохновение для новых проектов в VR.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-image text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Примеры видео</h2>
          </div>
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLm15oy/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-1.jpg" alt="Превью видео 1" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#FF337D] rounded-full">Смотреть →</span>
                  </div>
                </a>
              </div>
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLmN1rX/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-2.jpg" alt="Превью видео 2" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#FF337D] rounded-full">Смотреть →</span>
                  </div>
                </a>
              </div>
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLasLQ3/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-3.jpg" alt="Превью видео 3" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#FF337D] rounded-full">Смотреть →</span>
                  </div>
                </a>
              </div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
          <p class="text-gray-400 text-sm text-center mt-2">Нажмите на превью, чтобы посмотреть видео</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-chart-line text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Статистика канала</h2>
          </div>
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/tiktok/deelter/stats-1.jpg" alt="Аналитика канала 1" class="w-full h-auto rounded-lg">
              </div>
              <div class="carousel-slide">
                <img src="./images/tiktok/deelter/stats-2.jpg" alt="Аналитика канала 2" class="w-full h-auto rounded-lg">
              </div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
          <p class="text-gray-400 text-sm text-center mt-2">Скриншоты аналитики канала</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://tiktok.com/@deelter" target="_blank" 
            class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-tiktok-logo"></i> Перейти в TikTok
          </a>
        </div>
      </div>
    `
  };