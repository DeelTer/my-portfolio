import { projects } from '../data/projects';
import { openProject, closeModal } from './modal';

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}

export function updateURLForProject(project: { slug: string }) {
  const newUrl = `${window.location.origin}/${project.slug}`;
  window.history.pushState({ projectSlug: project.slug }, '', newUrl);
}

export function clearProjectURL() {
  const currentPath = window.location.pathname;
  if (currentPath !== '/' && currentPath !== '') {
    window.history.pushState({}, '', '/');
  }
}

export function handleRoute() {
  const path = window.location.pathname.slice(1); // убираем ведущий слэш
  if (path) {
    const project = getProjectBySlug(path);
    if (project) {
      openProject(project.id);
    } else {
      // Если проект не найден, можно либо ничего не делать, либо показать 404
      console.warn(`Project with slug "${path}" not found`);
      // Опционально: закрыть модалку, если она была открыта
      closeModal();
    }
  } else {
    // На корневом пути — закрываем модалку, если открыта
    closeModal();
  }
}