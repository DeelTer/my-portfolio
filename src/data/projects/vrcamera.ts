import type { Project } from '../types';

export const vrCamera: Project = {
  id: 17,
  title: 'VRCamera',
  subtitle: 'Minecraft / Мой мод',
  slug: 'vrcamera',
  image: './images/vrcamera/cover.webp',
  category: ['code', 'java', 'opensource', 'other'],
  starred: true,
  shortDesc: 'Камера для стримов, роликов и фото в Minecraft — с VR и без',
  fullContent: `
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">VRCamera</h1>
      <p class="text-xl text-gray-300">Мой мод для съёмки в Minecraft. Ты играешь, а камера показывает тебя со стороны: следует за персонажем, сама меняет ракурсы или стоит там, где ты её оставил. Работает в VR и на обычном ПК.</p>
      <div class="video-embed" data-video="3B1tzZj08eM">
        <button type="button" class="video-start" aria-label="Смотреть ролик о VRCamera"><span class="video-play" aria-hidden="true">▶</span><span>VRCamera в игре</span><small>Смотреть ролик</small></button>
      </div>
      <p class="text-sm text-gray-400">Если видео не открывается — <a class="underline" href="https://youtu.be/3B1tzZj08eM" target="_blank" rel="noopener noreferrer">смотреть на YouTube ↗</a></p>
      <section class="project-detail-block">
        <h2>Снимай, пока играешь</h2>
        <p>Автоматический режим выбирает ракурсы и держит персонажа в кадре. Можно закрепить любимый угол или расставить камеры и переключаться между ними. На ПК картинка выводится в отдельное окно — его удобно захватывать в OBS.</p>
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
        <h2>Хочешь попробовать?</h2>
        <p>Скачать мод и посмотреть, как его установить, можно на GitHub.</p>
      </section>
      <a href="https://github.com/DeelTer/VRCamera" target="_blank" rel="noopener noreferrer" class="primary-link inline-flex">VRCamera на GitHub ↗</a>
    </div>
  `,
};
