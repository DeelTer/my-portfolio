import { projects } from '../data/projects';

function initCarousel() {
  const carousels = document.querySelectorAll('#modal .carousel');
  
  carousels.forEach((carousel) => {
    if (carousel.hasAttribute('data-initialized')) return;
    carousel.setAttribute('data-initialized', 'true');

    const slidesContainer = carousel.querySelector('.carousel-slides') as HTMLElement;
    const prevBtn = carousel.querySelector('.carousel-prev') as HTMLButtonElement;
    const nextBtn = carousel.querySelector('.carousel-next') as HTMLButtonElement;
    const dotsContainer = carousel.querySelector('.carousel-dots') as HTMLElement;

    if (!slidesContainer || !prevBtn || !nextBtn || !dotsContainer) return;

    let currentIndex = 0;
    const totalSlides = slidesContainer.children.length;

    if (totalSlides <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      return;
    }

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.dot');

    function updateCarousel() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function goToSlide(index: number) {
      currentIndex = (index + totalSlides) % totalSlides;
      updateCarousel();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    updateCarousel();
  });
}

export function openProject(id: number) {
  const project = projects.find((p: any) => p.id === id);
  if (!project) return;

  const modal = document.getElementById("modal") as HTMLDivElement;
  const content = document.getElementById("modal-content") as HTMLDivElement;

  const coverHTML = project.image 
    ? `
      <div class="relative w-full rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900">
        <div class="absolute inset-0 bg-zinc-800 animate-pulse"></div>
        <img src="${project.image}" 
             alt="${project.title}" 
             class="relative w-full h-full object-cover transition-opacity duration-500 opacity-0"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.style.opacity='1'; this.previousElementSibling.style.display='none'; this.src='https://via.placeholder.com/1280x720/1a1a1a/ffffff?text=No+Image';">
      </div>`
    : '';

  content.innerHTML = coverHTML + project.fullContent;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    initCarousel();
  }, 100);
}

export function closeModal() {
  const modal = document.getElementById("modal") as HTMLDivElement;
  const isOpen = modal && !modal.classList.contains("hidden");
  
  if (isOpen) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    
    const currentPath = window.location.pathname;
    if (currentPath !== '/' && currentPath !== '') {
      window.history.pushState({}, '', '/');
    }
  }
}