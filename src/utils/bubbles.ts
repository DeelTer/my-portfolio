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
  }

  let bubbles: Bubble[] = [];
  const BUBBLE_COUNT = window.innerWidth < 768 ? 12 : 20; // меньше на мобильных
  const MAX_ALPHA = 0.12;

  function initBubbles() {
    bubbles = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.1,
        alpha: Math.random() * MAX_ALPHA,
        alphaSpeed: (Math.random() - 0.5) * 0.005
      });
    }
  }
  initBubbles();

  let animationFrameId: number;
  let isVisible = true;

  function draw() {
    if (!ctx || !isVisible) return;
    ctx.clearRect(0, 0, width, height);
    
    bubbles.forEach(b => {
      b.x += b.vx;
      b.y += b.vy;
      if (b.x < -b.radius) b.x = width + b.radius;
      if (b.x > width + b.radius) b.x = -b.radius;
      if (b.y < -b.radius) b.y = height + b.radius;
      if (b.y > height + b.radius) b.y = -b.radius;
      
      b.alpha += b.alphaSpeed;
      if (b.alpha > MAX_ALPHA) {
        b.alpha = MAX_ALPHA;
        b.alphaSpeed = -b.alphaSpeed;
      } else if (b.alpha < 0.02) {
        b.alpha = 0.02;
        b.alphaSpeed = -b.alphaSpeed;
      }
      
      const gradient = ctx.createRadialGradient(b.x, b.y, b.radius * 0.2, b.x, b.y, b.radius);
      gradient.addColorStop(0, `rgba(255, 51, 125, ${b.alpha * 0.6})`);
      gradient.addColorStop(1, `rgba(255, 51, 125, 0)`);
      
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });
    
    animationFrameId = requestAnimationFrame(draw);
  }

  function handleResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    // пересоздаём пузырьки, чтобы они правильно расположились на новом размере
    initBubbles();
  }

  function handleVisibilityChange() {
    isVisible = !document.hidden;
    if (isVisible && !animationFrameId) {
      animationFrameId = requestAnimationFrame(draw);
    }
  }

  draw();

  window.addEventListener('resize', handleResize);
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // clean-up (опционально, но для полноты)
  return () => {
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  };
}