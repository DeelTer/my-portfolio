import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "MILKSHAKE",
    subtitle: "Discord",
    image: "./images/milkshake/cover.png",
    category: ["discord"],
    starred: true,
    shortDesc: "Сообщество для знакомств и совместных игр",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Milkshake</h1>
        <p class="text-xl text-gray-300">Discord-сообщество по играм и общению, основанное в 2022 году. Сейчас насчитывает <strong class="text-[#FF337D]">12 800+ участников</strong>.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <h2 class="text-2xl font-semibold mb-3 flex items-center gap-2">
            <i class="ph-fill ph-star text-[#FF337D] text-2xl"></i> Идея проекта
          </h2>
          <p class="text-gray-300">Мы взяли лучшее от уютных и популярных серверов того времени. Целевая аудитория — игроки в League of Legends, Valorant, Minecraft, Genshin Impact и другие игры от Hoyoverse.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <h2 class="text-2xl font-semibold mb-3 flex items-center gap-2">
            <i class="ph-fill ph-cat text-[#FF337D] text-2xl"></i> Разработка маскота
          </h2>
          <p class="text-gray-300 mb-4">Главный персонаж — девушка с кошачьими ушками по имени <strong>Милка</strong> (от названия «Милкшейк») с дурашливым характером. Её образ используется в эмодзи, дизайне и рекламных материалах.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/milkshake/emojies.png" 
                alt="Эмодзи Милки" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Набор эмодзи с Милкой для Discord-сервера</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <h2 class="text-2xl font-semibold mb-3 flex items-center gap-2">
            <i class="ph-fill ph-robot text-[#FF337D] text-2xl"></i> Разработка бота
          </h2>
          <p class="text-gray-300 mb-4">Приложение спроектировано с учётом масштабирования. Получилась модульная система на Java с удобным редактированием через конфигурации — по аналогии с Minecraft-серверами.</p>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Ядро с поддержкой модулей</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Более 20 модулей (экономика, голосовые комнаты, модерация)</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Лёгкое редактирование при помощи конфигов</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <a href="https://discord.gg/milkshake" target="_blank" 
              class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
              <i class="ph-fill ph-discord-logo"></i> Войти на сервер
            </a>
            <div class="flex-1 discord-widget">
              <iframe src="https://discord.com/widget?id=926510224704159824&theme=dark" width="100%" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "BetBoom Esports",
    subtitle: "Discord, Организация",
    image: "./images/betboom_esports/cover.jpg",
    category: ["discord"],
    starred: true,
    shortDesc: "Официальный Discord BetBoom Esports",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">BetBoom Esports</h1>
        <p class="text-xl text-gray-300">Дискорд-сервер для любителей киберспорта и азартных игр. Здесь часто проводятся ивенты, включая клозы, турниры и розыгрыши с ценными призами для участников.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <p class="text-gray-300">Технический администратор и комьюнити-менеджер. Проектирую активности, сезоны и генерирую идеи для ивентов.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div class="bg-[#2a2a2a] p-4 rounded-xl">
              <p class="text-sm text-gray-400">Организация</p>
              <p class="font-medium">Сезоны и турниры</p>
            </div>
            <div class="bg-[#2a2a2a] p-4 rounded-xl">
              <p class="text-sm text-gray-400">Техническое</p>
              <p class="font-medium">Экономика сезона, таблицы наград</p>
            </div>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Формирование лояльности, организация пространства для совместных игр 5 на 5. Целевая аудитория — игроки <strong>Dota 2 / CS2 / MLBB</strong>.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-calendar text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Сезонность</h2>
          </div>
          <p class="text-gray-300 mb-4">Периодически анонсируем сезоны, в течение которых участники могут заработать ценные призы при помощи активности. Еженедельные турниры и задания.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/betboom_esports/seasons.png" 
                alt="Сезонные активности" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Пример визуального оформления сезона</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-trophy text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Еженедельные турниры</h2>
          </div>
          <p class="text-gray-300">Каждую неделю участники могут принять участие в турнирах с предварительной регистрацией. Наградой выступают Фрибеты. Обычно собирается до 10 команд.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-heart text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Временные активности</h2>
          </div>
          <p class="text-gray-300 mb-4">На праздники организовываем ивенты, ограниченные по времени. Например, на 14 февраля участники могли писать друг другу валентинки с персонажами Dota 2.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/betboom_esports/valentine.jpg" 
                alt="Валентинки" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Ивент ко Дню святого Валентина</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Большие турниры</h2>
          </div>
          <p class="text-gray-300 mb-4">Пока проводились всего один раз, но было собрано много команд и зрителей, мероприятие прошло отлично.</p>
          
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide"><img src="./images/betboom_esports/tournament-1.png" alt="Скриншот турнира 1"></div>
              <div class="carousel-slide"><img src="./images/betboom_esports/tournament-2.jpg" alt="Скриншот турнира 2"></div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <a href="https://discord.gg/betboom-esports" target="_blank" 
              class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
              <i class="ph-fill ph-discord-logo"></i> Войти на сервер
            </a>
            <div class="flex-1 discord-widget">
              <iframe src="https://discord.com/widget?id=1145462410396848188&theme=dark" width="100%" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "GIF Discord",
    subtitle: "Telegram",
    image: "./images/artpix/cover.jpg",
    category: ["telegram"],
    starred: true,
    shortDesc: "Готовые анимированные оформления для профиля",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">GIF Discord</h1>
        <p class="text-xl text-gray-300">Телеграм-канал, предоставляющий готовые оформления для Дискорда с лёгким копированием цветов и превью.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300 mb-4">Сделать так, чтобы люди оставляли свои запросы в комментариях под постами, а мы делали по ним готовые профили.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/artpix/post-example.png" 
                alt="Пример поста" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Пример поста с запросами подписчиков</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-robot text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Разработка бота</h2>
          </div>
          <p class="text-gray-300 mb-4">Для продажи оформлений «не для всех» был разработан бот, который отдаёт медиа-файлы по коду. Для хостинга картинок используется сам Telegram — бот пересылает их из канала‑архива.</p>
          
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide"><img src="./images/artpix/post-production-1.png" alt="Скриншот работы бота 1"></div>
              <div class="carousel-slide"><img src="./images/artpix/post-production-2.png" alt="Скриншот работы бота 2"></div>
              <div class="carousel-slide"><img src="./images/artpix/post-production-3.png" alt="Скриншот работы бота 3"></div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-coins text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Монетизация</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Продажа рекламных мест</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Ограниченные оформления за звёзды (Telegram Stars)</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Продажа профилей напрямую</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/gif_discord" target="_blank" 
            class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Bad Bunnies",
    subtitle: "Discord",
    image: "./images/badbunnies/cover.jpg",
    category: ["discord", "new"],
    starred: true,
    shortDesc: "Пространство для свободного общения",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Bad Bunnies</h1>
        <p class="text-xl text-gray-300">Относительно новый сервер, продвигающий свободное общение и совместное времяпровождение с возрастной меткой <strong>16+</strong>.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Мы взяли лучшее от популярных серверов, чтобы предложить альтернативу любителям полу-токсичных проектов. Целевая аудитория — игроки League of Legends / Valorant / Dota 2 / CS2.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-cat text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Разработка маскота</h2>
          </div>
          <p class="text-gray-300 mb-4">В качестве главного персонажа был выбран кролик с выбитым глазом. Оформлен в чуть менее дружелюбном, местами токсичном стиле.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/badbunnies/emojies.png" 
                alt="Эмодзи Bad Bunnies" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Набор эмодзи с кроликом</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-robot text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Разработка бота</h2>
          </div>
          <p class="text-gray-300 mb-4">Мы взяли лучшее от Milkshake, чтобы учесть все ошибки разработки и вдохнуть свежести в старый код. Система стала гибкой, послушной и удобной.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/badbunnies/stats.png" 
                alt="Скриншот бота" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Интерфейс бота Bad Bunnies</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://discord.gg/badbunnies" target="_blank" 
            class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-discord-logo"></i> Войти на сервер
          </a>
        </div>
      </div>
    `
  },
  {
    id: 5,
    title: "Daily Furina",
    subtitle: "Telegram",
    image: "./images/dailyfurina/cover.png",
    category: ["telegram"],
    starred: false,
    shortDesc: "Творческий канал по персонажу из Genshin Impact",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Daily Furina</h1>
        <p class="text-xl text-gray-300">Телеграм-канал, посвящённый творчеству по одному персонажу из игры Genshin Impact — Фурине.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-palette text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Контент</h2>
          </div>
          <p class="text-gray-300">Ежедневные публикации артов, косплея, фанарта и обсуждений, связанных с Фуриной. Канал создан для фанатов этого персонажа.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/lovelyFurina" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: "Genshin Forum",
    subtitle: "Telegram",
    image: "./images/genshinforum/cover.png",
    category: ["telegram"],
    starred: false,
    shortDesc: "Новости и находки по Genshin Impact",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Genshin Forum</h1>
        <p class="text-xl text-gray-300">Телеграм-канал по игре Genshin Impact, на котором постятся новости и находки с форумов Reddit, X (Twitter), TikTok.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-newspaper text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Изначально это должен был быть канал, где люди делятся своим мнением касательно новых обновлений, но пока идея отложена в ящик. Сейчас — агрегатор контента из других соцсетей.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/genshinforum" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: "Hoyozen",
    subtitle: "Telegram",
    image: "./images/hoyozen/cover.png",
    category: ["telegram"],
    starred: false,
    shortDesc: "Новости Zenless Zone Zero",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Hoyozen</h1>
        <p class="text-xl text-gray-300">Новостной телеграм-канал по игре Zenless Zone Zero от Hoyoverse.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-chart-line text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Контент</h2>
          </div>
          <p class="text-gray-300">Актуальные новости об обновлениях, персонажах, событиях, а также дайджесты из сообщества.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/hoyozen" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: "WB BOMB",
    subtitle: "Telegram",
    image: "./images/wbbomb/cover.png",
    category: ["telegram"],
    starred: false,
    shortDesc: "Подборки с маркетплейсов",
    fullContent: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">WB BOMB</h1>
        <p class="text-xl text-gray-300">Телеграм-канал по подборкам с маркетплейсов Озон и Wildberries.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-shopping-cart text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">О проекте</h2>
          </div>
          <p class="text-gray-300">Один из первых моих проектов в Телеграме, на котором я набил много шишек. Публикуются выгодные предложения, скидки и находки с маркетплейсов.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/wbbomb" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `
  },
  { 
    id: 9, 
    title: "СП — сервера Пятёрки", 
    subtitle: "Minecraft", 
    image: "./images/spworlds/cover.png", 
    category: ["minecraft", "other"], 
    starred: true, 
    shortDesc: "Администрирование и разработка серверов у стримера Пятёрки", 
    fullContent: ` 
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">СП — сервера Пятёрки</h1>
        <p class="text-xl text-gray-300">Приватные Minecraft-сервера Пятёрки (SpWorlds) — одна из самых известных вселенных в русскоязычном Minecraft-комьюнити. Я работал там с 2018 по 2022 год как администратор и разработчик.</p>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <p class="text-gray-300">Технический администратор и комьюнити-менеджер. Настраивал и поддерживал серверы, разрабатывал плагины, проектировал игровые режимы, следил за порядком и развивал комьюнити. Игроки запомнили меня как «хорошего админа».</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-robot text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Что делал</h2>
          </div>
          <p class="text-gray-300 mb-4">Обеспечивал стабильную работу серверов, настраивал выделенные сервера, открывал порты и настраивал прокси. Также разрабатывал плагины для серверов на языке Java.</p>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Разработка и поддержка плагинов</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Проектирование игровых режимов</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Создание интерактивного лобби</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Синхронизация сайта spworlds.ru с игровыми серверами</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Полная техническая поддержка и администрирование</li>
          </ul>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-users text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Результат и влияние</h2>
          </div>
          <p class="text-gray-300">Благодаря работе на СП у меня появились сильные связи в Minecraft-комьюнити. Многие до сих пор помнят меня как админа СП-мини и SpWorlds. Этот опыт стал фундаментом для последующих проектов.</p>
        </div>
      </div>
    ` 
  }
];