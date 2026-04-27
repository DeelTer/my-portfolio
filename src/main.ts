import { initCanvasBubbles } from './utils/bubbles';
import { renderSkills, filterProjects, switchTab } from './utils/render';
import { openProject, closeModal } from './utils/modal';
import { initAudioPlayer } from './utils/audioPlayer';
import { projects } from './data/projects';
import { connectionsData } from './data/connections';
import { initConnectionsGraph } from './utils/connectionsGraph';
import './style.css';


// === РОУТИНГ ПО SLUG ===

// Поиск проекта по slug
function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}

// Обновление URL при открытии проекта
function updateURLForProject(project: { slug: string }) {
  const newUrl = `${window.location.origin}/${project.slug}`;
  window.history.pushState({ projectSlug: project.slug }, '', newUrl);
}

// Обработка маршрута при загрузке страницы или нажатии назад/вперёд
function handleRoute() {
  const path = window.location.pathname.slice(1); // убираем ведущий слэш
  if (path) {
    const project = getProjectBySlug(path);
    if (project) {
      // Вызываем напрямую оригинальную openProject из modal.ts
      // (без обёртки, чтобы не создавать цикл обновления URL)
      openProject(project.id);
    } else {
      // Проект не найден — закрываем модалку
      closeModal();
    }
  } else {
    // Корневой путь — закрываем модалку
    closeModal();
  }
}

// === ИНИЦИАЛИЗАЦИЯ ===

document.addEventListener('DOMContentLoaded', () => {
  initCanvasBubbles();
  renderSkills();
  filterProjects('all');
  initAudioPlayer();
  initConnectionsGraph('connections-graph', connectionsData);

  // Роутинг
  handleRoute();                      // обработать текущий URL при загрузке
  window.addEventListener('popstate', handleRoute); // навигация назад/вперёд

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
  });
});

// === ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ HTML ===

// Обёртка для openProject, которая обновляет URL при клике на карточку
(window as any).openProject = (id: number) => {
  const project = projects.find(p => p.id === id);
  if (project) {
    openProject(id);
    updateURLForProject(project);
  }
};

(window as any).closeModal = closeModal;
(window as any).filterProjects = filterProjects;
(window as any).switchTab = switchTab;

// === МЕНЮ КОНТАКТОВ ===

(window as any).toggleContactMenu = (e: Event) => {
  e.stopImmediatePropagation();
  const menu = document.getElementById('contact-menu') as HTMLDivElement;
  const btn = document.getElementById('contact-btn') as HTMLButtonElement;
  if (!menu || !btn) return;

  const isOpen = !menu.classList.contains('hidden');
  if (isOpen) {
    menu.classList.add('hidden');
    btn.classList.remove('!bg-gray-200', 'shadow-md');
  } else {
    menu.classList.remove('hidden');
    btn.classList.add('!bg-gray-200', 'shadow-md');
  }
};

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  const menu = document.getElementById('contact-menu');
  const btn = document.getElementById('contact-btn');
  if (menu && btn) {
    const target = e.target as HTMLElement;
    if (!menu.contains(target) && target !== btn && !btn.contains(target)) {
      menu.classList.add('hidden');
      btn.classList.remove('!bg-gray-200', 'shadow-md');
    }
  }
});