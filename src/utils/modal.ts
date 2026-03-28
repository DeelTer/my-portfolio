import { projects } from '../data/projects';

function initCarousel() {
  const carousels = document.querySelectorAll('#modal .carousel');
  carousels.forEach((carousel) => {
    if (carousel.hasAttribute('data-initialized')) return;
    carousel.setAttribute('data-initialized', 'true');

    const slides = carousel.querySelector('.carousel-slides') as HTMLElement;
    const prevBtn = carousel.querySelector('.carousel-prev') as HTMLElement;
    const nextBtn = carousel.querySelector('.carousel-next') as HTMLElement;
    const dotsContainer = carousel.querySelector('.carousel-dots') as HTMLElement;
    
    if (!slides || !prevBtn || !nextBtn || !dotsContainer) {
      console.warn('Carousel elements not found');
      return;
    }

    let currentIndex = 0;
    const totalSlides = slides.children.length;

    if (totalSlides === 0) return;

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.dot');

    function updateCarousel() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
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

  content.innerHTML = project.fullContent;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  initCarousel();
}

export function closeModal() {
  const modal = document.getElementById("modal") as HTMLDivElement;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}