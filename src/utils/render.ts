import { skillsData, toolsData } from '../data/skills';
import { projects } from '../data/projects'; // Импортируем напрямую
import type { Project } from '../data/types';

function getToolIcon(tool: string): string {
  const iconMap: Record<string, string> = {
    "Figma": "figma-logo",
    "IntelliJ IDEA": "code",
    "Adobe Photoshop": "image",
    "Adobe After Effects": "film-strip",
    "Adobe Premiere": "video",
    "Adobe Audition": "waveform",
    "Capcut": "scissors",
    "Excel / Google docs": "table"
  };
  return iconMap[tool] || "gear";
}

export function renderSkills() {
  const container = document.getElementById("skills");
  if (!container) return;
  
  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${skillsData.map(skill => `
        <div class="skill-card">
          <i class="ph-${skill.icon} text-2xl text-[#FF337D] flex-shrink-0"></i>
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
      ${toolsData.map(tool => `
        <div class="bg-[#1a1a1a] rounded-xl p-4 flex items-center gap-3 hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-[#FF337D]/50">
          <i class="ph-${getToolIcon(tool)} text-2xl text-[#FF337D] flex-shrink-0"></i>
          <span class="font-medium text-gray-200">${tool}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function sortProjects(projectsToSort: Project[]): Project[] {
  return [...projectsToSort].sort((a, b) => {
    if (a.starred && !b.starred) return -1;
    if (!a.starred && b.starred) return 1;
    return a.id - b.id;
  });
}

export function renderProjects(filteredProjects: Project[]) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  
  const sortedProjects = sortProjects(filteredProjects);
  
  if (sortedProjects.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center text-gray-400 py-12">Проектов пока нет</div>';
    return;
  }
  
  grid.innerHTML = sortedProjects.map(project => `
    <div onclick="openProject(${project.id})" 
         class="group bg-[#121212] rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-white/10 relative">
      ${project.starred ? `
        <div class="absolute top-3 right-3 z-10">
          <i class="ph-fill ph-star text-[#FF337D] text-xl drop-shadow-md"></i>
        </div>
      ` : ''}
      <div class="relative aspect-video bg-zinc-900">
        <img src="${project.image}" alt="${project.title}" 
             class="w-full h-full object-cover transition-transform group-hover:scale-105"
             onerror="this.src='https://via.placeholder.com/1280x720?text=No+Image'">
      </div>
      <div class="p-5">
        <div class="text-sm text-gray-400 mb-1">${project.subtitle}</div>
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-400 text-sm line-clamp-2">${project.shortDesc}</p>
      </div>
    </div>
  `).join('');
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