import { skillsData, toolsData } from '../data/skills';
import { projects } from '../data/projects';
import type { Project } from '../data/types';

export function renderSkills() {
  const container = document.getElementById("skills");
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${skillsData.map((skill) => `
        <div class="skill-card">
          <i class="ph-fill ph-${skill.icon} text-3xl text-[#e5e5e5] flex-shrink-0"></i>
          <span class="font-medium text-gray-200 text-sm md:text-base">${skill.name}</span>
        </div>
      `).join('')}
    </div>
  `;


}

export function renderTools() {
  const container = document.getElementById("skills");
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${toolsData.map((tool) => `
        <div class="bg-[#1a1a1a] rounded-2xl p-5 flex items-center gap-4 hover:bg-[#1e1e1e] transition-all duration-300 border border-white/5 hover:border-[#e5e5e5]/40 group">
          <i class="ph-fill ph-${tool.icon} text-3xl text-[#e5e5e5] flex-shrink-0 transition-transform duration-300 group-hover:scale-110"></i>
          <span class="font-medium text-gray-200">${tool.name}</span>
        </div>
      `).join('')}
    </div>
  `;


}

function buildProjectCards(sortedProjects: Project[]): string {
  return sortedProjects.map((project) => `
    <button type="button" onclick="openProject(${project.id})"
         class="project-card text-left group bg-[#121212] rounded-3xl overflow-hidden cursor-pointer
                hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300
                border border-white/5 hover:border-[#e5e5e5]/30
                hover:shadow-2xl hover:shadow-[#e5e5e5]/10 relative">
      ${project.starred ? `
        <div class="absolute top-4 right-4 z-10">
          <i class="ph-fill ph-star text-[#e5e5e5] text-2xl drop-shadow-md"></i>
        </div>
      ` : ''}

      <div class="relative aspect-video bg-zinc-900 overflow-hidden">
        <div class="absolute inset-0 bg-zinc-800" data-skeleton></div>
        <img src="${project.image}"
             alt="${project.title}"
             class="relative w-full h-full object-cover transition-opacity duration-500"
             style="opacity:0"
             loading="lazy"
             decoding="async"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.onerror=null; this.style.visibility='hidden'; this.style.opacity='1'; this.previousElementSibling.style.display='none';">
      </div>

      <div class="p-5">
        <div class="text-sm text-gray-400 mb-1">${project.subtitle}</div>
        <h3 class="text-xl font-bold mb-2 line-clamp-1">${project.title}</h3>
        <p class="text-gray-400 text-sm line-clamp-2">${project.shortDesc}</p>
      </div>
    </button>
  `).join('');
}

export function renderProjects(filteredProjects: Project[]) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const sortedProjects = sortProjects(filteredProjects);

  const doRender = () => {
    if (sortedProjects.length === 0) {
      grid.innerHTML = '<div class="col-span-full text-center text-gray-400 py-12 animate-fade-in-up">Проектов пока нет</div>';
      return;
    }

    grid.innerHTML = buildProjectCards(sortedProjects);


  };

  doRender();
}

function sortProjects(projectsToSort: Project[]): Project[] {
  return [...projectsToSort].sort((a, b) => {
    if (a.starred && !b.starred) return -1;
    if (!a.starred && b.starred) return 1;
    return a.id - b.id;
  });
}

export function filterProjects(category: string) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-filter') === category;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  let filtered: Project[];
  if (category === 'all') {
    filtered = projects;
  } else if (category === 'starred') {
    filtered = projects.filter(p => p.starred === true);
  } else {
    filtered = projects.filter(p => p.category.includes(category));
  }

  renderProjects(filtered);
}

export function switchTab(tab: number) {
  document.getElementById("skills")?.setAttribute("aria-labelledby", `tab${tab}`);
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === tab);
    btn.setAttribute('aria-selected', i === tab ? 'true' : 'false');
    btn.setAttribute('tabindex', i === tab ? '0' : '-1');
  });

  if (tab === 0) {
    renderSkills();
  } else {
    renderTools();
  }
}
