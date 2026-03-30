import { projects } from '../data/projects';

function initCarousel() {
  const carousels = document.querySelectorAll('#modal .carousel');
  
  carousels.forEach((carousel) => {
    // Защита от повторной инициализации
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

    // Создаём точки управления
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

    // Назначаем обработчики на кнопки
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Первоначальное состояние
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

  // Небольшая задержка, чтобы DOM полностью отрисовался
  setTimeout(() => {
    initCarousel();
  }, 100);
}

export function closeModal() {
  const modal = document.getElementById("modal") as HTMLDivElement;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}