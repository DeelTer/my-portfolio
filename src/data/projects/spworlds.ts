import type { Project } from '../types';

export const spWorlds: Project = { 
    id: 9, 
    title: "#СП сервера", 
    subtitle: "Minecraft", 
    slug: "spworlds",
    image: "./images/spworlds/cover.png", 
    category: ["minecraft", "other", "code"], 
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
  }