import { renderSkills, filterProjects, switchTab } from './utils/render';
import { openProject, closeModal } from './utils/modal';
import { projects } from './data/projects';
import { connectionsData } from './data/connections';
import './icons.css';
import './style.css';

function handleRoute() {
  const slug = location.hash.startsWith('#project/') ? location.hash.slice(9) : '';
  const project = projects.find(p => p.slug === slug);
  if (project) openProject(project.id); else closeModal(false);
}
Object.assign(window, {
  openProject: (id: number) => {
    const project = projects.find(p => p.id === id);
    if (project) location.hash = `project/${project.slug}`;
  }, closeModal, filterProjects, switchTab
});
renderSkills();
filterProjects('all');
const graph = document.getElementById('connections-graph');
if (graph) graph.innerHTML = `<div class="connections-list">${connectionsData.nodes.filter(n => n.id !== 'roman').map(n => `<div><span>${n.label}</span>${n.description ? `<p>${n.description}</p>` : ''}</div>`).join('')}</div>`;
handleRoute();
window.addEventListener('hashchange', handleRoute);
document.addEventListener('keydown', e => {
  const modal = document.getElementById('modal')!;
  if (modal.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') {
    const items = Array.from(modal.querySelectorAll<HTMLElement>('a[href],button,[tabindex="0"]')).filter(el => el.getClientRects().length);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }
});


document.querySelector('[role="tablist"]')?.addEventListener('keydown', event => {
  const e = event as KeyboardEvent;
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
  e.preventDefault();
  const current = document.getElementById('tab0')!.getAttribute('aria-selected') === 'true' ? 0 : 1;
  const next = e.key === 'Home' ? 0 : e.key === 'End' ? 1 : 1 - current;
  switchTab(next);
  document.getElementById(`tab${next}`)?.focus();
});
