import type { Project } from '../types';

export const tntOnlineEvents: Project = {
  id: 16,
  title: "TNT_online Ивент",
  subtitle: "Онлайн, Организация",
  slug: "tnt-online",
  image: "./images/tnt_online/cover.webp",
  category: ["minecraft", "other", "event", "company"],
  starred: true,
  shortDesc: "Организация и поддержка стрима со стримерами",
  fullContent: `
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
  `
};