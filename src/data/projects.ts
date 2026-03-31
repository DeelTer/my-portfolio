import type { Project } from './types';

export const projects: Project[] = [
 {
    id: 1,
    title: "Milkshake",
    slug: "milkshake",
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
    slug: "betboom-esports",
    image: "./images/betboom/esports/cover.jpg",
    category: ["discord", "company"],
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
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Формирование лояльности, организация пространства для совместных игр 5 на 5. Целевая аудитория — игроки Dota 2 / CS2 / MLBB.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-calendar text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Сезонность</h2>
          </div>
          <p class="text-gray-300 mb-4">Периодически анонсируем сезоны, в течение которых участники могут заработать ценные призы при помощи активности. Еженедельные турниры и задания.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/betboom/esports/seasons.png" 
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
            <img src="./images/betboom/esports/valentine.png" 
                alt="Валентинки" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Ивент ко Дню святого Валентина</p>
          </div>
        </div>
        
        <!-- Карусель больших турниров -->
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-trophy text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Крупные турниры</h2>
          </div>
          <p class="text-gray-300 mb-4">Пока проводились всего один раз, но было собрано много команд и зрителей, мероприятие прошло отлично.</p>
          
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/betboom/esports/tournament-1.png" alt="Турнир 1">
              </div>
              <div class="carousel-slide">
                <img src="./images/betboom/esports/tournament-2.jpg" alt="Турнир 2">
              </div>
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
    slug: "gif-discord",
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
          <p class="text-gray-300 mb-4">Для продажи оформлений «не для всех» был разработан бот, который отдаёт медиа-файлы по коду. Для хостинга картинок используется сам Telegram — бот пересылает их из канала-архива.</p>
          
          <!-- Исправленная карусель -->
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/artpix/post-production-1.png" alt="Скриншот работы бота 1">
              </div>
              <div class="carousel-slide">
                <img src="./images/artpix/post-production-2.png" alt="Скриншот работы бота 2">
              </div>
              <div class="carousel-slide">
                <img src="./images/artpix/post-production-3.png" alt="Скриншот работы бота 3">
              </div>
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
    slug: "bad-bunnies",
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
    slug: "dailyfurina",
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
    slug: "genshinforum",
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
    slug: "hoyozen",
    image: "./images/hoyozen/cover.png",
    category: ["telegram"],
    starred: false,
    shortDesc: "Новости по игре Zenless Zone Zero",
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
    slug: "wbbomb",
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
    title: "#СП сервера", 
    subtitle: "Minecraft", 
    slug: "spworlds",
    image: "./images/spworlds/cover.png", 
    category: ["minecraft", "other"], 
    starred: true, 
    shortDesc: "Администрирование и разработка серверов у стримера Пятёрки", 
    fullContent: ` 
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">#СП — сервера Пятёрки</h1>
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
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Помощь в организации крупных ивентов</li>
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
  },
  {
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
  },
  {
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
  },
  {
    id: 12,
    title: "BetBoom Кликер",
    subtitle: "Telegram, Организация",
    slug: "ns-clicker",
    image: "./images/betboom/ns_clicker/cover.png",
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
                <img src="./images/betboom/ns_clicker/app-1.jpg" alt="Главный экран кликера">
              </div>
              <div class="carousel-slide">
                <img src="./images/betboom/ns_clicker/app-2.png" alt="Бусты">
              </div>
              <div class="carousel-slide">
                <img src="./images/betboom/ns_clicker/app-3.jpg" alt="Аукционы">
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
];