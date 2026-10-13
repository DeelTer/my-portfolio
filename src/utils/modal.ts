import { projects } from '../data/projects';
let previousFocus: HTMLElement | null = null;

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
      const dot = document.createElement('button');
      dot.classList.add('dot');
      dot.setAttribute('aria-label', `Слайд ${i + 1}`);
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
        <div class="absolute inset-0 bg-zinc-800" data-skeleton></div>
        <img src="${project.image}"
             alt="${project.title}"
             class="relative w-full h-full object-cover transition-opacity duration-500 opacity-0"
             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
             onerror="this.style.opacity='1'; this.previousElementSibling.style.display='none'; this.onerror=null; this.style.visibility='hidden';">
      </div>`
    : '';

  if (modal.classList.contains('hidden')) previousFocus = document.activeElement as HTMLElement;
  content.innerHTML = coverHTML + project.fullContent;

  // Снимаем класс закрытия, показываем модал
  modal.classList.remove('hidden', 'modal-closing');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  initCarousel();
  modal.querySelector('.modal-panel')!.scrollTop = 0;
  modal.querySelector<HTMLButtonElement>('.modal-close')?.focus();
  Array.from(document.body.children).forEach(el => { if (el !== modal && el instanceof HTMLElement && el.tagName !== 'SCRIPT') el.inert = true; });
}

export function closeModal(updateURL = true) {
  const modal = document.getElementById('modal');
  if (!modal || modal.classList.contains('hidden')) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  Array.from(document.body.children).forEach(el => { if (el instanceof HTMLElement) el.inert = false; });
  document.getElementById('modal-content')!.innerHTML = '';
  if (updateURL && location.hash.startsWith('#project/')) history.replaceState(null, '', location.pathname + location.search);
  previousFocus?.focus({ preventScroll: true });
}
