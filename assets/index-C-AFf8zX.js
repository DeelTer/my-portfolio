(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.getElementById(`bubbles-canvas`);if(!e)return;let t=e.getContext(`2d`);if(!t)return;let n=window.innerWidth,r=window.innerHeight;e.width=n,e.height=r;let i=[],a=window.innerWidth<768?12:20,o=.12;function s(){i=[];for(let e=0;e<a;e++)i.push({x:Math.random()*n,y:Math.random()*r,radius:Math.random()*80+40,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.1,alpha:Math.random()*o,alphaSpeed:(Math.random()-.5)*.005})}s();let c,l=!0;function u(){!t||!l||(t.clearRect(0,0,n,r),i.forEach(e=>{e.x+=e.vx,e.y+=e.vy,e.x<-e.radius&&(e.x=n+e.radius),e.x>n+e.radius&&(e.x=-e.radius),e.y<-e.radius&&(e.y=r+e.radius),e.y>r+e.radius&&(e.y=-e.radius),e.alpha+=e.alphaSpeed,e.alpha>o?(e.alpha=o,e.alphaSpeed=-e.alphaSpeed):e.alpha<.02&&(e.alpha=.02,e.alphaSpeed=-e.alphaSpeed);let i=t.createRadialGradient(e.x,e.y,e.radius*.2,e.x,e.y,e.radius);i.addColorStop(0,`rgba(255, 51, 125, ${e.alpha*.6})`),i.addColorStop(1,`rgba(255, 51, 125, 0)`),t.beginPath(),t.arc(e.x,e.y,e.radius,0,Math.PI*2),t.fillStyle=i,t.fill()}),c=requestAnimationFrame(u))}function d(){n=window.innerWidth,r=window.innerHeight,e.width=n,e.height=r,s()}function f(){l=!document.hidden,l&&!c&&(c=requestAnimationFrame(u))}return u(),window.addEventListener(`resize`,d),document.addEventListener(`visibilitychange`,f),()=>{window.removeEventListener(`resize`,d),document.removeEventListener(`visibilitychange`,f),c&&cancelAnimationFrame(c)}}var t=[{name:`Управление сообществами`,icon:`users`,category:`Навыки`},{name:`Программирование на Java`,icon:`code`,category:`Навыки`},{name:`AI Промпт-инженер`,icon:`brain`,category:`Навыки`},{name:`SMM-Менеджмент`,icon:`megaphone`,category:`Навыки`},{name:`Брендинг сообществ`,icon:`palette`,category:`Навыки`},{name:`Видеомонтаж`,icon:`monitor`,category:`Навыки`},{name:`Дизайн`,icon:`pencil`,category:`Навыки`}],n=[{name:`Figma`,icon:`figma-logo`},{name:`IntelliJ IDEA`,icon:`code`},{name:`Adobe Photoshop`,icon:`image-square`},{name:`Adobe After Effects`,icon:`film-strip`},{name:`Adobe Premiere`,icon:`video`},{name:`Adobe Audition`,icon:`waveform`},{name:`Capcut`,icon:`scissors`},{name:`Excel / Google docs`,icon:`table`},{name:`Grok / DeepSeek / ChatGPT`,icon:`brain`}],r=[{id:1,title:`Milkshake`,subtitle:`Discord`,image:`./images/milkshake/cover.png`,category:[`discord`],starred:!0,shortDesc:`Сообщество для знакомств и совместных игр`,fullContent:`
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
    `},{id:2,title:`BetBoom Esports`,subtitle:`Discord, Организация`,image:`./images/betboom_esports/cover.jpg`,category:[`discord`],starred:!0,shortDesc:`Официальный Discord BetBoom Esports`,fullContent:`
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
        
        <!-- Карусель больших турниров -->
        <div class="bg-[#1f1f1f] rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="ph-fill ph-trophy text-[#FF337D] text-2xl"></i>
            <h2 class="text-2xl font-semibold">Большие турниры</h2>
          </div>
          <p class="text-gray-300 mb-4">Пока проводились всего один раз, но было собрано много команд и зрителей, мероприятие прошло отлично.</p>
          
          <div class="carousel" data-carousel>
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./images/betboom_esports/tournament-1.png" alt="Турнир 1">
              </div>
              <div class="carousel-slide">
                <img src="./images/betboom_esports/tournament-2.jpg" alt="Турнир 2">
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
    `},{id:3,title:`GIF Discord`,subtitle:`Telegram`,image:`./images/artpix/cover.jpg`,category:[`telegram`],starred:!0,shortDesc:`Готовые анимированные оформления для профиля`,fullContent:`
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
    `},{id:4,title:`Bad Bunnies`,subtitle:`Discord`,image:`./images/badbunnies/cover.jpg`,category:[`discord`,`new`],starred:!0,shortDesc:`Пространство для свободного общения`,fullContent:`
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
    `},{id:5,title:`Daily Furina`,subtitle:`Telegram`,image:`./images/dailyfurina/cover.png`,category:[`telegram`],starred:!1,shortDesc:`Творческий канал по персонажу из Genshin Impact`,fullContent:`
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
    `},{id:6,title:`Genshin Forum`,subtitle:`Telegram`,image:`./images/genshinforum/cover.png`,category:[`telegram`],starred:!1,shortDesc:`Новости и находки по Genshin Impact`,fullContent:`
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
    `},{id:7,title:`Hoyozen`,subtitle:`Telegram`,image:`./images/hoyozen/cover.png`,category:[`telegram`],starred:!1,shortDesc:`Новости по игре Zenless Zone Zero`,fullContent:`
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
    `},{id:8,title:`WB BOMB`,subtitle:`Telegram`,image:`./images/wbbomb/cover.png`,category:[`telegram`],starred:!1,shortDesc:`Подборки с маркетплейсов`,fullContent:`
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
    `},{id:9,title:`#СП сервера`,subtitle:`Minecraft`,image:`./images/spworlds/cover.png`,category:[`minecraft`,`other`],starred:!0,shortDesc:`Администрирование и разработка серверов у стримера Пятёрки`,fullContent:` 
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
    `},{id:11,title:`Пляжный`,subtitle:`TikTok`,image:`./images/tiktok/deelter/cover.jpg`,category:[`tiktok`,`other`],starred:!0,shortDesc:`Контент по игре Minecraft, инструкции для VR`,fullContent:`
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
        <img src="${e.image}" 
             alt="${e.title}" 
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
             loading="lazy"
             decoding="async"
             onerror="this.src='https://via.placeholder.com/1280x720/1a1a1a/ffffff?text=No+Image'">
      </div>
      
      <div class="p-5">
        <div class="text-sm text-gray-400 mb-1">${e.subtitle}</div>
        <h3 class="text-xl font-bold mb-2 line-clamp-1">${e.title}</h3>
        <p class="text-gray-400 text-sm line-clamp-2">${e.shortDesc}</p>
      </div>
    </div>
  `).join(``),i(),setTimeout(()=>{t.querySelectorAll(`.opacity-0`).forEach(e=>{e.classList.add(`animate-fade-in-up`)})},10)}function c(e){return[...e].sort((e,t)=>e.starred&&!t.starred?-1:!e.starred&&t.starred?1:e.id-t.id)}function l(e){document.querySelectorAll(`.filter-btn`).forEach(t=>{let n=t.getAttribute(`data-filter`)===e;t.classList.toggle(`active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)});let t;t=e===`all`?r:e===`starred`?r.filter(e=>e.starred===!0):r.filter(t=>t.category.includes(e)),s(t)}function u(e){document.querySelectorAll(`.tab-btn`).forEach((t,n)=>{t.classList.toggle(`active`,n===e),t.setAttribute(`aria-selected`,n===e?`true`:`false`)}),e===0?a():o()}function d(){document.querySelectorAll(`#modal .carousel`).forEach(e=>{if(e.hasAttribute(`data-initialized`))return;e.setAttribute(`data-initialized`,`true`);let t=e.querySelector(`.carousel-slides`),n=e.querySelector(`.carousel-prev`),r=e.querySelector(`.carousel-next`),i=e.querySelector(`.carousel-dots`);if(!t||!n||!r||!i)return;let a=0,o=t.children.length;if(o<=1){n.style.display=`none`,r.style.display=`none`;return}i.innerHTML=``;for(let e=0;e<o;e++){let t=document.createElement(`div`);t.classList.add(`dot`),e===0&&t.classList.add(`active`),t.addEventListener(`click`,()=>l(e)),i.appendChild(t)}let s=i.querySelectorAll(`.dot`);function c(){t.style.transform=`translateX(-${a*100}%)`,s.forEach((e,t)=>{e.classList.toggle(`active`,t===a)})}function l(e){a=(e+o)%o,c()}n.addEventListener(`click`,()=>l(a-1)),r.addEventListener(`click`,()=>l(a+1)),c()})}function f(e){let t=r.find(t=>t.id===e);if(!t)return;let n=document.getElementById(`modal`),i=document.getElementById(`modal-content`);i.innerHTML=t.fullContent,n.classList.remove(`hidden`),n.classList.add(`flex`),document.body.style.overflow=`hidden`,setTimeout(()=>{d()},100)}function p(){let e=document.getElementById(`modal`);e.classList.add(`hidden`),e.classList.remove(`flex`),document.body.style.overflow=``}function m(){document.body.insertAdjacentHTML(`beforeend`,`
      <div id="audio-player" class="fixed bottom-4 right-4 z-50">
        <button id="audio-toggle"
                class="bg-[#1a1a1a] hover:bg-[#FF337D] w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border border-white/10 hover:border-[#FF337D]/50">
          <i id="audio-icon" class="ph-fill ph-music-note text-2xl"></i>
        </button>
      </div>
    `);let e=null,t=null,n=!1,r=!1,i=document.getElementById(`audio-toggle`),a=document.getElementById(`audio-icon`);function o(){if(!r)try{t=new Audio,t.src=`/music/lofi.mp3`,t.loop=!0,t.volume=.15,e=new(window.AudioContext||window.webkitAudioContext),t.addEventListener(`error`,()=>{console.error(`Не удалось загрузить музыку`),a&&(a.className=`ph-fill ph-warning text-xl`)}),r=!0}catch(e){console.error(`Ошибка инициализации аудио:`,e)}}async function s(){if(!(!t&&(o(),!t)))try{n?(t.pause(),a.className=`ph-fill ph-music-note text-xl`,n=!1):(e?.state===`suspended`&&await e.resume(),await t.play(),a.className=`ph-fill ph-pause text-xl`,n=!0)}catch(e){console.error(`Ошибка воспроизведения:`,e)}}return o(),i?.addEventListener(`click`,s),document.addEventListener(`visibilitychange`,()=>{document.hidden&&n&&t?t.pause():!document.hidden&&n&&t&&t.play().catch(()=>{})}),()=>{t&&t.pause()}}document.addEventListener(`DOMContentLoaded`,()=>{e(),a(),l(`all`),m(),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&p()})}),window.filterProjects=l,window.switchTab=u,window.openProject=f,window.closeModal=p,window.toggleContactMenu=e=>{e.stopImmediatePropagation();let t=document.getElementById(`contact-menu`),n=document.getElementById(`contact-btn`);!t||!n||(t.classList.contains(`hidden`)?(t.classList.remove(`hidden`),n.classList.add(`!bg-gray-200`,`shadow-md`)):(t.classList.add(`hidden`),n.classList.remove(`!bg-gray-200`,`shadow-md`)))},document.addEventListener(`click`,e=>{let t=document.getElementById(`contact-menu`),n=document.getElementById(`contact-btn`);if(t&&n){let r=e.target;!t.contains(r)&&r!==n&&!n.contains(r)&&(t.classList.add(`hidden`),n.classList.remove(`!bg-gray-200`,`shadow-md`))}});