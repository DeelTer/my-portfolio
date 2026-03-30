import { initCanvasBubbles } from './utils/bubbles';
import { renderSkills, filterProjects, switchTab } from './utils/render';
import { openProject, closeModal } from './utils/modal';
import { initAudioPlayer } from './utils/audioPlayer';
import './style.css';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  initCanvasBubbles();
  renderSkills();
  filterProjects('all');
  initAudioPlayer();

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
  });
});

// Экспорт для onclick в HTML
(window as any).filterProjects = filterProjects;
(window as any).switchTab = switchTab;
(window as any).openProject = openProject;
(window as any).closeModal = closeModal;

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