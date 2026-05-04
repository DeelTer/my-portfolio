import { initCanvasBubbles } from './utils/bubbles';
import { renderSkills, filterProjects, switchTab } from './utils/render';
import { openProject, closeModal } from './utils/modal';
import { initAudioPlayer } from './utils/audioPlayer';
import { projects } from './data/projects';
import { connectionsData } from './data/connections';
import { initConnectionsGraph } from './utils/connectionsGraph';
import './style.css';


function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}

function updateURLForProject(project: { slug: string }) {
  const newUrl = `${window.location.origin}/${project.slug}`;
  window.history.pushState({ projectSlug: project.slug }, '', newUrl);
}

function handleRoute() {
  const path = window.location.pathname.slice(1);
  if (path) {
    const project = getProjectBySlug(path);
    if (project) {
      openProject(project.id);
    } else {
      closeModal();
    }
  } else {
    closeModal();
  }
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
}

// === ИНИЦИАЛИЗАЦИЯ ===

document.addEventListener('DOMContentLoaded', () => {
  initCanvasBubbles();
  renderSkills();
  filterProjects('all');
  initAudioPlayer();
  initConnectionsGraph('connections-graph', connectionsData);
  initScrollReveal();

  handleRoute();
  window.addEventListener('popstate', handleRoute);

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
  });
});

// === ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ HTML ===

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
