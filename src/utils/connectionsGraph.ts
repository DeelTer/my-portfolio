// src/utils/connectionsGraph.ts
import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from 'd3-force';

export function initConnectionsGraph(containerId: string, data: any) {
  const container = document.getElementById(containerId) as HTMLDivElement;
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'w-full rounded-3xl border border-white/10 bg-[#0a0a0a]';
  canvas.style.touchAction = 'pan-y';
  canvas.style.filter = 'grayscale(1)';
  canvas.setAttribute('aria-label', 'Граф связей Романа, людей и сообществ');
  canvas.setAttribute('role', 'img');
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d', { alpha: true })!;

  let width = 0;
  let height = 0;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let visible = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function resizeCanvas() {
    width = container.clientWidth;
    height = Math.max(520, Math.min(700, window.innerHeight * 0.6));
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  resizeCanvas();

  const nodes: any[] = JSON.parse(JSON.stringify(data.nodes));
  const links: any[] = JSON.parse(JSON.stringify(data.links));

  // Предзагрузка изображений
  const images = new Map<string, HTMLImageElement>();
  nodes.forEach((node: any) => {
    if (node.image) {
      const img = new Image();
      img.src = node.image;
      img.onload = () => { images.set(node.id, img); if (visible) draw(); };
      img.onerror = () => console.warn(`Не удалось загрузить аватарку: ${node.image}`);
    }
  });

  const simulation = forceSimulation(nodes)
    .force('link', forceLink(links).id((d: any) => d.id).distance(128))
    .force('charge', forceManyBody().strength(-360))
    .force('center', forceCenter(width / 2, height / 2))
    .force('collision', forceCollide().radius((d: any) => (d.category === 'me' ? 60 : 48)))
    .stop();

  // Обновлённый colorMap с недостающими категориями
  const colorMap: Record<string, string> = {
    me: '#e5e5e5',
    agency: '#a78bfa',
    company: '#60a5fa',
    betboom: '#f43f5e',
    streamer: '#34d399',
    friend: '#fb923c',
    freelance: '#eab308',
    tg: '#c084fc',
    discord: '#a855f7',
    minecraft: '#22c55e',
    event: '#f59e0b',
    default: '#94a3b8'
  };

  // Переменная для хранения узла под курсором
  let hoveredNode: any = null;

  // Обработчик движения мыши — ищем узел под курсором
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left - offsetX) / scale;
    const my = (e.clientY - rect.top - offsetY) / scale;

    // Ищем узел, в который попала мышь
    const previousHovered = hoveredNode;
    hoveredNode = nodes.find((node: any) => {
      const dx = node.x - mx;
      const dy = node.y - my;
      const radius = node.category === 'me' ? 34 : (node.category === 'freelance' || node.category === 'tg' || node.category === 'discord' || node.category === 'event' ? 19 : 26);
      return dx * dx + dy * dy <= radius * radius;
    });

    // Если нашли — перерисовываем, чтобы показать тултип
    if (hoveredNode !== previousHovered) {
      draw(); // перерисовка при каждом движении, если узел найден
    }
  });

  // Когда мышь уходит с canvas, убираем тултип
  canvas.addEventListener('mouseleave', () => {
    hoveredNode = null;
    draw();
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const minX = Math.min(...nodes.map(n => n.x)) - 100;
    const maxX = Math.max(...nodes.map(n => n.x)) + 100;
    const minY = Math.min(...nodes.map(n => n.y)) - 60;
    const maxY = Math.max(...nodes.map(n => n.y)) + 90;
    if (!dragged) {
      scale = Math.min(1, width / (maxX - minX), height / (maxY - minY));
      offsetX = (width - (maxX + minX) * scale) / 2;
      offsetY = (height - (maxY + minY) * scale) / 2;
    }
    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);
    // === СВЯЗИ ===
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.lineWidth = 2.2;
    
    links.forEach((link: any) => {
      const source = nodes.find((n: any) => n.id === link.source) ?? link.source;
      const target = nodes.find((n: any) => n.id === link.target) ?? link.target;
      
      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.stroke();
    });

    // === УЗЛЫ ===
    nodes.forEach((node: any) => {
      const isMe = node.category === 'me';
      const radius = isMe ? 34 : (node.category === 'freelance' || node.category === 'tg' || node.category === 'discord' || node.category === 'event' ? 19 : 26);

      const x = node.x;
      const y = node.y;

      // Тень
      ctx.shadowColor = isMe ? '#e5e5e5' : '#64748b';
      ctx.shadowBlur = 0;

      const hasImage = node.image && images.has(node.id);
      const img = hasImage ? images.get(node.id) : null;

      if (hasImage && img) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.clip();

        const aspect = img.width / img.height;
        let drawWidth = radius * 2;
        let drawHeight = radius * 2;
        if (aspect > 1) drawWidth = drawHeight * aspect;
        else drawHeight = drawWidth / aspect;

        ctx.drawImage(
          img,
          x - drawWidth / 2,
          y - drawHeight / 2,
          drawWidth,
          drawHeight
        );
        ctx.restore();

        ctx.strokeStyle = isMe ? '#ffffff' : 'rgba(255,255,255,0.6)';
        ctx.lineWidth = isMe ? 4 : 2.5;
        ctx.beginPath();
        ctx.arc(x, y, radius + 1, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.fillStyle = colorMap[node.category || 'default'] || '#94a3b8';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        if (isMe) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(x, y, radius + 5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      ctx.shadowBlur = 0;

      if (node === hoveredNode) {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, radius + 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Подпись
      ctx.fillStyle = '#f1f5f9';
      ctx.font = isMe 
        ? '600 15px system-ui, -apple-system, sans-serif' 
        : '500 13px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, x, y + radius + 28);
    });

    ctx.restore();
    description.textContent = hoveredNode ? `${hoveredNode.label}${hoveredNode.description ? ' — ' + hoveredNode.description : ''}` : 'Наведите на узел, чтобы узнать больше.';
  }

  const description = document.createElement('p');
  description.className = 'graph-description';
  container.appendChild(description);
  const picker = document.createElement('select');
  picker.setAttribute('aria-label', 'Выбрать человека или сообщество');
  picker.className = 'graph-picker';
  picker.add(new Option('Люди и сообщества…', ''));
  nodes.forEach(node => picker.add(new Option(node.label, node.id)));
  picker.addEventListener('change', () => { hoveredNode = nodes.find(node => node.id === picker.value); draw(); });
  container.appendChild(picker);

  simulation.on('tick', draw);

  // Drag
  let dragged: any = null;
  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left - offsetX) / scale;
    const my = (e.clientY - rect.top - offsetY) / scale;

    dragged = nodes.find((node: any) => {
      const dx = node.x - mx;
      const dy = node.y - my;
      return dx * dx + dy * dy < 45 * 45;
    });

    if (dragged) {
      e.preventDefault(); // блокируем скролл при перетаскивании
      canvas.setPointerCapture(e.pointerId);
      if (!reducedMotion.matches) simulation.alphaTarget(0.15).restart();
      dragged.fx = mx;
      dragged.fy = my;
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (!dragged) return;
    const rect = canvas.getBoundingClientRect();
    dragged.fx = (e.clientX - rect.left - offsetX) / scale;
    dragged.fy = (e.clientY - rect.top - offsetY) / scale;
    if (reducedMotion.matches) { dragged.x = dragged.fx; dragged.y = dragged.fy; draw(); }
  });

  const endDrag = () => {
    if (dragged) {
      dragged.fx = null;
      dragged.fy = null;
      dragged = null;
      simulation.alphaTarget(0);
    }
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('lostpointercapture', endDrag);

  // Resize
  const resizeObserver = new ResizeObserver(() => {
    const nextHeight = Math.max(520, Math.min(700, window.innerHeight * 0.6));
    if (container.clientWidth === width && nextHeight === height) return;
    resizeCanvas();
    simulation.force('center', forceCenter(width / 2, height / 2));
    simulation.alpha(0.3);
    settleOrResume();
  });
  resizeObserver.observe(container);

  function settleOrResume() {
    if (!visible || document.hidden) { simulation.stop(); return; }
    if (reducedMotion.matches) { simulation.stop(); simulation.tick(180); draw(); }
    else if (simulation.alpha() > simulation.alphaMin()) simulation.restart();
    else draw();
  }
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (!visible) endDrag();
    settleOrResume();
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => { if (document.hidden) endDrag(); settleOrResume(); });
  reducedMotion.addEventListener('change', settleOrResume);
}