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