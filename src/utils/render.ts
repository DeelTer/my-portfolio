import { skillsData, toolsData } from '../data/skills';
import { projects } from '../data/projects';
import type { Project } from '../data/types';

function updateIcons() {
  // Небольшая задержка, чтобы DOM успел обновиться
  setTimeout(() => {
    if (window.PhosphorIcons && typeof window.PhosphorIcons.loadIcons === 'function') {
      window.PhosphorIcons.loadIcons();
    }
  }, 10);
}

export function renderSkills() {
  const container = document.getElementById("skills");
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${skillsData.map((skill, index) => `
        <div class="skill-card opacity-0" 
             style="animation-delay: ${index * 60}ms">
          <i class="ph-fill ph-${skill.icon} text-3xl text-[#FF337D] flex-shrink-0 transition-transform group-hover:scale-110"></i>
          <span class="font-medium text-gray-200 text-sm md:text-base">${skill.name}</span>
        </div>
      `).join('')}
    </div>
  `;
  updateIcons();

  // Запускаем анимацию после вставки в DOM
  setTimeout(() => {
    container.querySelectorAll('.skill-card').forEach(el => {
      el.classList.add('animate-fade-in-up');
    });
  }, 10);
}

export function renderTools() {
  const container = document.getElementById("skills");
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${toolsData.map((tool, index) => `
        <div class="bg-[#1a1a1a] rounded-2xl p-5 flex items-center gap-4 hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-[#FF337D]/40 group opacity-0"
             style="animation-delay: ${index * 60}ms">
          <i class="ph-fill ph-${tool.icon} text-3xl text-[#FF337D] flex-shrink-0 transition-transform group-hover:scale-110"></i>
          <span class="font-medium text-gray-200">${tool.name}</span>
        </div>
      `).join('')}
    </div>
  `;
  updateIcons();

  setTimeout(() => {
    container.querySelectorAll('.opacity-0').forEach(el => {
      el.classList.add('animate-fade-in-up');
    });
  }, 10);
}

export function renderProjects(filteredProjects: Project[]) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const sortedProjects = sortProjects(filteredProjects);

  if (sortedProjects.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center text-gray-400 py-12">Проектов пока нет</div>';
    return;
  }

  grid.innerHTML = sortedProjects.map((project, index) => `
    <div onclick="openProject(${project.id})" 
         class="group bg-[#121212] rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-[#FF337D]/30 hover:shadow-2xl hover:shadow-[#FF337D]/10 relative opacity-0"
         style="animation-delay: ${index * 50}ms">
      ${project.starred ? `
        <div class="absolute top-4 right-4 z-10">
          <i class="ph-fill ph-star text-[#FF337D] text-2xl drop-shadow-md"></i>
        </div>
      ` : ''}
      
      <div class="relative aspect-video bg-zinc-900 overflow-hidden">
        <!-- Заглушка показывается всегда, но скрывается, когда картинка загружена -->
        <div class="absolute inset-0 bg-zinc-800 animate-pulse"></div>
        <img src="${project.image}" 
             alt="${project.title}" 
             class="relative w-full h-full object-cover transition-opacity duration-500 opacity-0"
             loading="lazy"
             decoding="async"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.src='https://via.placeholder.com/1280x720/1a1a1a/ffffff?text=No+Image'; this.style.opacity='1'; this.previousElementSibling.style.display='none';">
      </div>
      
      <div class="p-5">
        <div class="text-sm text-gray-400 mb-1">${project.subtitle}</div>
        <h3 class="text-xl font-bold mb-2 line-clamp-1">${project.title}</h3>
        <p class="text-gray-400 text-sm line-clamp-2">${project.shortDesc}</p>
      </div>
    </div>
  `).join('');

  updateIcons();

  setTimeout(() => {
    grid.querySelectorAll('.opacity-0').forEach(el => {
      el.classList.add('animate-fade-in-up');
    });
  }, 10);
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
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === tab);
    btn.setAttribute('aria-selected', i === tab ? 'true' : 'false');
  });

  if (tab === 0) {
    renderSkills();
  } else {
    renderTools();
  }
}