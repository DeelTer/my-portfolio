import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from 'd3-force';

export function initConnectionsGraph(containerId: string, data: any) {
  const container = document.getElementById(containerId) as HTMLDivElement;
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'w-full rounded-3xl border border-white/10 bg-[#0a0a0a]';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d', { alpha: true })!;

  let width = 0;
  let height = 0;

  function resizeCanvas() {
    width = container.clientWidth;
    height = Math.max(480, Math.min(620, window.innerHeight * 0.55));
    canvas.width = width;
    canvas.height = height;
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
      img.onload = () => images.set(node.id, img);
      img.onerror = () => console.warn(`Не удалось загрузить аватарку: ${node.image}`);
    }
  });

  const simulation = forceSimulation(nodes)
    .force('link', forceLink(links).id((d: any) => d.id).distance(115))
    .force('charge', forceManyBody().strength(-340))
    .force('center', forceCenter(width / 2, height / 2))
    .force('collision', forceCollide().radius((d: any) => (d.category === 'me' ? 42 : 28)));

  // ++ Обновлённый colorMap с недостающими категориями
  const colorMap: Record<string, string> = {
    me: '#FF337D',
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

  // ++ Переменная для хранения узла под курсором
  let hoveredNode: any = null;

  // ++ Обработчик движения мыши — ищем узел под курсором
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // Ищем узел, в который попала мышь
    hoveredNode = nodes.find((node: any) => {
      const dx = node.x - mx;
      const dy = node.y - my;
      const radius = node.category === 'me' ? 34 : (node.category === 'freelance' || node.category === 'tg' || node.category === 'discord' || node.category === 'event' ? 19 : 26);
      return dx * dx + dy * dy <= radius * radius;
    });

    // Если нашли — перерисовываем, чтобы показать тултип
    if (hoveredNode) {
      draw(); // перерисовка при каждом движении, если узел найден
    }
  });

  // ++ Когда мышь уходит с canvas, убираем тултип
  canvas.addEventListener('mouseleave', () => {
    hoveredNode = null;
    draw();
  });

    function draw() {
    ctx.clearRect(0, 0, width, height);

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
      ctx.shadowColor = isMe ? '#FF337D' : '#64748b';
      ctx.shadowBlur = isMe ? 30 : 14;

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

      // Подпись
      ctx.fillStyle = '#f1f5f9';
      ctx.font = isMe 
        ? '600 15px system-ui, -apple-system, sans-serif' 
        : '500 13px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, x, y + radius + 28);
    });

    // === ТУЛТИП (только если есть description) ===
    if (hoveredNode && hoveredNode.description) {
      const text = hoveredNode.description;
      const x = hoveredNode.x;
      const y = hoveredNode.y;
      const radius = hoveredNode.category === 'me' ? 34 : (hoveredNode.category === 'freelance' || hoveredNode.category === 'tg' || hoveredNode.category === 'discord' || hoveredNode.category === 'event' ? 19 : 26);

      // Измеряем текст
      ctx.font = '500 12px system-ui, -apple-system, sans-serif';
      const textWidth = ctx.measureText(text).width;
      const padding = 10;
      const tooltipHeight = 30;
      const tooltipWidth = textWidth + padding * 2;

      // Позиция тултипа справа-сверху от узла
      let tipX = x + radius + 10;
      let tipY = y - radius - 10 - tooltipHeight;

      // Чтобы не улетел за край canvas
      if (tipX + tooltipWidth > width) tipX = x - tooltipWidth - radius - 10;
      if (tipY < 5) tipY = y + radius + 10;

      // Рисуем фон
      ctx.fillStyle = 'rgba(30, 30, 30, 0.95)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(tipX, tipY, tooltipWidth, tooltipHeight, 8);
      ctx.fill();
      ctx.stroke();

      // Текст
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, tipX + padding, tipY + tooltipHeight / 2);
    }
  }

  simulation.on('tick', draw);

  // Drag (оставь без изменений)
  let dragged: any = null;
  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    dragged = nodes.find((node: any) => {
      const dx = node.x - mx;
      const dy = node.y - my;
      return dx * dx + dy * dy < 45 * 45;
    });

    if (dragged) {
      simulation.alphaTarget(0.3).restart();
      dragged.fx = mx;
      dragged.fy = my;
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (!dragged) return;
    const rect = canvas.getBoundingClientRect();
    dragged.fx = e.clientX - rect.left;
    dragged.fy = e.clientY - rect.top;
  });

  window.addEventListener('pointerup', () => {
    if (dragged) {
      dragged.fx = null;
      dragged.fy = null;
      dragged = null;
      simulation.alphaTarget(0);
    }
  });

  // Resize
  const resizeObserver = new ResizeObserver(() => {
    resizeCanvas();
    simulation.force('center', forceCenter(width / 2, height / 2));
    simulation.alpha(0.3).restart();
  });
  resizeObserver.observe(container);

  setTimeout(() => simulation.alpha(1).restart(), 100);
}