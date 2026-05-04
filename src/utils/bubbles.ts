export function initCanvasBubbles() {
  const canvas = document.getElementById('bubbles-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  interface Bubble {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    alpha: number;
    alphaSpeed: number;
    hue: number; // небольшой сдвиг оттенка для разнообразия
  }

  let bubbles: Bubble[] = [];
  const BUBBLE_COUNT = window.innerWidth < 768 ? 10 : 18;
  const MAX_ALPHA = 0.11;
  const MIN_ALPHA = 0.018;

  function createBubble(x?: number, y?: number): Bubble {
    return {
      x: x ?? Math.random() * width,
      y: y ?? Math.random() * height,
      radius: Math.random() * 90 + 40,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.09,
      alpha: Math.random() * (MAX_ALPHA - MIN_ALPHA) + MIN_ALPHA,
      alphaSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      // Небольшой сдвиг hue: от чисто розового до чуть фиолетового
      hue: Math.random() * 30 - 10, // -10 to +20 degrees offset from 340 (pink)
    };
  }

  function initBubbles() {
    bubbles = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubbles.push(createBubble());
    }
  }
  initBubbles();

  let animationFrameId: number;
  let isVisible = true;

  function draw() {
    if (!ctx || !isVisible) return;
    ctx.clearRect(0, 0, width, height);

    for (const b of bubbles) {
      b.x += b.vx;
      b.y += b.vy;

      // Оборачиваем вокруг границ с небольшим запасом
      if (b.x < -b.radius) b.x = width + b.radius;
      else if (b.x > width + b.radius) b.x = -b.radius;
      if (b.y < -b.radius) b.y = height + b.radius;
      else if (b.y > height + b.radius) b.y = -b.radius;

      // Плавная пульсация прозрачности
      b.alpha += b.alphaSpeed;
      if (b.alpha >= MAX_ALPHA) {
        b.alpha = MAX_ALPHA;
        b.alphaSpeed = -Math.abs(b.alphaSpeed);
      } else if (b.alpha <= MIN_ALPHA) {
        b.alpha = MIN_ALPHA;
        b.alphaSpeed = Math.abs(b.alphaSpeed);
      }

      // Базовый розовый: hsl(340, 100%, 60%) ≈ #FF337D
      const h = 340 + b.hue;
      const gradient = ctx.createRadialGradient(b.x, b.y, b.radius * 0.15, b.x, b.y, b.radius);
      gradient.addColorStop(0, `hsla(${h}, 100%, 60%, ${b.alpha * 0.65})`);
      gradient.addColorStop(0.5, `hsla(${h}, 100%, 55%, ${b.alpha * 0.3})`);
      gradient.addColorStop(1, `hsla(${h}, 100%, 50%, 0)`);

      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  let resizeTimer: ReturnType<typeof setTimeout>;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initBubbles();
    }, 150);
  }

  function handleVisibilityChange() {
    isVisible = !document.hidden;
    if (isVisible) {
      animationFrameId = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(animationFrameId);
    }
  }

  draw();

  window.addEventListener('resize', handleResize, { passive: true });
  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    cancelAnimationFrame(animationFrameId);
  };
}
