import { initCanvasBubbles } from './utils/bubbles';
import { renderSkills, filterProjects, switchTab } from './utils/render';
import { openProject, closeModal } from './utils/modal';
import './style.css';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  initCanvasBubbles();
  renderSkills();
  filterProjects('all');

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
  });
});

// Экспортируем функции в глобальную область для inline onclick
(window as any).filterProjects = filterProjects;
(window as any).switchTab = switchTab;
(window as any).openProject = openProject;
(window as any).closeModal = closeModal;