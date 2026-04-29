(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.getElementById(`bubbles-canvas`);if(!e)return;let t=e.getContext(`2d`);if(!t)return;let n=window.innerWidth,r=window.innerHeight;e.width=n,e.height=r;let i=[],a=window.innerWidth<768?12:20,o=.12;function s(){i=[];for(let e=0;e<a;e++)i.push({x:Math.random()*n,y:Math.random()*r,radius:Math.random()*80+40,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.1,alpha:Math.random()*o,alphaSpeed:(Math.random()-.5)*.005})}s();let c,l=!0;function u(){!t||!l||(t.clearRect(0,0,n,r),i.forEach(e=>{e.x+=e.vx,e.y+=e.vy,e.x<-e.radius&&(e.x=n+e.radius),e.x>n+e.radius&&(e.x=-e.radius),e.y<-e.radius&&(e.y=r+e.radius),e.y>r+e.radius&&(e.y=-e.radius),e.alpha+=e.alphaSpeed,e.alpha>o?(e.alpha=o,e.alphaSpeed=-e.alphaSpeed):e.alpha<.02&&(e.alpha=.02,e.alphaSpeed=-e.alphaSpeed);let i=t.createRadialGradient(e.x,e.y,e.radius*.2,e.x,e.y,e.radius);i.addColorStop(0,`rgba(255, 51, 125, ${e.alpha*.6})`),i.addColorStop(1,`rgba(255, 51, 125, 0)`),t.beginPath(),t.arc(e.x,e.y,e.radius,0,Math.PI*2),t.fillStyle=i,t.fill()}),c=requestAnimationFrame(u))}function d(){n=window.innerWidth,r=window.innerHeight,e.width=n,e.height=r,s()}function f(){l=!document.hidden,l&&!c&&(c=requestAnimationFrame(u))}return u(),window.addEventListener(`resize`,d),document.addEventListener(`visibilitychange`,f),()=>{window.removeEventListener(`resize`,d),document.removeEventListener(`visibilitychange`,f),c&&cancelAnimationFrame(c)}}var t=[{name:`Управление сообществами`,icon:`users`,category:`Навыки`},{name:`Программирование на Java`,icon:`code`,category:`Навыки`},{name:`AI Промпт-инженеринг`,icon:`brain`,category:`Навыки`},{name:`Контент-Менеджмент`,icon:`megaphone`,category:`Навыки`},{name:`Брендинг сообществ`,icon:`palette`,category:`Навыки`},{name:`Видеомонтаж`,icon:`monitor`,category:`Навыки`},{name:`Дизайн`,icon:`pencil`,category:`Навыки`}],n=[{name:`Figma`,icon:`figma-logo`},{name:`IntelliJ IDEA`,icon:`code`},{name:`Adobe Photoshop`,icon:`image-square`},{name:`Adobe After Effects`,icon:`film-strip`},{name:`Adobe Premiere`,icon:`video`},{name:`Adobe Audition`,icon:`waveform`},{name:`Capcut`,icon:`scissors`},{name:`Excel / Google docs`,icon:`table`},{name:`Grok / DeepSeek / ChatGPT`,icon:`brain`}],r=[{id:1,title:`Milkshake`,slug:`milkshake`,subtitle:`Discord`,image:`./images/milkshake/cover.webp`,category:[`discord`,`code`],starred:!0,shortDesc:`Сообщество для знакомств и совместных игр`,fullContent:`
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
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Администрирование сообщества</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Разработка бота и техническая поддержка</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Поиск партнёров</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Дизайн и брендинг</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <h2 class="text-2xl font-semibold mb-3 flex items-center gap-2">
            <i class="ph-fill ph-cat text-[#FF337D] text-2xl"></i> Разработка маскота
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
    `},{id:2,title:`BetBoom Esports`,subtitle:`Discord, Организация`,slug:`betboom-esports`,image:`./images/betboom/esports/cover.webp`,category:[`discord`,`company`,`code`],starred:!0,shortDesc:`Официальный Discord BetBoom Esports`,fullContent:`
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
          <p class="text-gray-300">Периодически анонсируем сезоны, в течение которых участники могут заработать ценные призы при помощи активности. Еженедельные турниры и задания.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-trophy text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Еженедельные турниры</h2>
          </div>
          <p class="text-gray-300">Каждую неделю участники могут принять участие в турнирах с предварительной регистрацией. Наградой выступают Фрибеты. Обычно собирается до 10 команд.</p>
          <p class="text-gray-300 mt-4">Помогал в организации крупного турнира: 16+ команд и более 100 человек на пике онлайна.</p>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-heart text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Временные активности</h2>
          </div>
          <p class="text-gray-300">На праздники организовывал временные ивенты. Например, на 14 февраля участники могли писать друг другу валентинки с персонажами Dota 2.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <a href="https://discord.gg/betboom-esports" target="_blank" 
              class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
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
            <i class="ph-fill ph-lightbulb text-[#FF337D] text-2xl"></i>
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
            <i class="ph-fill ph-robot text-[#FF337D] text-2xl"></i>
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
    `},{id:4,title:`Bad Bunnies`,subtitle:`Discord`,slug:`bad-bunnies`,image:`./images/badbunnies/cover.webp`,category:[`discord`,`new`,`code`],starred:!0,shortDesc:`Пространство для свободного общения`,fullContent:`
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Bad Bunnies</h1>
        <p class="text-xl text-gray-300">Относительно новый проект, продвигающий свободное общение и совместное времяпровождение с возрастной меткой <strong>16+</strong>.</p>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-lightbulb text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Идея проекта</h2>
          </div>
          <p class="text-gray-300">Мы взяли лучшее от популярных серверов, чтобы предложить альтернативу любителям полу-токсичных проектов. Целевая аудитория — игроки League of Legends / Valorant / Dota 2 / CS2.</p>
        </div>

        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-crown text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Моя роль</h2>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Администрирование сообщества</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Разработка бота и техническая поддержка</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Поиск партнёров</li>
            <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Дизайн и брендинг</li>
          </ul>
        </div>
        
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-cat text-[#FF337D] text-2xl"></i>
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
            <i class="ph-fill ph-robot text-[#FF337D] text-2xl"></i>
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
            class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
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
    `},{id:6,title:`Genshin Forum`,subtitle:`Telegram`,slug:`genshinforum`,image:`./images/genshinforum/cover.webp`,category:[`telegram`],starred:!1,shortDesc:`Новости и находки по Genshin Impact`,fullContent:`
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
    `},{id:7,title:`Hoyozen`,subtitle:`Telegram`,slug:`hoyozen`,image:`./images/hoyozen/cover.webp`,category:[`telegram`],starred:!1,shortDesc:`Новости по игре Zenless Zone Zero`,fullContent:`
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
    `},{id:8,title:`WB BOMB`,subtitle:`Telegram`,slug:`wbbomb`,image:`./images/wbbomb/cover.webp`,category:[`telegram`],starred:!1,shortDesc:`Подборки с маркетплейсов`,fullContent:`
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
    `},{id:9,title:`#СП сервера`,subtitle:`Minecraft`,slug:`spworlds`,image:`./images/spworlds/cover.webp`,category:[`minecraft`,`other`,`code`],starred:!0,shortDesc:`Администрирование и разработка серверов у стримера Пятёрки`,fullContent:` 
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
                  <img src="./images/tiktok/deelter/thumbnail-1.webp" alt="Превью видео 1" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#FF337D] rounded-full">Смотреть →</span>
                  </div>
                </a>
              </div>
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLmN1rX/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-2.webp" alt="Превью видео 2" class="w-full h-auto rounded-lg">
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                    <span class="text-white text-sm font-medium px-3 py-1 bg-[#FF337D] rounded-full">Смотреть →</span>
                  </div>
                </a>
              </div>
              <div class="carousel-slide">
                <a href="https://vt.tiktok.com/ZSHLasLQ3/" target="_blank" class="block relative group">
                  <img src="./images/tiktok/deelter/thumbnail-3.webp" alt="Превью видео 3" class="w-full h-auto rounded-lg">
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
            class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
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
    `},{id:13,title:`YooKassa Java SDK`,subtitle:`Open Source / Библиотека`,slug:`yookassa-java-sdk`,image:`./images/yookassa/cover.webp`,category:[`opensource`,`java`,`code`,`company`],starred:!0,shortDesc:`Официально признанная SDK для интеграции`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">YooKassa Java SDK</h1>
      <p class="text-xl text-gray-300">Библиотека для создания умных платежей через сервис ЮKassa. Официально добавлена в <a href="https://yookassa.ru/developers/using-api/using-sdks#community" target="_blank" class="text-[#FF337D] hover:underline">список библиотек сообщества</a>.</p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-check-circle text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Официальное признание</h2>
        </div>
        <p class="text-gray-300 mb-4">Библиотека прошла проверку технических специалистов ЮKassa и была добавлена на <a href="https://yookassa.ru/developers/using-api/using-sdks#community" target="_blank" class="text-[#FF337D] hover:underline">страницу SDK сообщества</a>. Это подтверждает качество и безопасность кода, а также доверие со стороны платёжного сервиса.</p>
        <div class="carousel" data-carousel>
          <div class="carousel-slides">
            <div class="carousel-slide">
              <img src="./images/yookassa/official-2.webp" alt="Страница сообщества ЮKassa" class="w-full h-auto rounded-lg">
            </div>  
            <div class="carousel-slide">
              <img src="./images/yookassa/official-1.webp" alt="Письмо от ЮKassa" class="w-full h-auto rounded-lg">
            </div>
          </div>
          <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
          <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
          <div class="carousel-dots"></div>
        </div>
        <p class="text-gray-400 text-sm text-center mt-2">Письмо от ЮKassa и страница со списком библиотек сообщества</p>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Пример использования</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Инициализация API</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>private static final YooKassa YOO_KASSA = YooKassa.create(
    10000,
    "yourTokenHere"
);</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Создание платежа</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>public static Payment createPayment() throws IOException {
    return YOO_KASSA.createPayment(PaymentCreateData.builder()
        .amount(Amount.from(100, Currency.RUB))
        .description("Buy a coffee")
        .redirect("https://github.com/deelter")
        .capture(true)
        .build()
    );
}</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Получение информации о платеже</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>public static Payment getPayment(UUID paymentId) throws IOException {
    return YOO_KASSA.getPayment(paymentId);
}</code></pre>
        <p class="text-gray-300 mt-4"><strong>Работа с чеками (receipts)</strong> и <strong>возвратами (refunds)</strong> также поддерживается.</p>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-download text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Установка</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Maven</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>&lt;repository&gt;
    &lt;id&gt;jitpack.io&lt;/id&gt;
    &lt;url&gt;https://jitpack.io&lt;/url&gt;
&lt;/repository&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.github.DeelTer&lt;/groupId&gt;
    &lt;artifactId&gt;YooKassaSDK&lt;/artifactId&gt;
    &lt;version&gt;1.0.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Gradle</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>dependencyResolutionManagement {
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.DeelTer:YooKassaSDK:1.0.5'
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <a href="https://github.com/DeelTer/YooKassaSDK" target="_blank" 
          class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
          <i class="ph-fill ph-github-logo"></i> Перейти на GitHub
        </a>
      </div>
    </div>
  `},{id:14,title:`Cryptomus Java SDK`,subtitle:`Open Source / Библиотека`,slug:`cryptomus-java-sdk`,image:`./images/cryptomus/cover.webp`,category:[`opensource`,`java`,`code`,`sdk`],starred:!1,shortDesc:`SDK для интеграции криптоплатежей`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">Cryptomus Java SDK</h1>
      <p class="text-xl text-gray-300">Библиотека для работы с платёжной системой Cryptomus. Позволяет создавать счета, проверять статусы платежей и интегрировать криптовалютные переводы в Java-приложения.</p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Реальное применение</h2>
        </div>
        <p class="text-gray-300 mb-4">Библиотека используется в боевом проекте <strong class="text-[#FF337D]">Milkshake</strong> для приёма донатов через криптовалюту. Вот фрагмент реального кода из модуля оплаты:</p>
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
          <i class="ph-fill ph-rocket text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Возможности SDK</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Создание платежей с указанием суммы, валюты, времени жизни</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Получение списка платежей с фильтрацией</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Проверка статуса платежа (paid, error, waiting)</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Автоматическое обновление статусов через API</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Поддержка всех криптовалют, доступных в Cryptomus</li>
        </ul>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-download text-[#FF337D] text-2xl"></i>
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
          class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
          <i class="ph-fill ph-github-logo"></i> Перейти на GitHub
        </a>
      </div>
    </div>
  `},{id:15,title:`Lisskins Java Client`,subtitle:`Open Source / Библиотека`,slug:`lisskins-java`,image:`./images/lisskins/cover.webp`,category:[`opensource`,`java`,`code`,`sdk`,`company`],starred:!0,shortDesc:`Неофициальный клиент для LIS-SKINS API`,fullContent:`
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">Lisskins Java Client</h1>
      <p class="text-xl text-gray-300">
        Типобезопасный клиент для автоматизации работы с маркетплейсом LIS-SKINS.
        Написан по <a href="https://lis-skins.stoplight.io/docs/lis-skins/dzq78x3edc19r-api-overview" target="_blank" class="text-[#FF337D] hover:underline">официальной документации API</a>, но не является официальным SDK.
      </p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-star text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Возможности</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Полное покрытие методов API v1 (баланс, покупка, поиск, вывод, возврат)</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Синхронные и асинхронные методы</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Автоматический ретрай при 429 Too Many Requests с учётом заголовка retry-after</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Опциональный WebSocket-клиент для событий в реальном времени</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Чистые DTO с Jackson</code></li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Строковые константы для статусов, игр, ошибок и событий WebSocket</li>
        </ul>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#FF337D] text-2xl"></i>
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
          <i class="ph-fill ph-download text-[#FF337D] text-2xl"></i>
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
          class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
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
          <i class="ph-fill ph-chats text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Моя роль</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Техническая поддержка сервера в реальном времени</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Мониторинг состояния и быстрая реакция на сбои</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Оперативное устранение неполадок, чтобы стрим не прерывался</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Контроль за нагрузкой и стабильностью игрового процесса</li>
        </ul>
      </div>
      
      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-users text-[#FF337D] text-2xl"></i>
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
          <i class="ph-fill ph-check-circle text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Результат</h2>
        </div>
        <p class="text-gray-300">Стрим прошёл без серьёзных технических сбоев, сервер выдержал нагрузку, а зрители и участники остались довольны. Я получил ценный опыт работы в стрессовых условиях и подтвердил способность быстро решать проблемы на живом мероприятии.</p>
      </div>
      
      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-video text-[#FF337D] text-2xl"></i>
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
  `}];function i(){setTimeout(()=>{window.PhosphorIcons&&typeof window.PhosphorIcons.loadIcons==`function`&&window.PhosphorIcons.loadIcons()},10)}function a(){let e=document.getElementById(`skills`);e&&(e.innerHTML=`
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${t.map((e,t)=>`
        <div class="skill-card opacity-0" 
             style="animation-delay: ${t*60}ms">
          <i class="ph-fill ph-${e.icon} text-3xl text-[#FF337D] flex-shrink-0 transition-transform group-hover:scale-110"></i>
          <span class="font-medium text-gray-200 text-sm md:text-base">${e.name}</span>
        </div>
      `).join(``)}
    </div>
  `,i(),setTimeout(()=>{e.querySelectorAll(`.skill-card`).forEach(e=>{e.classList.add(`animate-fade-in-up`)})},10))}function o(){let e=document.getElementById(`skills`);e&&(e.innerHTML=`
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${n.map((e,t)=>`
        <div class="bg-[#1a1a1a] rounded-2xl p-5 flex items-center gap-4 hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-[#FF337D]/40 group opacity-0"
             style="animation-delay: ${t*60}ms">
          <i class="ph-fill ph-${e.icon} text-3xl text-[#FF337D] flex-shrink-0 transition-transform group-hover:scale-110"></i>
          <span class="font-medium text-gray-200">${e.name}</span>
        </div>
      `).join(``)}
    </div>
  `,i(),setTimeout(()=>{e.querySelectorAll(`.opacity-0`).forEach(e=>{e.classList.add(`animate-fade-in-up`)})},10))}function s(e){let t=document.getElementById(`projects-grid`);if(!t)return;let n=c(e);if(n.length===0){t.innerHTML=`<div class="col-span-full text-center text-gray-400 py-12">Проектов пока нет</div>`;return}t.innerHTML=n.map((e,t)=>`
    <div onclick="openProject(${e.id})" 
         class="group bg-[#121212] rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-[#FF337D]/30 hover:shadow-2xl hover:shadow-[#FF337D]/10 relative opacity-0"
         style="animation-delay: ${t*50}ms">
      ${e.starred?`
        <div class="absolute top-4 right-4 z-10">
          <i class="ph-fill ph-star text-[#FF337D] text-2xl drop-shadow-md"></i>
        </div>
      `:``}
      
      <div class="relative aspect-video bg-zinc-900 overflow-hidden">
        <!-- Заглушка показывается всегда, но скрывается, когда картинка загружена -->
        <div class="absolute inset-0 bg-zinc-800 animate-pulse"></div>
        <img src="${e.image}" 
             alt="${e.title}" 
             class="relative w-full h-full object-cover transition-opacity duration-500 opacity-0"
             loading="lazy"
             decoding="async"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.src='https://via.placeholder.com/1280x720/1a1a1a/ffffff?text=No+Image'; this.style.opacity='1'; this.previousElementSibling.style.display='none';">
      </div>
      
      <div class="p-5">
        <div class="text-sm text-gray-400 mb-1">${e.subtitle}</div>
        <h3 class="text-xl font-bold mb-2 line-clamp-1">${e.title}</h3>
        <p class="text-gray-400 text-sm line-clamp-2">${e.shortDesc}</p>
      </div>
    </div>
  `).join(``),i(),setTimeout(()=>{t.querySelectorAll(`.opacity-0`).forEach(e=>{e.classList.add(`animate-fade-in-up`)})},10)}function c(e){return[...e].sort((e,t)=>e.starred&&!t.starred?-1:!e.starred&&t.starred?1:e.id-t.id)}function l(e){document.querySelectorAll(`.filter-btn`).forEach(t=>{let n=t.getAttribute(`data-filter`)===e;t.classList.toggle(`active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)});let t;t=e===`all`?r:e===`starred`?r.filter(e=>e.starred===!0):r.filter(t=>t.category.includes(e)),s(t)}function u(e){document.querySelectorAll(`.tab-btn`).forEach((t,n)=>{t.classList.toggle(`active`,n===e),t.setAttribute(`aria-selected`,n===e?`true`:`false`)}),e===0?a():o()}function d(){document.querySelectorAll(`#modal .carousel`).forEach(e=>{if(e.hasAttribute(`data-initialized`))return;e.setAttribute(`data-initialized`,`true`);let t=e.querySelector(`.carousel-slides`),n=e.querySelector(`.carousel-prev`),r=e.querySelector(`.carousel-next`),i=e.querySelector(`.carousel-dots`);if(!t||!n||!r||!i)return;let a=0,o=t.children.length;if(o<=1){n.style.display=`none`,r.style.display=`none`;return}i.innerHTML=``;for(let e=0;e<o;e++){let t=document.createElement(`div`);t.classList.add(`dot`),e===0&&t.classList.add(`active`),t.addEventListener(`click`,()=>l(e)),i.appendChild(t)}let s=i.querySelectorAll(`.dot`);function c(){t.style.transform=`translateX(-${a*100}%)`,s.forEach((e,t)=>{e.classList.toggle(`active`,t===a)})}function l(e){a=(e+o)%o,c()}n.addEventListener(`click`,()=>l(a-1)),r.addEventListener(`click`,()=>l(a+1)),c()})}function f(e){let t=r.find(t=>t.id===e);if(!t)return;let n=document.getElementById(`modal`),i=document.getElementById(`modal-content`);i.innerHTML=(t.image?`
      <div class="relative w-full rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900">
        <div class="absolute inset-0 bg-zinc-800 animate-pulse"></div>
        <img src="${t.image}" 
             alt="${t.title}" 
             class="relative w-full h-full object-cover transition-opacity duration-500 opacity-0"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.style.opacity='1'; this.previousElementSibling.style.display='none'; this.src='https://via.placeholder.com/1280x720/1a1a1a/ffffff?text=No+Image';">
      </div>`:``)+t.fullContent,n.classList.remove(`hidden`),n.classList.add(`flex`),document.body.style.overflow=`hidden`,setTimeout(()=>{d()},100)}function p(){let e=document.getElementById(`modal`);if(e&&!e.classList.contains(`hidden`)){e.classList.add(`hidden`),e.classList.remove(`flex`),document.body.style.overflow=``;let t=window.location.pathname;t!==`/`&&t!==``&&window.history.pushState({},``,`/`)}}function m(){document.body.insertAdjacentHTML(`beforeend`,`
      <div id="audio-player" class="fixed bottom-4 right-4 z-50">
        <button id="audio-toggle"
                class="bg-[#1a1a1a] hover:bg-[#FF337D] w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border border-white/10 hover:border-[#FF337D]/50">
          <i id="audio-icon" class="ph-fill ph-music-note text-2xl"></i>
        </button>
      </div>
    `);let e=null,t=null,n=!1,r=!1,i=document.getElementById(`audio-toggle`),a=document.getElementById(`audio-icon`);function o(){if(!r)try{t=new Audio,t.src=`/music/lofi.mp3`,t.loop=!0,t.volume=.15,e=new(window.AudioContext||window.webkitAudioContext),t.addEventListener(`error`,()=>{console.error(`Не удалось загрузить музыку`),a&&(a.className=`ph-fill ph-warning text-xl`)}),r=!0}catch(e){console.error(`Ошибка инициализации аудио:`,e)}}async function s(){if(!(!t&&(o(),!t)))try{n?(t.pause(),a.className=`ph-fill ph-music-note text-xl`,n=!1):(e?.state===`suspended`&&await e.resume(),await t.play(),a.className=`ph-fill ph-pause text-xl`,n=!0)}catch(e){console.error(`Ошибка воспроизведения:`,e)}}return o(),i?.addEventListener(`click`,s),document.addEventListener(`visibilitychange`,()=>{document.hidden&&n&&t?t.pause():!document.hidden&&n&&t&&t.play().catch(()=>{})}),()=>{t&&t.pause()}}var h={nodes:[{id:`roman`,label:`Я`,category:`me`,image:`./images/avatars/me.webp`},{id:`kirill`,label:`Кирилл (NeverCookFirst)`,category:`friend`,image:`./images/avatars/nevercook.webp`},{id:`alenhay`,label:`AlenHay`,category:`friend`,description:`Сооснователь сообщества Dislace`,image:`./images/avatars/alenhay.webp`},{id:`mike_lisetskiy`,label:`Михаил Лисецкий`,category:`friend`,description:`Директор фестивалей Стримфест и GAMEДНИ, медиа и ивент-продюсер`,image:`./images/avatars/mike_lisetsky.webp`},{id:`ultimate`,label:`Ultimate.gg`,category:`agency`,image:`./images/avatars/ultimate.webp`,description:`Digital-агентство, продакшн в гейминге, стриминге и киберспорте`},{id:`vlad_shain`,label:`Влад Шейн`,category:`friend`,description:`Аниматор, делал ролики для крупных ютуберов`,image:`./images/avatars/vlad_shain.webp`},{id:`dislace`,label:`Dislace`,category:`discord`,description:`Закрытое сообщество для разработчиков, авторов контента`,image:`./images/avatars/dislace.webp`},{id:`betboom_esports`,label:`BetBoom Esports`,category:`company`,image:`./images/avatars/betboom_esports.webp`},{id:`betboom`,label:`BetBoom`,category:`company`,description:`Букмекерская компания`,image:`./images/avatars/betboom.webp`},{id:`fonbet`,label:`Fonbet`,category:`company`,description:`Букмекерская компания`,image:`./images/avatars/fonbet.webp`},{id:`betboom_headsmm`,label:`Head SMM BetBoom Esports`,category:`betboom`,description:`Администратор Telegram каналов по Dota 2 & CS2`},{id:`donatov`,label:`Donatov.net`,category:`company`,image:`./images/avatars/donatov.webp`,description:`Магазин цифровых товаров`},{id:`gamedni`,label:`GAMEДни`,category:`company`,image:`./images/avatars/gamedni.webp`,description:`Фестиваль по видеоиграм`},{id:`tnt_online`,label:`TNT_online`,category:`company`,description:`ТНТ в мире стриминга и гейминга`,image:`./images/avatars/tnt_online.webp`},{id:`5opka`,label:`Пятёрка`,category:`streamer`,image:`./images/avatars/5opka.webp`,description:`Стример`},{id:`yulik`,label:`Юлик`,category:`streamer`,image:`./images/avatars/yulik.webp`,description:`Ютубер, стример`},{id:`vadimchik`,label:`Вадимчик`,category:`friend`,description:`Организатор мероприятий Donatov.net`,image:`./images/avatars/vadimchik.webp`},{id:`studio115`,label:`Студия 115`,category:`agency`,image:`./images/avatars/studio115.webp`,description:`Проектный менеджер и коммуникация, совместные проекты с BetBoom и Fonbet`},{id:`designers`,label:`Дизайнеры & художники`,category:`freelance`},{id:`motion_video`,label:`Моушены & видеомонтажёры`,category:`freelance`},{id:`programmers`,label:`Программисты`,category:`freelance`},{id:`producers`,label:`Продюсеры`,category:`freelance`},{id:`telegram_admins`,label:`Telegram админы`,category:`tg`,image:`./images/avatars/telegram.webp`},{id:`discord_admins`,label:`Discord админы`,category:`discord`,image:`./images/avatars/discord.webp`},{id:`minecraft_admins`,label:`Minecraft админы`,category:`minecraft`,image:`./images/avatars/minecraft.webp`},{id:`event_orgs`,label:`Организаторы ивентов`,category:`event`},{id:`shop_admins`,label:`Владельцы цифровых магазинов`,category:`discord`}],links:[{source:`roman`,target:`kirill`},{source:`roman`,target:`alenhay`},{source:`roman`,target:`mike_lisetskiy`},{source:`roman`,target:`betboom_esports`},{source:`roman`,target:`betboom_headsmm`},{source:`roman`,target:`5opka`},{source:`roman`,target:`yulik`},{source:`roman`,target:`studio115`},{source:`roman`,target:`vadimchik`},{source:`roman`,target:`vlad_shain`},{source:`roman`,target:`gamedni`},{source:`roman`,target:`dislace`},{source:`roman`,target:`designers`},{source:`roman`,target:`motion_video`},{source:`roman`,target:`programmers`},{source:`roman`,target:`producers`},{source:`roman`,target:`telegram_admins`},{source:`roman`,target:`discord_admins`},{source:`roman`,target:`minecraft_admins`},{source:`roman`,target:`event_orgs`},{source:`kirill`,target:`ultimate`},{source:`kirill`,target:`mike_lisetskiy`},{source:`kirill`,target:`dislace`},{source:`alenhay`,target:`dislace`},{source:`betboom_esports`,target:`betboom_headsmm`},{source:`betboom_headsmm`,target:`telegram_admins`},{source:`ultimate`,target:`betboom_esports`},{source:`ultimate`,target:`betboom`},{source:`ultimate`,target:`fonbet`},{source:`studio115`,target:`kirill`},{source:`studio115`,target:`ultimate`},{source:`studio115`,target:`betboom_esports`},{source:`studio115`,target:`betboom`},{source:`studio115`,target:`fonbet`},{source:`studio115`,target:`alenhay`},{source:`donatov`,target:`telegram_admins`},{source:`donatov`,target:`shop_admins`},{source:`donatov`,target:`vadimchik`},{source:`donatov`,target:`gamedni`},{source:`vadimchik`,target:`telegram_admins`},{source:`vadimchik`,target:`gamedni`},{source:`mike_lisetskiy`,target:`gamedni`},{source:`mike_lisetskiy`,target:`vadimchik`},{source:`gamedni`,target:`vadimchik`},{source:`5opka`,target:`shop_admins`},{source:`5opka`,target:`minecraft_admins`},{source:`5opka`,target:`tnt_online`},{source:`vlad_shain`,target:`5opka`},{source:`dislace`,target:`discord_admins`},{source:`discord_admins`,target:`shop_admins`},{source:`minecraft_admins`,target:`shop_admins`},{source:`telegram_admins`,target:`shop_admins`}]};function g(e,t){var n,r=1;e??=0,t??=0;function i(){var i,a=n.length,o,s=0,c=0;for(i=0;i<a;++i)o=n[i],s+=o.x,c+=o.y;for(s=(s/a-e)*r,c=(c/a-t)*r,i=0;i<a;++i)o=n[i],o.x-=s,o.y-=c}return i.initialize=function(e){n=e},i.x=function(t){return arguments.length?(e=+t,i):e},i.y=function(e){return arguments.length?(t=+e,i):t},i.strength=function(e){return arguments.length?(r=+e,i):r},i}function _(e){let t=+this._x.call(null,e),n=+this._y.call(null,e);return v(this.cover(t,n),t,n,e)}function v(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,a=e._root,o={data:r},s=e._x0,c=e._y0,l=e._x1,u=e._y1,d,f,p,m,h,g,_,v;if(!a)return e._root=o,e;for(;a.length;)if((h=t>=(d=(s+l)/2))?s=d:l=d,(g=n>=(f=(c+u)/2))?c=f:u=f,i=a,!(a=a[_=g<<1|h]))return i[_]=o,e;if(p=+e._x.call(null,a.data),m=+e._y.call(null,a.data),t===p&&n===m)return o.next=a,i?i[_]=o:e._root=o,e;do i=i?i[_]=[,,,,]:e._root=[,,,,],(h=t>=(d=(s+l)/2))?s=d:l=d,(g=n>=(f=(c+u)/2))?c=f:u=f;while((_=g<<1|h)==(v=(m>=f)<<1|p>=d));return i[v]=a,i[_]=o,e}function y(e){var t,n,r=e.length,i,a,o=Array(r),s=Array(r),c=1/0,l=1/0,u=-1/0,d=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(a=+this._y.call(null,t))||(o[n]=i,s[n]=a,i<c&&(c=i),i>u&&(u=i),a<l&&(l=a),a>d&&(d=a));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),n=0;n<r;++n)v(this,o[n],s[n],e[n]);return this}function b(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,a=(r=Math.floor(t))+1;else{for(var o=i-n||1,s=this._root,c,l;n>e||e>=i||r>t||t>=a;)switch(l=(t<r)<<1|e<n,c=[,,,,],c[l]=s,s=c,o*=2,l){case 0:i=n+o,a=r+o;break;case 1:n=i-o,a=r+o;break;case 2:i=n+o,r=a-o;break;case 3:n=i-o,r=a-o;break}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this}function x(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function ee(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function S(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function te(e,t,n){var r,i=this._x0,a=this._y0,o,s,c,l,u=this._x1,d=this._y1,f=[],p=this._root,m,h;for(p&&f.push(new S(p,i,a,u,d)),n==null?n=1/0:(i=e-n,a=t-n,u=e+n,d=t+n,n*=n);m=f.pop();)if(!(!(p=m.node)||(o=m.x0)>u||(s=m.y0)>d||(c=m.x1)<i||(l=m.y1)<a))if(p.length){var g=(o+c)/2,_=(s+l)/2;f.push(new S(p[3],g,_,c,l),new S(p[2],o,_,g,l),new S(p[1],g,s,c,_),new S(p[0],o,s,g,_)),(h=(t>=_)<<1|e>=g)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-h],f[f.length-1-h]=m)}else{var v=e-+this._x.call(null,p.data),y=t-+this._y.call(null,p.data),b=v*v+y*y;if(b<n){var x=Math.sqrt(n=b);i=e-x,a=t-x,u=e+x,d=t+x,r=p.data}}return r}function ne(e){if(isNaN(u=+this._x.call(null,e))||isNaN(d=+this._y.call(null,e)))return this;var t,n=this._root,r,i,a,o=this._x0,s=this._y0,c=this._x1,l=this._y1,u,d,f,p,m,h,g,_;if(!n)return this;if(n.length)for(;;){if((m=u>=(f=(o+c)/2))?o=f:c=f,(h=d>=(p=(s+l)/2))?s=p:l=p,t=n,!(n=n[g=h<<1|m]))return this;if(!n.length)break;(t[g+1&3]||t[g+2&3]||t[g+3&3])&&(r=t,_=g)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):t?(a?t[g]=a:delete t[g],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[_]=n:this._root=n),this):(this._root=a,this)}function re(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function ie(){return this._root}function ae(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function oe(e){var t=[],n,r=this._root,i,a,o,s,c;for(r&&t.push(new S(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,a=n.x0,o=n.y0,s=n.x1,c=n.y1)&&r.length){var l=(a+s)/2,u=(o+c)/2;(i=r[3])&&t.push(new S(i,l,u,s,c)),(i=r[2])&&t.push(new S(i,a,u,l,c)),(i=r[1])&&t.push(new S(i,l,o,s,u)),(i=r[0])&&t.push(new S(i,a,o,l,u))}return this}function se(e){var t=[],n=[],r;for(this._root&&t.push(new S(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var a,o=r.x0,s=r.y0,c=r.x1,l=r.y1,u=(o+c)/2,d=(s+l)/2;(a=i[0])&&t.push(new S(a,o,s,u,d)),(a=i[1])&&t.push(new S(a,u,s,c,d)),(a=i[2])&&t.push(new S(a,o,d,u,l)),(a=i[3])&&t.push(new S(a,u,d,c,l))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function ce(e){return e[0]}function le(e){return arguments.length?(this._x=e,this):this._x}function C(e){return e[1]}function w(e){return arguments.length?(this._y=e,this):this._y}function T(e,t,n){var r=new E(t??ce,n??C,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function E(e,t,n,r,i,a){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function D(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var O=T.prototype=E.prototype;O.copy=function(){var e=new E(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=D(t),e;for(n=[{source:t,target:e._root=[,,,,]}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=[,,,,]}):t.target[i]=D(r));return e},O.add=_,O.addAll=y,O.cover=b,O.data=x,O.extent=ee,O.find=te,O.remove=ne,O.removeAll=re,O.root=ie,O.size=ae,O.visit=oe,O.visitAfter=se,O.x=le,O.y=w;function k(e){return function(){return e}}function A(e){return(e()-.5)*1e-6}function ue(e){return e.x+e.vx}function de(e){return e.y+e.vy}function fe(e){var t,n,r,i=1,a=1;typeof e!=`function`&&(e=k(e==null?1:+e));function o(){for(var e,o=t.length,c,l,u,d,f,p,m=0;m<a;++m)for(c=T(t,ue,de).visitAfter(s),e=0;e<o;++e)l=t[e],f=n[l.index],p=f*f,u=l.x+l.vx,d=l.y+l.vy,c.visit(h);function h(e,t,n,a,o){var s=e.data,c=e.r,m=f+c;if(s){if(s.index>l.index){var h=u-s.x-s.vx,g=d-s.y-s.vy,_=h*h+g*g;_<m*m&&(h===0&&(h=A(r),_+=h*h),g===0&&(g=A(r),_+=g*g),_=(m-(_=Math.sqrt(_)))/_*i,l.vx+=(h*=_)*(m=(c*=c)/(p+c)),l.vy+=(g*=_)*m,s.vx-=h*(m=1-m),s.vy-=g*m)}return}return t>u+m||a<u-m||n>d+m||o<d-m}}function s(e){if(e.data)return e.r=n[e.data.index];for(var t=e.r=0;t<4;++t)e[t]&&e[t].r>e.r&&(e.r=e[t].r)}function c(){if(t){var r,i=t.length,a;for(n=Array(i),r=0;r<i;++r)a=t[r],n[a.index]=+e(a,r,t)}}return o.initialize=function(e,n){t=e,r=n,c()},o.iterations=function(e){return arguments.length?(a=+e,o):a},o.strength=function(e){return arguments.length?(i=+e,o):i},o.radius=function(t){return arguments.length?(e=typeof t==`function`?t:k(+t),c(),o):e},o}function pe(e){return e.index}function j(e,t){var n=e.get(t);if(!n)throw Error(`node not found: `+t);return n}function me(e){var t=pe,n=d,r,i=k(30),a,o,s,c,l,u=1;e??=[];function d(e){return 1/Math.min(s[e.source.index],s[e.target.index])}function f(t){for(var n=0,i=e.length;n<u;++n)for(var o=0,s,d,f,p,m,h,g;o<i;++o)s=e[o],d=s.source,f=s.target,p=f.x+f.vx-d.x-d.vx||A(l),m=f.y+f.vy-d.y-d.vy||A(l),h=Math.sqrt(p*p+m*m),h=(h-a[o])/h*t*r[o],p*=h,m*=h,f.vx-=p*(g=c[o]),f.vy-=m*g,d.vx+=p*(g=1-g),d.vy+=m*g}function p(){if(o){var n,i=o.length,l=e.length,u=new Map(o.map((e,n)=>[t(e,n,o),e])),d;for(n=0,s=Array(i);n<l;++n)d=e[n],d.index=n,typeof d.source!=`object`&&(d.source=j(u,d.source)),typeof d.target!=`object`&&(d.target=j(u,d.target)),s[d.source.index]=(s[d.source.index]||0)+1,s[d.target.index]=(s[d.target.index]||0)+1;for(n=0,c=Array(l);n<l;++n)d=e[n],c[n]=s[d.source.index]/(s[d.source.index]+s[d.target.index]);r=Array(l),m(),a=Array(l),h()}}function m(){if(o)for(var t=0,i=e.length;t<i;++t)r[t]=+n(e[t],t,e)}function h(){if(o)for(var t=0,n=e.length;t<n;++t)a[t]=+i(e[t],t,e)}return f.initialize=function(e,t){o=e,l=t,p()},f.links=function(t){return arguments.length?(e=t,p(),f):e},f.id=function(e){return arguments.length?(t=e,f):t},f.iterations=function(e){return arguments.length?(u=+e,f):u},f.strength=function(e){return arguments.length?(n=typeof e==`function`?e:k(+e),m(),f):n},f.distance=function(e){return arguments.length?(i=typeof e==`function`?e:k(+e),h(),f):i},f}var he={value:()=>{}};function M(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new N(n)}function N(e){this._=e}function ge(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}N.prototype=M.prototype={constructor:N,on:function(e,t){var n=this._,r=ge(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=_e(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=P(n[i],e.name,t);else if(t==null)for(i in n)n[i]=P(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new N(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function _e(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function P(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=he,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var F=0,I=0,L=0,R=1e3,z,B,V=0,H=0,U=0,W=typeof performance==`object`&&performance.now?performance:Date,G=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function K(){return H||=(G(ve),W.now()+U)}function ve(){H=0}function q(){this._call=this._time=this._next=null}q.prototype=J.prototype={constructor:q,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?K():+n)+(t==null?0:+t),!this._next&&B!==this&&(B?B._next=this:z=this,B=this),this._call=e,this._time=n,X()},stop:function(){this._call&&(this._call=null,this._time=1/0,X())}};function J(e,t,n){var r=new q;return r.restart(e,t,n),r}function ye(){K(),++F;for(var e=z,t;e;)(t=H-e._time)>=0&&e._call.call(void 0,t),e=e._next;--F}function Y(){H=(V=W.now())+U,F=I=0;try{ye()}finally{F=0,xe(),H=0}}function be(){var e=W.now(),t=e-V;t>R&&(U-=t,V=e)}function xe(){for(var e,t=z,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:z=n);B=e,X(r)}function X(e){F||(I&&=clearTimeout(I),e-H>24?(e<1/0&&(I=setTimeout(Y,e-W.now()-U)),L&&=clearInterval(L)):(L||=(V=W.now(),setInterval(be,R)),F=1,G(Y)))}var Se=1664525,Z=1013904223,Q=4294967296;function Ce(){let e=1;return()=>(e=(Se*e+Z)%Q)/Q}function we(e){return e.x}function Te(e){return e.y}var Ee=10,De=Math.PI*(3-Math.sqrt(5));function Oe(e){var t,n=1,r=.001,i=1-r**(1/300),a=0,o=.6,s=new Map,c=J(d),l=M(`tick`,`end`),u=Ce();e??=[];function d(){f(),l.call(`tick`,t),n<r&&(c.stop(),l.call(`end`,t))}function f(r){var c,l=e.length,u;r===void 0&&(r=1);for(var d=0;d<r;++d)for(n+=(a-n)*i,s.forEach(function(e){e(n)}),c=0;c<l;++c)u=e[c],u.fx==null?u.x+=u.vx*=o:(u.x=u.fx,u.vx=0),u.fy==null?u.y+=u.vy*=o:(u.y=u.fy,u.vy=0);return t}function p(){for(var t=0,n=e.length,r;t<n;++t){if(r=e[t],r.index=t,r.fx!=null&&(r.x=r.fx),r.fy!=null&&(r.y=r.fy),isNaN(r.x)||isNaN(r.y)){var i=Ee*Math.sqrt(.5+t),a=t*De;r.x=i*Math.cos(a),r.y=i*Math.sin(a)}(isNaN(r.vx)||isNaN(r.vy))&&(r.vx=r.vy=0)}}function m(t){return t.initialize&&t.initialize(e,u),t}return p(),t={tick:f,restart:function(){return c.restart(d),t},stop:function(){return c.stop(),t},nodes:function(n){return arguments.length?(e=n,p(),s.forEach(m),t):e},alpha:function(e){return arguments.length?(n=+e,t):n},alphaMin:function(e){return arguments.length?(r=+e,t):r},alphaDecay:function(e){return arguments.length?(i=+e,t):+i},alphaTarget:function(e){return arguments.length?(a=+e,t):a},velocityDecay:function(e){return arguments.length?(o=1-e,t):1-o},randomSource:function(e){return arguments.length?(u=e,s.forEach(m),t):u},force:function(e,n){return arguments.length>1?(n==null?s.delete(e):s.set(e,m(n)),t):s.get(e)},find:function(t,n,r){var i=0,a=e.length,o,s,c,l,u;for(r==null?r=1/0:r*=r,i=0;i<a;++i)l=e[i],o=t-l.x,s=n-l.y,c=o*o+s*s,c<r&&(u=l,r=c);return u},on:function(e,n){return arguments.length>1?(l.on(e,n),t):l.on(e)}}}function ke(){var e,t,n,r,i=k(-30),a,o=1,s=1/0,c=.81;function l(n){var i,a=e.length,o=T(e,we,Te).visitAfter(d);for(r=n,i=0;i<a;++i)t=e[i],o.visit(f)}function u(){if(e){var t,n=e.length,r;for(a=Array(n),t=0;t<n;++t)r=e[t],a[r.index]=+i(r,t,e)}}function d(e){var t=0,n,r,i=0,o,s,c;if(e.length){for(o=s=c=0;c<4;++c)(n=e[c])&&(r=Math.abs(n.value))&&(t+=n.value,i+=r,o+=r*n.x,s+=r*n.y);e.x=o/i,e.y=s/i}else{n=e,n.x=n.data.x,n.y=n.data.y;do t+=a[n.data.index];while(n=n.next)}e.value=t}function f(e,i,l,u){if(!e.value)return!0;var d=e.x-t.x,f=e.y-t.y,p=u-i,m=d*d+f*f;if(p*p/c<m)return m<s&&(d===0&&(d=A(n),m+=d*d),f===0&&(f=A(n),m+=f*f),m<o&&(m=Math.sqrt(o*m)),t.vx+=d*e.value*r/m,t.vy+=f*e.value*r/m),!0;if(!(e.length||m>=s)){(e.data!==t||e.next)&&(d===0&&(d=A(n),m+=d*d),f===0&&(f=A(n),m+=f*f),m<o&&(m=Math.sqrt(o*m)));do e.data!==t&&(p=a[e.data.index]*r/m,t.vx+=d*p,t.vy+=f*p);while(e=e.next)}}return l.initialize=function(t,r){e=t,n=r,u()},l.strength=function(e){return arguments.length?(i=typeof e==`function`?e:k(+e),u(),l):i},l.distanceMin=function(e){return arguments.length?(o=e*e,l):Math.sqrt(o)},l.distanceMax=function(e){return arguments.length?(s=e*e,l):Math.sqrt(s)},l.theta=function(e){return arguments.length?(c=e*e,l):Math.sqrt(c)},l}function Ae(e,t){let n=document.getElementById(e);if(!n)return;let r=document.createElement(`canvas`);r.className=`w-full rounded-3xl border border-white/10 bg-[#0a0a0a]`,r.style.touchAction=`none`,n.appendChild(r);let i=r.getContext(`2d`,{alpha:!0}),a=0,o=0;function s(){a=n.clientWidth,o=Math.max(520,Math.min(700,window.innerHeight*.6)),r.width=a,r.height=o}s();let c=JSON.parse(JSON.stringify(t.nodes)),l=JSON.parse(JSON.stringify(t.links)),u=new Map;c.forEach(e=>{if(e.image){let t=new Image;t.src=e.image,t.onload=()=>u.set(e.id,t),t.onerror=()=>console.warn(`Не удалось загрузить аватарку: ${e.image}`)}});let d=Oe(c).force(`link`,me(l).id(e=>e.id).distance(128)).force(`charge`,ke().strength(-360)).force(`center`,g(a/2,o/2)).force(`collision`,fe().radius(e=>e.category===`me`?42:28)),f={me:`#FF337D`,agency:`#a78bfa`,company:`#60a5fa`,betboom:`#f43f5e`,streamer:`#34d399`,friend:`#fb923c`,freelance:`#eab308`,tg:`#c084fc`,discord:`#a855f7`,minecraft:`#22c55e`,event:`#f59e0b`,default:`#94a3b8`},p=null;r.addEventListener(`mousemove`,e=>{let t=r.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;p=c.find(e=>{let t=e.x-n,r=e.y-i,a=e.category===`me`?34:e.category===`freelance`||e.category===`tg`||e.category===`discord`||e.category===`event`?19:26;return t*t+r*r<=a*a}),p&&m()}),r.addEventListener(`mouseleave`,()=>{p=null,m()});function m(){if(i.clearRect(0,0,a,o),i.strokeStyle=`rgba(255, 255, 255, 0.28)`,i.lineWidth=2.2,l.forEach(e=>{let t=c.find(t=>t.id===e.source)??e.source,n=c.find(t=>t.id===e.target)??e.target;i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(n.x,n.y),i.stroke()}),c.forEach(e=>{let t=e.category===`me`,n=t?34:e.category===`freelance`||e.category===`tg`||e.category===`discord`||e.category===`event`?19:26,r=e.x,a=e.y;i.shadowColor=t?`#FF337D`:`#64748b`,i.shadowBlur=t?30:14;let o=e.image&&u.has(e.id),s=o?u.get(e.id):null;if(o&&s){i.save(),i.beginPath(),i.arc(r,a,n,0,Math.PI*2),i.clip();let e=s.width/s.height,o=n*2,c=n*2;e>1?o=c*e:c=o/e,i.drawImage(s,r-o/2,a-c/2,o,c),i.restore(),i.strokeStyle=t?`#ffffff`:`rgba(255,255,255,0.6)`,i.lineWidth=t?4:2.5,i.beginPath(),i.arc(r,a,n+1,0,Math.PI*2),i.stroke()}else i.fillStyle=f[e.category||`default`]||`#94a3b8`,i.beginPath(),i.arc(r,a,n,0,Math.PI*2),i.fill(),t&&(i.strokeStyle=`#ffffff`,i.lineWidth=4,i.beginPath(),i.arc(r,a,n+5,0,Math.PI*2),i.stroke());i.shadowBlur=0,i.fillStyle=`#f1f5f9`,i.font=t?`600 15px system-ui, -apple-system, sans-serif`:`500 13px system-ui, -apple-system, sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(e.label,r,a+n+28)}),p&&p.description){let e=p.description,t=p.x,n=p.y,r=p.category===`me`?34:p.category===`freelance`||p.category===`tg`||p.category===`discord`||p.category===`event`?19:26;i.font=`500 12px system-ui, -apple-system, sans-serif`;let o=i.measureText(e).width+20,s=t+r+10,c=n-r-10-30;s+o>a&&(s=t-o-r-10),c<5&&(c=n+r+10),i.fillStyle=`rgba(30, 30, 30, 0.95)`,i.strokeStyle=`rgba(255, 255, 255, 0.3)`,i.lineWidth=1,i.beginPath(),i.roundRect(s,c,o,30,8),i.fill(),i.stroke(),i.fillStyle=`#ffffff`,i.textAlign=`left`,i.textBaseline=`middle`,i.fillText(e,s+10,c+30/2)}}d.on(`tick`,m);let h=null;r.addEventListener(`pointerdown`,e=>{let t=r.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;h=c.find(e=>{let t=e.x-n,r=e.y-i;return t*t+r*r<2025}),h&&(e.preventDefault(),d.alphaTarget(.3).restart(),h.fx=n,h.fy=i)}),window.addEventListener(`pointermove`,e=>{if(!h)return;let t=r.getBoundingClientRect();h.fx=e.clientX-t.left,h.fy=e.clientY-t.top}),window.addEventListener(`pointerup`,()=>{h&&(h.fx=null,h.fy=null,h=null,d.alphaTarget(0))}),new ResizeObserver(()=>{s(),d.force(`center`,g(a/2,o/2)),d.alpha(.3).restart()}).observe(n),setTimeout(()=>d.alpha(1).restart(),100)}function je(e){return r.find(t=>t.slug===e)}function Me(e){let t=`${window.location.origin}/${e.slug}`;window.history.pushState({projectSlug:e.slug},``,t)}function $(){let e=window.location.pathname.slice(1);if(e){let t=je(e);t?f(t.id):p()}else p()}document.addEventListener(`DOMContentLoaded`,()=>{e(),a(),l(`all`),m(),Ae(`connections-graph`,h),$(),window.addEventListener(`popstate`,$),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&p()})}),window.openProject=e=>{let t=r.find(t=>t.id===e);t&&(f(e),Me(t))},window.closeModal=p,window.filterProjects=l,window.switchTab=u,window.toggleContactMenu=e=>{e.stopImmediatePropagation();let t=document.getElementById(`contact-menu`),n=document.getElementById(`contact-btn`);!t||!n||(t.classList.contains(`hidden`)?(t.classList.remove(`hidden`),n.classList.add(`!bg-gray-200`,`shadow-md`)):(t.classList.add(`hidden`),n.classList.remove(`!bg-gray-200`,`shadow-md`)))},document.addEventListener(`click`,e=>{let t=document.getElementById(`contact-menu`),n=document.getElementById(`contact-btn`);if(t&&n){let r=e.target;!t.contains(r)&&r!==n&&!n.contains(r)&&(t.classList.add(`hidden`),n.classList.remove(`!bg-gray-200`,`shadow-md`))}});