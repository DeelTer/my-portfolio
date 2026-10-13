(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`Управление сообществами`,icon:`users`,category:`Навыки`},{name:`Программирование на Java`,icon:`code`,category:`Навыки`},{name:`AI Промпт-инженеринг`,icon:`brain`,category:`Навыки`},{name:`Контент-Менеджмент`,icon:`megaphone`,category:`Навыки`},{name:`Брендинг сообществ`,icon:`palette`,category:`Навыки`},{name:`Видеомонтаж`,icon:`monitor`,category:`Навыки`},{name:`Дизайн`,icon:`pencil`,category:`Навыки`}],t=[{name:`Figma`,icon:`figma-logo`},{name:`IntelliJ IDEA`,icon:`code`},{name:`Adobe Photoshop`,icon:`image-square`},{name:`Adobe After Effects`,icon:`film-strip`},{name:`Adobe Premiere`,icon:`video`},{name:`Adobe Audition`,icon:`waveform`},{name:`Capcut`,icon:`scissors`},{name:`Excel / Google docs`,icon:`table`},{name:`Grok / DeepSeek / ChatGPT`,icon:`brain`}],n=[{id:17,title:`VRCamera`,subtitle:`Minecraft / Мой мод`,slug:`vrcamera`,image:`./images/vrcamera/icon.png`,category:[`code`,`java`,`opensource`,`other`],starred:!0,shortDesc:`Камера для стримов, роликов и фото в Minecraft — с VR и без`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">VRCamera</h1>
      <p class="text-xl text-gray-300">Мой мод для съёмки в Minecraft. Ты играешь, а камера показывает тебя со стороны: следует за персонажем, сама меняет ракурсы или стоит там, где ты её оставил. Работает в VR и на обычном ПК.</p>
      <div class="video-embed" data-video="3B1tzZj08eM">
        <button type="button" class="video-start" aria-label="Смотреть ролик о VRCamera"><span class="video-play" aria-hidden="true">▶</span><span>VRCamera в игре</span><small>Смотреть ролик</small></button>
      </div>
      <p class="text-sm text-gray-400">Если видео не открывается — <a class="underline" href="https://youtu.be/3B1tzZj08eM" target="_blank" rel="noopener noreferrer">смотреть на YouTube ↗</a></p>
      <section class="project-detail-block">
        <h2>Снимай, пока играешь</h2>
        <p>Автоматический режим выбирает ракурсы и держит персонажа в кадре. Можно закрепить любимый угол или расставить до 26 камер и переключаться между ними. На ПК картинка выводится в отдельное окно — его удобно захватывать в OBS.</p>
      </section>
      <section class="project-detail-block">
        <h2>Камеру можно взять в руки</h2>
        <p>В VR её можно носить, ставить, бросать и подтягивать к себе. На ПК — взять правой кнопкой мыши и переставить. Фотографии тоже становятся предметами: их можно держать в руках и прикреплять к блокам.</p>
      </section>
      <section class="project-detail-block">
        <h2>Фото, друзья и стримы</h2>
        <p>Можно снимать другого игрока, добавить друга в кадр или включить зелёный фон. Фото сохраняются на компьютер. С дополнительным серверным плагином игроки могут видеть общие фотографии и камеры.</p>
      </section>
      <section class="project-detail-block">
        <h2>Как попробовать</h2>
        <p>Нужны Minecraft 26.2 или 26.3, Java 25, Fabric и Fabric API. Для VR — ещё Vivecraft. Для каждой версии Minecraft есть отдельная сборка.</p>
        <p>Установи мод, зайди в мир и нажми F8. На ПК команда <code>/vrcam screen window</code> откроет окно камеры.</p>
        <p class="text-sm">Камера дополнительно нагружает видеокарту. Отдельное окно на ПК не поддерживает шейдеры.</p>
      </section>
      <a href="https://github.com/DeelTer/VRCamera" target="_blank" rel="noopener noreferrer" class="primary-link inline-flex">Код и инструкция ↗</a>
    </div>
  `},{id:1,title:`Milkshake`,slug:`milkshake`,subtitle:`Discord`,image:`./images/milkshake/cover.webp`,category:[`discord`,`code`],starred:!0,shortDesc:`Сообщество для знакомств и совместных игр`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Milkshake</h1>
        <p class="text-xl text-gray-300">Discord-сообщество по играм и общению, основанное в 2022 году. Сейчас насчитывает <strong class="text-[#e5e5e5]">12 800+ участников</strong>.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <h2 class="text-2xl font-semibold mb-3 flex items-center gap-2">
            <i class="ph-fill ph-star text-[#e5e5e5] text-2xl"></i> Идея проекта
          </h2>
          <p class="text-gray-300">Мы взяли лучшее от уютных и популярных серверов того времени. Целевая аудитория — игроки в League of Legends, Valorant, Minecraft, Genshin Impact и другие игры от Hoyoverse.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Администрирование сообщества</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Разработка бота и техническая поддержка</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Поиск партнёров</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Дизайн и брендинг</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <h2 class="text-2xl font-semibold mb-3 flex items-center gap-2">
            <i class="ph-fill ph-cat text-[#e5e5e5] text-2xl"></i> Разработка маскота
          </h2>
          <p class="text-gray-300 mb-4">Главный персонаж — девушка с кошачьими ушками по имени <strong>Милка</strong> (от названия «Милкшейк») с дурашливым характером. Её образ используется в эмодзи, дизайне и рекламных материалах.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/milkshake/emojies.webp" 
                alt="Эмодзи Милки" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Набор эмодзи с Милкой для Discord-сервера</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <h2 class="text-2xl font-semibold mb-3 flex items-center gap-2">
            <i class="ph-fill ph-robot text-[#e5e5e5] text-2xl"></i> Разработка бота
          </h2>
          <p class="text-gray-300 mb-4">Приложение спроектировано с учётом масштабирования. Получилась модульная система на Java с удобным редактированием через конфигурации — по аналогии с Minecraft-серверами.</p>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Ядро с поддержкой модулей</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Более 20 модулей (экономика, голосовые комнаты, модерация)</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Лёгкое редактирование при помощи конфигов</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <a href="https://discord.gg/milkshake" target="_blank" 
              class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
              <i class="ph-fill ph-discord-logo"></i> Войти на сервер
            </a>
            <div class="flex-1 discord-widget">
              <iframe src="https://discord.com/widget?id=926510224704159824&theme=dark" width="100%" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </div>
        </div>
      </div>
    `},{id:2,title:`BetBoom Esports`,subtitle:`Discord, Организация`,slug:`betboom-esports`,image:`./images/betboom/esports/cover.webp`,category:[`discord`,`company`,`code`],starred:!0,shortDesc:`Официальный Discord BetBoom Esports`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">BetBoom Esports</h1>
        <p class="text-xl text-gray-300">Дискорд-сервер для любителей киберспорта и азартных игр. Здесь часто проводятся ивенты, включая клозы, турниры и розыгрыши с ценными призами для участников.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <p class="text-gray-300">Технический администратор и комьюнити-менеджер. Проектирую активности, сезоны и генерирую идеи для ивентов.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Формирование лояльности, организация пространства для совместных игр 5 на 5. Целевая аудитория — игроки Dota 2 / CS2 / MLBB.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-calendar text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Сезонность</h2>
          </div>
          <p class="text-gray-300">Периодически анонсируем сезоны, в течение которых участники могут заработать ценные призы при помощи активности. Еженедельные турниры и задания.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-trophy text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Еженедельные турниры</h2>
          </div>
          <p class="text-gray-300">Каждую неделю участники могут принять участие в турнирах с предварительной регистрацией. Наградой выступают Фрибеты. Обычно собирается до 10 команд.</p>
          <p class="text-gray-300 mt-4">Помогал в организации крупного турнира: 16+ команд и более 100 человек на пике онлайна.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-heart text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Временные активности</h2>
          </div>
          <p class="text-gray-300">На праздники организовывал временные ивенты. Например, на 14 февраля участники могли писать друг другу валентинки с персонажами Dota 2.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <a href="https://discord.gg/betboom-esports" target="_blank" 
              class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
              <i class="ph-fill ph-discord-logo"></i> Войти на сервер
            </a>
          </div>
        </div>
      </div>
    `},{id:3,title:`GIF Discord`,subtitle:`Telegram`,slug:`gif-discord`,image:`./images/artpix/cover.webp`,category:[`telegram`,`code`],starred:!0,shortDesc:`Готовые анимированные оформления для профиля`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">GIF Discord</h1>
        <p class="text-xl text-gray-300">Телеграм-канал, предоставляющий готовые оформления для Дискорда с лёгким копированием цветов и превью.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300 mb-4">Сделать так, чтобы люди оставляли свои запросы в комментариях под постами, а мы делали по ним готовые профили.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/artpix/post-example.webp" 
                alt="Пример поста" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Пример поста с запросами подписчиков</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-robot text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Разработка бота</h2>
          </div>
          <p class="text-gray-300 mb-4">Для продажи оформлений «не для всех» был разработан бот, который отдаёт медиа-файлы по коду. Для хостинга картинок используется сам Telegram — бот пересылает их из канала-архива.</p>
          
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/artpix/post-production-1.webp" alt="Скриншот работы бота 1">
              </div>
              <div class="carousel-slide">
                <img src="./images/artpix/post-production-2.webp" alt="Скриншот работы бота 2">
              </div>
              <div class="carousel-slide">
                <img src="./images/artpix/post-production-3.webp" alt="Скриншот работы бота 3">
              </div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-coins text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Монетизация</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Продажа рекламных мест</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Ограниченные оформления за звёзды (Telegram Stars)</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Продажа профилей напрямую</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/gif_discord" target="_blank" 
            class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `},{id:4,title:`Bad Bunnies`,subtitle:`Discord`,slug:`bad-bunnies`,image:`./images/badbunnies/cover.webp`,category:[`discord`,`new`,`code`],starred:!0,shortDesc:`Пространство для свободного общения`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Bad Bunnies</h1>
        <p class="text-xl text-gray-300">Относительно новый проект, продвигающий свободное общение и совместное времяпровождение с возрастной меткой <strong>16+</strong>.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Мы взяли лучшее от популярных серверов, чтобы предложить альтернативу любителям полу-токсичных проектов. Целевая аудитория — игроки League of Legends / Valorant / Dota 2 / CS2.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Администрирование сообщества</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Разработка бота и техническая поддержка</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Поиск партнёров</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Дизайн и брендинг</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-cat text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Разработка маскота</h2>
          </div>
          <p class="text-gray-300 mb-4">В качестве главного персонажа был выбран кролик с выбитым глазом. Оформлен в чуть менее дружелюбном, местами токсичном стиле.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/badbunnies/emojies.webp" 
                alt="Эмодзи Bad Bunnies" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Набор эмодзи с кроликом</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-robot text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Разработка бота</h2>
          </div>
          <p class="text-gray-300 mb-4">Мы взяли лучшее от Milkshake, чтобы учесть все ошибки разработки и вдохнуть свежести в старый код. Система стала гибкой, послушной и удобной.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center">
            <img src="./images/badbunnies/stats.webp" 
                alt="Скриншот бота" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Интерфейс бота Bad Bunnies</p>
          </div>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://discord.gg/badbunnies" target="_blank" 
            class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-discord-logo"></i> Войти на сервер
          </a>
        </div>
      </div>
    `},{id:5,title:`Daily Furina`,subtitle:`Telegram`,slug:`dailyfurina`,image:`./images/dailyfurina/cover.webp`,category:[`telegram`],starred:!1,shortDesc:`Творческий канал по персонажу из Genshin Impact`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Daily Furina</h1>
        <p class="text-xl text-gray-300">Телеграм-канал, посвящённый творчеству по одному персонажу из игры Genshin Impact — Фурине.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-palette text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Контент</h2>
          </div>
          <p class="text-gray-300">Ежедневные публикации артов, косплея, фанарта и обсуждений, связанных с Фуриной. Канал создан для фанатов этого персонажа.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/lovelyFurina" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `},{id:6,title:`Genshin Forum`,subtitle:`Telegram`,slug:`genshinforum`,image:`./images/genshinforum/cover.webp`,category:[`telegram`],starred:!1,shortDesc:`Новости и находки по Genshin Impact`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Genshin Forum</h1>
        <p class="text-xl text-gray-300">Телеграм-канал по игре Genshin Impact, на котором постятся новости и находки с форумов Reddit, X (Twitter), TikTok.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-newspaper text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Изначально это должен был быть канал, где люди делятся своим мнением касательно новых обновлений, но пока идея отложена в ящик. Сейчас — агрегатор контента из других соцсетей.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/genshinforum" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `},{id:7,title:`Hoyozen`,subtitle:`Telegram`,slug:`hoyozen`,image:`./images/hoyozen/cover.webp`,category:[`telegram`],starred:!1,shortDesc:`Новости по игре Zenless Zone Zero`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Hoyozen</h1>
        <p class="text-xl text-gray-300">Новостной телеграм-канал по игре Zenless Zone Zero от Hoyoverse.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-chart-line text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Контент</h2>
          </div>
          <p class="text-gray-300">Актуальные новости об обновлениях, персонажах, событиях, а также дайджесты из сообщества.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/hoyozen" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `},{id:8,title:`WB BOMB`,subtitle:`Telegram`,slug:`wbbomb`,image:`./images/wbbomb/cover.webp`,category:[`telegram`],starred:!1,shortDesc:`Подборки с маркетплейсов`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">WB BOMB</h1>
        <p class="text-xl text-gray-300">Телеграм-канал по подборкам с маркетплейсов Озон и Wildberries.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-shopping-cart text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">О проекте</h2>
          </div>
          <p class="text-gray-300">Один из первых моих проектов в Телеграме, на котором я набил много шишек. Публикуются выгодные предложения, скидки и находки с маркетплейсов.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <a href="https://t.me/wbbomb" target="_blank" 
             class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-telegram-logo"></i> Перейти в канал
          </a>
        </div>
      </div>
    `},{id:9,title:`#СП сервера`,subtitle:`Minecraft`,slug:`spworlds`,image:`./images/spworlds/cover.webp`,category:[`minecraft`,`other`,`code`],starred:!0,shortDesc:`Администрирование и разработка серверов у стримера Пятёрки`,fullContent:` 
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">#СП — сервера Пятёрки</h1>
        <p class="text-xl text-gray-300">Приватные Minecraft-сервера Пятёрки (SpWorlds) — одна из самых известных вселенных в русскоязычном Minecraft-комьюнити. Я работал там с 2018 по 2022 год как администратор и разработчик.</p>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <p class="text-gray-300">Технический администратор и комьюнити-менеджер. Настраивал и поддерживал серверы, разрабатывал плагины, проектировал игровые режимы, следил за порядком и развивал комьюнити. Игроки запомнили меня как «хорошего админа».</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-robot text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Что делал</h2>
          </div>
          <p class="text-gray-300 mb-4">Обеспечивал стабильную работу серверов, настраивал выделенные сервера, открывал порты и настраивал прокси. Также разрабатывал плагины для серверов на языке Java.</p>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Разработка и поддержка плагинов</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Проектирование игровых режимов</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Создание интерактивного лобби</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Помощь в организации крупных ивентов</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Синхронизация сайта spworlds.ru с игровыми серверами</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Полная техническая поддержка и администрирование</li>
          </ul>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-users text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Результат и влияние</h2>
          </div>
          <p class="text-gray-300">Благодаря работе на СП у меня появились сильные связи в Minecraft-комьюнити. Многие до сих пор помнят меня как админа СП-мини и SpWorlds. Этот опыт стал фундаментом для последующих проектов.</p>
          <div class="bg-[#2a2a2a] rounded-xl p-4 text-center mt-4">
            <img src="./images/spworlds/screen.webp" 
                alt="Скриншот сервера SpWorlds" 
                class="max-w-full h-auto mx-auto rounded-lg">
            <p class="text-gray-400 text-sm mt-2">Скриншот с сервера SpWorlds</p>
          </div>
        </div>
      </div>
    `},{id:11,title:`Пляжный`,subtitle:`TikTok`,slug:`plyazhni`,image:`./images/tiktok/deelter/cover.webp`,category:[`tiktok`,`other`],starred:!0,shortDesc:`Контент по игре Minecraft, инструкции для VR`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Пляжный</h1>
        <p class="text-xl text-gray-300">Тикток-канал, где я помогаю людям разобраться с VR-версией Minecraft, настройкой шлемов, даю советы по игре и создаю полезные инструкции.</p>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-video text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Концепция канала</h2>
          </div>
          <p class="text-gray-300">Цель — сделать VR-гейминг в Minecraft доступным и понятным. Я рассказываю, какой шлем выбрать, как его настроить, как избежать ошибок, а также делюсь лайфхаками и показываю моменты из игр. Видео строятся по принципу «вопрос — ответ» или пошаговые инструкции.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-scissors text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Процесс создания</h2>
          </div>
          <p class="text-gray-300 mb-4">Сначала я пишу сценарий, стараясь сделать его полезным и интересным. Затем снимаю футажи в игре (иногда с помощью захвата экрана шлема). Монтаж делаю в CapCut — это быстро и позволяет эффективно добавлять субтитры, музыку и эффекты.</p>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Написание сценария с чёткой структурой</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Запись игрового процесса в VR</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Монтаж в CapCut с акцентами на ключевые моменты</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Оформление текстом, звуком, динамичной нарезкой</li>
          </ul>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Для кого это</h2>
          </div>
          <p class="text-gray-300">Начинающие пользователи VR, которые хотят попробовать Minecraft в виртуальной реальности, но не знают, с чего начать. А также опытные игроки, ищущие лайфхаки и вдохновение для новых проектов в VR.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-image text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Примеры видео</h2>
          </div>
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLm15oy/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-1.webp" alt="Превью видео 1" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#e5e5e5] rounded-full">Смотреть →</span>
                  </div>
                </a>
              </div>
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLmN1rX/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-2.webp" alt="Превью видео 2" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#e5e5e5] rounded-full">Смотреть →</span>
                  </div>
                </a>
              </div>
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLasLQ3/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-3.webp" alt="Превью видео 3" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#e5e5e5] rounded-full">Смотреть →</span>
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
            <i class="ph-fill ph-chart-line text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Статистика канала</h2>
          </div>
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/tiktok/deelter/stats-1.webp" alt="Аналитика канала 1" class="w-full h-auto rounded-lg">
              </div>
              <div class="carousel-slide">
                <img src="./images/tiktok/deelter/stats-2.webp" alt="Аналитика канала 2" class="w-full h-auto rounded-lg">
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
            class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
            <i class="ph-fill ph-tiktok-logo"></i> Перейти в TikTok
          </a>
        </div>
      </div>
    `},{id:10,title:`Fonbet Ивент`,subtitle:`Оффлайн, Организация`,slug:`fonbet-event`,image:`./images/fonbet/cover.webp`,category:[`other`,`offline`,`company`],starred:!0,shortDesc:`Интерактив на куполе в планетарии`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Fonbet: Офлайн-ивент</h1>
        <p class="text-xl text-gray-300">Разработка программного обеспечения для мероприятия в Петербургском планетарии. Я выступал связующим звеном между заказчиком и командой разработки, тестировал продукт и презентовал результат клиенту.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-chats text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Коммуникация с заказчиком и их клиентом</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Участие во всех созвонах, сбор и уточнение требований</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Формирование технического задания для команды разработки</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Ручное тестирование приложений (купол + планшеты), поиск и документирование багов</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Презентация готового решения клиентам и заказчику</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-cube text-[#e5e5e5] text-2xl"></i>
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
            <i class="ph-fill ph-check-circle text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Результат</h2>
          </div>
          <p class="text-gray-300">Мероприятие успешно проведено, клиент и заказчик остались довольны. Благодаря чёткой передаче требований и тестированию удалось избежать критических багов на ивенте и уложиться в сроки.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-camera text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Фото с ивента</h2>
          </div>
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/fonbet/event-screen-1.webp" alt="Фотография с мероприятия #1">
              </div>
              <div class="carousel-slide">
                <img src="./images/fonbet/event-screen-2.webp" alt="Фотография с мероприятия #2">
              </div>
              <div class="carousel-slide">
                <img src="./images/fonbet/event-screen-3.webp" alt="Фотография с мероприятия #3">
              </div>
            </div>
            <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
            <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
            <div class="carousel-dots"></div>
          </div>
        </div>
      </div>
    `},{id:12,title:`BetBoom Кликер`,subtitle:`Telegram, Организация`,slug:`ns-clicker`,image:`./images/betboom/ns_clicker/cover.webp`,category:[`telegram`,`company`],starred:!0,shortDesc:`Разработка мини-апп приложения`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">BetBoom Кликер</h1>
        <p class="text-xl text-gray-300">Аналог Hamster Kombat для прямого эфира BetBoom. Проект реализован в статусе субподрядчика через агенство</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-chats text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Коммуникация с агентством</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Участие в созвонах, сбор и уточнение требований</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Формирование ТЗ для команды разработки</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Согласование брендинга, цветов, шрифтов с дизайнерами</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Уточнение сроков и условий оплаты (предоплата, постоплата)</li>
            <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Координация между отделами</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-check-circle text-[#e5e5e5] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Результат</h2>
          </div>
          <p class="text-gray-300">Кликер успешно запущен в срок. Заказчик получил полностью функционирующий инструмент для повышения вовлечённости аудитории.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-camera text-[#e5e5e5] text-2xl"></i>
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
    `},{id:13,title:`YooKassa Java SDK`,subtitle:`Open Source / Библиотека`,slug:`yookassa-java-sdk`,image:`./images/yookassa/cover.webp`,category:[`opensource`,`java`,`code`,`company`],starred:!0,shortDesc:`Моя Java-библиотека для платежей через ЮKassa`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">YooKassa Java SDK</h1>
      <p class="text-xl text-gray-300">Я разрабатываю неофициальную Java-библиотеку для ЮKassa. Она помогает принимать платежи, делать возвраты и работать с чеками без ручной сборки HTTP-запросов.</p>
      <p><a data-yookassa-release href="https://github.com/DeelTer/YooKassaSDK/releases/tag/2.1.0" target="_blank" rel="noopener noreferrer" class="underline">Версия 2.1.0 · GitHub Releases ↗</a></p>
      <section class="project-detail-block">
        <h2>Что умеет библиотека</h2>
        <p>Покрывает все 34 операции спецификации API v3: платежи, способы оплаты, счета, возвраты, чеки, выплаты, безопасные сделки и подписки на уведомления.</p>
        <ul>
          <li>230 моделей данных, сгенерированных по OpenAPI. Неизвестные поля сохраняются при чтении и отправке.</li>
          <li>Повторные запросы с тем же ключом идемпотентности, настройка таймаутов и обработка ошибок API.</li>
          <li>Разбор уведомлений, проверка адреса отправителя и кеш справочных данных.</li>
          <li>В версии 2.1.0 — проверка моделей, числовых ограничений, запросов и ответов.</li>
        </ul>
        <p class="text-sm">Java 8+ · OkHttp 4 · Gson. Возможности описаны по README версии 2.1.0.</p>
      </section>
      <section class="project-detail-block">
        <h2>В списке библиотек сообщества</h2>
        <p>ЮKassa добавила SDK на <a class="underline" href="https://yookassa.ru/developers/using-api/using-sdks#community" target="_blank" rel="noopener noreferrer">страницу библиотек сообщества</a>. Ниже — письмо и страница со списком. SDK остаётся независимым проектом.</p>
        <div class="carousel" data-carousel>
          <div class="carousel-slides">
            <div class="carousel-slide"><img src="./images/yookassa/official-2.webp" alt="Страница библиотек сообщества ЮKassa" width="1280" decoding="async"></div>
            <div class="carousel-slide"><img src="./images/yookassa/official-1.webp" alt="Письмо от ЮKassa о добавлении библиотеки" width="1280" decoding="async"></div>
          </div>
          <button class="carousel-prev" aria-label="Назад">‹</button>
          <button class="carousel-next" aria-label="Вперёд">›</button>
          <div class="carousel-dots"></div>
        </div>
      </section>
      <section class="project-detail-block">
        <h2>Подключение</h2>
        <p>Пример для версии 2.1.0 через JitPack (Gradle Kotlin DSL):</p>
        <pre><code>repositories {
    mavenCentral()
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.github.DeelTer:YooKassaSDK:2.1.0")
}</code></pre>
        <p>Ветка 2.x переписана и несовместима с 1.x. Инструкции для Maven и перехода со старой версии есть в <a class="underline" href="https://github.com/DeelTer/YooKassaSDK#readme" target="_blank" rel="noopener noreferrer">README</a>.</p>
      </section>
      <section class="project-detail-block">
        <h2>Пример: получить платёж</h2>
        <pre><code>import ru.deelter.yookassa.YooKassa;
import ru.deelter.yookassa.model.Payment;

try (YooKassa api = YooKassa.create(
        System.getenv("YOOKASSA_SHOP_ID"),
        System.getenv("YOOKASSA_SECRET_KEY"))) {
    Payment payment = api.getPayment(paymentId);
    boolean paid = Payment.STATUS_SUCCEEDED.equals(payment.getStatus());
}</code></pre>
        <p>Клиент синхронный: запросы выполняют в рабочем потоке. Перед использованием в своём проекте платёжный сценарий нужно проверить в тестовом магазине ЮKassa.</p>
      </section>
      <a href="https://github.com/DeelTer/YooKassaSDK" target="_blank" rel="noopener noreferrer" class="primary-link inline-flex">Код и документация на GitHub ↗</a>
    </div>
  `},{id:14,title:`Cryptomus Java SDK`,subtitle:`Open Source / Библиотека`,slug:`cryptomus-java-sdk`,image:`./images/cryptomus/cover.webp`,category:[`opensource`,`java`,`code`,`sdk`],starred:!1,shortDesc:`SDK для интеграции криптоплатежей`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">Cryptomus Java SDK</h1>
      <p class="text-xl text-gray-300">Библиотека для работы с платёжной системой Cryptomus. Позволяет создавать счета, проверять статусы платежей и интегрировать криптовалютные переводы в Java-приложения.</p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Реальное применение</h2>
        </div>
        <p class="text-gray-300 mb-4">Библиотека используется в боевом проекте <strong class="text-[#e5e5e5]">Milkshake</strong> для приёма донатов через криптовалюту. Вот фрагмент реального кода из модуля оплаты:</p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>public class CryptomusManager extends AbstractManager {

  private Cryptomus cryptomus;

  @Nullable
  public CryptoPayment createPayment(@NotNull PaymentBill bill) {
    ShopCart cart = bill.getCart();
    try {
      return cryptomus.createPayment(
        PaymentCreateData.builder()
          .amount(BigDecimal.valueOf(cart.getPrice()))
          .currency(Currency.RUB.name())
          .redirectUrl("https://discord.gg/milkshake")
          .lifetime(30, TimeUnit.MINUTES)
          .build()
      );
    } catch (IOException e) {
      e.printStackTrace();
      return null;
    }
  }

  public void checkPayments() throws IOException {
    // Получаем все неоплаченные счета
    Set<PaymentBill> bills = billsManager.getBills(PaymentSystem.CRYPTOMUS);
    PaymentList payments = cryptomus.getPayments(null);
    
    for (PaymentBill bill : bills) {
      CryptoPayment payment = paymentsMap.get(bill.getPaymentId());
      if (payment.getPaymentStatus().isPaid()) {
        bill.complete(); // Выдача товара
      }
    }
  }

  @Override
  protected void onLoad() {
    cryptomus = Cryptomus.create(
      config.getCryptomusMerchantId(),
      config.getCryptomusToken()
    );
  }
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-rocket text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Возможности SDK</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Создание платежей с указанием суммы, валюты, времени жизни</li>
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Получение списка платежей с фильтрацией</li>
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Проверка статуса платежа (paid, error, waiting)</li>
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Автоматическое обновление статусов через API</li>
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Поддержка всех криптовалют, доступных в Cryptomus</li>
        </ul>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-download text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Установка</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Maven</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>&lt;repository&gt;
    &lt;id&gt;jitpack.io&lt;/id&gt;
    &lt;url&gt;https://jitpack.io&lt;/url&gt;
&lt;/repository&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.github.DeelTer&lt;/groupId&gt;
    &lt;artifactId&gt;CryptomusSDK&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Gradle</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>dependencyResolutionManagement {
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.DeelTer:CryptomusSDK:1.0.0'
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <a href="https://github.com/DeelTer/CryptomusSDK" target="_blank" 
          class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
          <i class="ph-fill ph-github-logo"></i> Перейти на GitHub
        </a>
      </div>
    </div>
  `},{id:15,title:`Lisskins Java Client`,subtitle:`Open Source / Библиотека`,slug:`lisskins-java`,image:`./images/lisskins/cover.webp`,category:[`opensource`,`java`,`code`,`sdk`,`company`],starred:!0,shortDesc:`Неофициальный клиент для LIS-SKINS API`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">Lisskins Java Client</h1>
      <p class="text-xl text-gray-300">
        Типобезопасный клиент для автоматизации работы с маркетплейсом LIS-SKINS.
        Написан по <a href="https://lis-skins.stoplight.io/docs/lis-skins/dzq78x3edc19r-api-overview" target="_blank" class="text-[#e5e5e5] hover:underline">официальной документации API</a>, но не является официальным SDK.
      </p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-star text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Возможности</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#e5e5e5] mt-1 shrink-0"></i> Полное покрытие методов API v1 (баланс, покупка, поиск, вывод, возврат)</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#e5e5e5] mt-1 shrink-0"></i> Синхронные и асинхронные методы</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#e5e5e5] mt-1 shrink-0"></i> Автоматический ретрай при 429 Too Many Requests с учётом заголовка retry-after</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#e5e5e5] mt-1 shrink-0"></i> Опциональный WebSocket-клиент для событий в реальном времени</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#e5e5e5] mt-1 shrink-0"></i> Чистые DTO с Jackson</code></li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#e5e5e5] mt-1 shrink-0"></i> Строковые константы для статусов, игр, ошибок и событий WebSocket</li>
        </ul>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Быстрый старт</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Создание клиента</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>LisskinsClient client = LisskinsClient.builder()
    .apiKey("your-api-key")
    .debug(true)          // логирование запросов
    .userId("12345")      // опционально, для WebSocket
    .build();</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Поиск скинов</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>SearchRequest request = SearchRequest.builder()
    .game("csgo")
    .priceFrom(1.0)
    .priceTo(100.0)
    .perPage(50)
    .sortBy("lowest_price")
    .build();
SearchResponse result = client.search(request);</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Покупка скина и проверка баланса</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>BuyResponse purchase = client.buy(BuyRequest.builder()
    .ids(List.of(125345))
    .partner("123456789")
    .token("abcdef")
    .maxPrice(2.50)
    .customId("order-123")
    .build());
BalanceResponse balance = client.getBalance();</code></pre>
        <p class="text-gray-300 mt-4"><strong>WebSocket (события рынка и статусы покупок)</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>client.getWebSocketManager().setOnObtainedSkinListener(json -> {
    System.out.println("Market event: " + json);
});
client.getWebSocketManager().connect();</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-download text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Установка</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Maven</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>&lt;repository&gt;
    &lt;id&gt;jitpack.io&lt;/id&gt;
    &lt;url&gt;https://jitpack.io&lt;/url&gt;
&lt;/repository&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.github.DeelTer&lt;/groupId&gt;
    &lt;artifactId&gt;lisskins-java&lt;/artifactId&gt;
    &lt;version&gt;1.0.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Gradle</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>dependencyResolutionManagement {
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.DeelTer:lisskins-java:1.0.3'
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <a href="https://github.com/DeelTer/lisskins-java" target="_blank" 
          class="inline-flex items-center gap-2 bg-[#e5e5e5] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
          <i class="ph-fill ph-github-logo"></i> Перейти на GitHub
        </a>
      </div>
    </div>
  `},{id:16,title:`TNT_online Ивент`,subtitle:`Онлайн, Организация`,slug:`tnt-online`,image:`./images/tnt_online/cover.webp`,category:[`minecraft`,`other`,`event`,`company`],starred:!0,shortDesc:`Организация и поддержка стрима со стримерами`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">TNT Online: Игры Фуги с Пятёркой</h1>
      <p class="text-xl text-gray-300">Масштабный стрим, во время которого три популярных стримера играли на нашем сервере вместе со зрителями.</p>
      
      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-chats text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Моя роль</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Техническая поддержка сервера в реальном времени</li>
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Мониторинг состояния и быстрая реакция на сбои</li>
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Оперативное устранение неполадок, чтобы стрим не прерывался</li>
          <li class="flex gap-2"><span class="text-[#e5e5e5]">✓</span> Контроль за нагрузкой и стабильностью игрового процесса</li>
        </ul>
      </div>
      
      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-users text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Участники стрима</h2>
        </div>
        <p class="text-gray-300 mb-4">В ивенте принимали участие известные стримеры и их подписчики:</p>
        <ul class="space-y-2 text-gray-300 list-disc pl-5">
          <li><strong>Пятёрка</strong> — стример и владелец серверов SpWorlds</li>
          <li><strong>MellSher</strong> и <strong>Vika McCline</strong> — участники зрелищного PvP-боя</li>
        </ul>
        <p class="text-gray-300 mt-4">Зрители могли присоединиться к серверу и играть вместе с кумирами, что создавало большую нагрузку и требовало технической подготовки.</p>
      </div>
      
      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-check-circle text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Результат</h2>
        </div>
        <p class="text-gray-300">Стрим прошёл без серьёзных технических сбоев, сервер выдержал нагрузку, а зрители и участники остались довольны. Я получил ценный опыт работы в стрессовых условиях и подтвердил способность быстро решать проблемы на живом мероприятии.</p>
      </div>
      
      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-video text-[#e5e5e5] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Запись стрима</h2>
        </div>
        <div class="relative w-full" style="padding-bottom: 56.25%;">
          <iframe 
            src="https://www.youtube.com/embed/ymhpcX7lqCo" 
            title="TNT Online stream recording" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="absolute inset-0 w-full h-full rounded-xl"
          ></iframe>
        </div>
        <p class="text-gray-400 text-sm mt-2 text-center">Полная запись трансляции на YouTube</p>
      </div>
    </div>
  `}];function r(){let t=document.getElementById(`skills`);t&&(t.innerHTML=`
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${e.map(e=>`
        <div class="skill-card">
          <i class="ph-fill ph-${e.icon} text-3xl text-[#e5e5e5] flex-shrink-0"></i>
          <span class="font-medium text-gray-200 text-sm md:text-base">${e.name}</span>
        </div>
      `).join(``)}
    </div>
  `)}function i(){let e=document.getElementById(`skills`);e&&(e.innerHTML=`
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${t.map(e=>`
        <div class="bg-[#1a1a1a] rounded-2xl p-5 flex items-center gap-4 hover:bg-[#1e1e1e] transition-all duration-300 border border-white/5 hover:border-[#e5e5e5]/40 group">
          <i class="ph-fill ph-${e.icon} text-3xl text-[#e5e5e5] flex-shrink-0 transition-transform duration-300 group-hover:scale-110"></i>
          <span class="font-medium text-gray-200">${e.name}</span>
        </div>
      `).join(``)}
    </div>
  `)}function a(e){return e.map(e=>`
    <button type="button" onclick="openProject(${e.id})"
         class="project-card text-left group bg-[#121212] rounded-3xl overflow-hidden cursor-pointer
                hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300
                border border-white/5 hover:border-[#e5e5e5]/30
                hover:shadow-2xl hover:shadow-[#e5e5e5]/10 relative">
      ${e.starred?`
        <div class="absolute top-4 right-4 z-10">
          <i class="ph-fill ph-star text-[#e5e5e5] text-2xl drop-shadow-md"></i>
        </div>
      `:``}

      <div class="relative aspect-video bg-zinc-900 overflow-hidden">
        <div class="absolute inset-0 bg-zinc-800" data-skeleton></div>
        <img src="${e.image}"
             alt="${e.title}"
             class="relative w-full h-full object-cover transition-opacity duration-500"
             style="opacity:0"
             loading="lazy"
             decoding="async"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.onerror=null; this.style.visibility='hidden'; this.style.opacity='1'; this.previousElementSibling.style.display='none';">
      </div>

      <div class="p-5">
        <div class="text-sm text-gray-400 mb-1">${e.subtitle}</div>
        <h3 class="text-xl font-bold mb-2 line-clamp-1">${e.title}</h3>
        <p class="text-gray-400 text-sm line-clamp-2">${e.shortDesc}</p>
      </div>
    </button>
  `).join(``)}function o(e){let t=document.getElementById(`projects-grid`);if(!t)return;let n=s(e);(()=>{if(n.length===0){t.innerHTML=`<div class="col-span-full text-center text-gray-400 py-12 animate-fade-in-up">Проектов пока нет</div>`;return}t.innerHTML=a(n)})()}function s(e){return[...e].sort((e,t)=>e.starred&&!t.starred?-1:!e.starred&&t.starred?1:e.id-t.id)}function c(e){document.querySelectorAll(`.filter-btn`).forEach(t=>{let n=t.getAttribute(`data-filter`)===e;t.classList.toggle(`active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)});let t;t=e===`all`?n:e===`starred`?n.filter(e=>e.starred===!0):n.filter(t=>t.category.includes(e)),o(t)}function l(e){document.getElementById(`skills`)?.setAttribute(`aria-labelledby`,`tab${e}`),document.querySelectorAll(`.tab-btn`).forEach((t,n)=>{t.classList.toggle(`active`,n===e),t.setAttribute(`aria-selected`,n===e?`true`:`false`),t.setAttribute(`tabindex`,n===e?`0`:`-1`)}),e===0?r():i()}var u;function d(){return u??=(async()=>{let e=new AbortController,t=window.setTimeout(()=>e.abort(),4e3);try{let t=await fetch(`https://api.github.com/repos/DeelTer/YooKassaSDK/releases/latest`,{signal:e.signal,headers:{Accept:`application/vnd.github+json`}});if(!t.ok)return null;let n=await t.json();if(!n||typeof n!=`object`||!(`tag_name`in n))return null;let r=n.tag_name;return typeof r!=`string`||!/^v?\d+\.\d+\.\d+$/.test(r)||`prerelease`in n&&n.prerelease||`draft`in n&&n.draft?null:r}catch{return null}finally{window.clearTimeout(t)}})()}function f(e){let t=e.querySelector(`[data-yookassa-release]`);t&&d().then(e=>{!e||!t.isConnected||(t.textContent=`Последний релиз: ${e} · GitHub ↗`,t.href=`https://github.com/DeelTer/YooKassaSDK/releases/tag/${encodeURIComponent(e)}`)}),e.querySelectorAll(`[data-video]`).forEach(e=>{let t=e.dataset.video;!t||!/^[\w-]{11}$/.test(t)||e.querySelector(`button`)?.addEventListener(`click`,()=>{let n=document.createElement(`iframe`);n.src=`https://www.youtube-nocookie.com/embed/${t}?autoplay=1`,n.title=`VRCamera — видео о моде`,n.allow=`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen`,n.allowFullscreen=!0,n.referrerPolicy=`strict-origin-when-cross-origin`,e.replaceChildren(n),n.focus()},{once:!0})})}var p=null;function m(){document.querySelectorAll(`#modal .carousel`).forEach(e=>{if(e.hasAttribute(`data-initialized`))return;e.setAttribute(`data-initialized`,`true`);let t=e.querySelector(`.carousel-slides`),n=e.querySelector(`.carousel-prev`),r=e.querySelector(`.carousel-next`),i=e.querySelector(`.carousel-dots`);if(!t||!n||!r||!i)return;n.textContent=`‹`,r.textContent=`›`;let a=0,o=t.children.length;if(o<=1){n.style.display=`none`,r.style.display=`none`;return}i.innerHTML=``;for(let e=0;e<o;e++){let t=document.createElement(`button`);t.classList.add(`dot`),t.setAttribute(`aria-label`,`Слайд ${e+1}`),e===0&&t.classList.add(`active`),t.addEventListener(`click`,()=>l(e)),i.appendChild(t)}let s=i.querySelectorAll(`.dot`);function c(){t.style.transform=`translateX(-${a*100}%)`,s.forEach((e,t)=>{e.classList.toggle(`active`,t===a)})}function l(e){a=(e+o)%o,c()}n.addEventListener(`click`,()=>l(a-1)),r.addEventListener(`click`,()=>l(a+1)),c()})}function h(e){let t=n.find(t=>t.id===e);if(!t)return;let r=document.getElementById(`modal`),i=document.getElementById(`modal-content`),a=t.image?`
      <div class="relative w-full rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900">
        <div class="absolute inset-0 bg-zinc-800" data-skeleton></div>
        <img src="${t.image}"
             alt="${t.title}"
             class="relative w-full h-full object-cover transition-opacity duration-500 opacity-0"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.style.opacity='1'; this.previousElementSibling.style.display='none'; this.onerror=null; this.style.visibility='hidden';">
      </div>`:``;r.classList.contains(`hidden`)&&(p=document.activeElement),i.innerHTML=a+t.fullContent,r.classList.remove(`hidden`,`modal-closing`),r.classList.add(`flex`),document.body.style.overflow=`hidden`,m(),f(i),r.querySelector(`.modal-panel`).scrollTop=0,r.querySelector(`.modal-close`)?.focus(),Array.from(document.body.children).forEach(e=>{e!==r&&e instanceof HTMLElement&&e.tagName!==`SCRIPT`&&(e.inert=!0)})}function g(e=!0){let t=document.getElementById(`modal`);!t||t.classList.contains(`hidden`)||(t.classList.add(`hidden`),t.classList.remove(`flex`),document.body.style.overflow=``,Array.from(document.body.children).forEach(e=>{e instanceof HTMLElement&&(e.inert=!1)}),document.getElementById(`modal-content`).innerHTML=``,e&&location.hash.startsWith(`#project/`)&&history.replaceState(null,``,location.pathname+location.search),p?.focus({preventScroll:!0}))}var _={nodes:[{id:`roman`,label:`Я`,category:`me`,image:`./images/avatars/me.webp`},{id:`kirill`,label:`Кирилл (NeverCookFirst)`,category:`friend`,image:`./images/avatars/nevercook.webp`},{id:`alenhay`,label:`AlenHay`,category:`friend`,description:`Сооснователь сообщества Dislace`,image:`./images/avatars/alenhay.webp`},{id:`mike_lisetskiy`,label:`Михаил Лисецкий`,category:`friend`,description:`Директор фестивалей Стримфест и GAMEДНИ, медиа и ивент-продюсер`,image:`./images/avatars/mike_lisetsky.webp`},{id:`ultimate`,label:`Ultimate.gg`,category:`agency`,image:`./images/avatars/ultimate.webp`,description:`Digital-агентство, продакшн в гейминге, стриминге и киберспорте`},{id:`vlad_shain`,label:`Влад Шейн`,category:`friend`,description:`Аниматор, делал ролики для крупных ютуберов`,image:`./images/avatars/vlad_shain.webp`},{id:`dislace`,label:`Dislace`,category:`discord`,description:`Закрытое сообщество для разработчиков, авторов контента`,image:`./images/avatars/dislace.webp`},{id:`betboom_esports`,label:`BetBoom Esports`,category:`company`,image:`./images/avatars/betboom_esports.webp`},{id:`betboom`,label:`BetBoom`,category:`company`,description:`Букмекерская компания`,image:`./images/avatars/betboom.webp`},{id:`fonbet`,label:`Fonbet`,category:`company`,description:`Букмекерская компания`,image:`./images/avatars/fonbet.webp`},{id:`betboom_headsmm`,label:`Head SMM BetBoom Esports`,category:`betboom`,description:`Администратор Telegram каналов по Dota 2 & CS2`},{id:`donatov`,label:`Donatov.net`,category:`company`,image:`./images/avatars/donatov.webp`,description:`Магазин цифровых товаров`},{id:`gamedni`,label:`GAMEДни`,category:`company`,image:`./images/avatars/gamedni.webp`,description:`Фестиваль по видеоиграм`},{id:`tnt_online`,label:`TNT_online`,category:`company`,description:`ТНТ в мире стриминга и гейминга`,image:`./images/avatars/tnt_online.webp`},{id:`5opka`,label:`Пятёрка`,category:`streamer`,image:`./images/avatars/5opka.webp`,description:`Стример`},{id:`yulik`,label:`Юлик`,category:`streamer`,image:`./images/avatars/yulik.webp`,description:`Ютубер, стример`},{id:`vadimchik`,label:`Вадимчик`,category:`friend`,description:`Организатор мероприятий Donatov.net`,image:`./images/avatars/vadimchik.webp`},{id:`studio115`,label:`Студия 115`,category:`agency`,image:`./images/avatars/studio115.webp`,description:`Проектный менеджер и коммуникация, совместные проекты с BetBoom и Fonbet`},{id:`designers`,label:`Дизайнеры & художники`,category:`freelance`},{id:`motion_video`,label:`Моушены & видеомонтажёры`,category:`freelance`},{id:`programmers`,label:`Программисты`,category:`freelance`},{id:`producers`,label:`Продюсеры`,category:`freelance`},{id:`telegram_admins`,label:`Telegram админы`,category:`tg`,image:`./images/avatars/telegram.webp`},{id:`discord_admins`,label:`Discord админы`,category:`discord`,image:`./images/avatars/discord.webp`},{id:`minecraft_admins`,label:`Minecraft админы`,category:`minecraft`,image:`./images/avatars/minecraft.webp`},{id:`event_orgs`,label:`Организаторы ивентов`,category:`event`},{id:`shop_admins`,label:`Владельцы цифровых магазинов`,category:`discord`}],links:[{source:`roman`,target:`kirill`},{source:`roman`,target:`alenhay`},{source:`roman`,target:`mike_lisetskiy`},{source:`roman`,target:`betboom_esports`},{source:`roman`,target:`betboom_headsmm`},{source:`roman`,target:`5opka`},{source:`roman`,target:`yulik`},{source:`roman`,target:`studio115`},{source:`roman`,target:`vadimchik`},{source:`roman`,target:`vlad_shain`},{source:`roman`,target:`gamedni`},{source:`roman`,target:`dislace`},{source:`roman`,target:`designers`},{source:`roman`,target:`motion_video`},{source:`roman`,target:`programmers`},{source:`roman`,target:`producers`},{source:`roman`,target:`telegram_admins`},{source:`roman`,target:`discord_admins`},{source:`roman`,target:`minecraft_admins`},{source:`roman`,target:`event_orgs`},{source:`kirill`,target:`ultimate`},{source:`kirill`,target:`mike_lisetskiy`},{source:`kirill`,target:`dislace`},{source:`alenhay`,target:`dislace`},{source:`betboom_esports`,target:`betboom_headsmm`},{source:`betboom_headsmm`,target:`telegram_admins`},{source:`ultimate`,target:`betboom_esports`},{source:`ultimate`,target:`betboom`},{source:`ultimate`,target:`fonbet`},{source:`studio115`,target:`kirill`},{source:`studio115`,target:`ultimate`},{source:`studio115`,target:`betboom_esports`},{source:`studio115`,target:`betboom`},{source:`studio115`,target:`fonbet`},{source:`studio115`,target:`alenhay`},{source:`donatov`,target:`telegram_admins`},{source:`donatov`,target:`shop_admins`},{source:`donatov`,target:`vadimchik`},{source:`donatov`,target:`gamedni`},{source:`vadimchik`,target:`telegram_admins`},{source:`vadimchik`,target:`gamedni`},{source:`mike_lisetskiy`,target:`gamedni`},{source:`mike_lisetskiy`,target:`vadimchik`},{source:`gamedni`,target:`vadimchik`},{source:`5opka`,target:`shop_admins`},{source:`5opka`,target:`minecraft_admins`},{source:`5opka`,target:`tnt_online`},{source:`vlad_shain`,target:`5opka`},{source:`dislace`,target:`discord_admins`},{source:`discord_admins`,target:`shop_admins`},{source:`minecraft_admins`,target:`shop_admins`},{source:`telegram_admins`,target:`shop_admins`}]},v=`modulepreload`,y=function(e,t){return new URL(e,t).href},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function S(){let e=location.hash.startsWith(`#project/`)?location.hash.slice(9):``,t=n.find(t=>t.slug===e);t?h(t.id):g(!1)}Object.assign(window,{openProject:e=>{let t=n.find(t=>t.id===e);t&&(location.hash=`project/${t.slug}`)},closeModal:g,filterProjects:c,switchTab:l}),r(),c(`all`);var C=document.getElementById(`connections-graph`);if(C){let e=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&(e.disconnect(),x(async()=>{let{initConnectionsGraph:e}=await import(`./connectionsGraph-D1oUfs25.js`);return{initConnectionsGraph:e}},[],import.meta.url).then(({initConnectionsGraph:e})=>{e(`connections-graph`,_)}).catch(()=>{C.textContent=`Граф не загрузился. Попробуйте обновить страницу.`}))},{rootMargin:`200px`});e.observe(C)}S(),window.addEventListener(`hashchange`,S),document.addEventListener(`keydown`,e=>{let t=document.getElementById(`modal`);if(!t.classList.contains(`hidden`)&&(e.key===`Escape`&&g(),e.key===`Tab`)){let n=Array.from(t.querySelectorAll(`a[href],button,iframe,[tabindex="0"]`)).filter(e=>e.getClientRects().length),r=n[0],i=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i?.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r?.focus())}}),document.querySelector(`[role="tablist"]`)?.addEventListener(`keydown`,e=>{let t=e;if(![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(t.key))return;t.preventDefault();let n=document.getElementById(`tab0`).getAttribute(`aria-selected`)===`true`?0:1,r=t.key===`Home`?0:t.key===`End`?1:1-n;l(r),document.getElementById(`tab${r}`)?.focus()});