export function initAudioPlayer() {
  const playerHTML = `
    <div id="audio-player" class="fixed bottom-4 right-4 z-50">
      <button id="audio-toggle" class="bg-[#FF337D] hover:bg-[#e62e6e] rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110" aria-label="Включить/выключить музыку">
        <i id="audio-icon" class="ph-fill ph-music-note text-white text-2xl"></i>
      </button>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', playerHTML);
  
  // Используем Web Audio API для автозапуска
  let audioContext: AudioContext | null = null;
  let audioElement: HTMLAudioElement | null = null;
  let sourceNode: MediaElementAudioSourceNode | null = null;
  let isPlaying = false;
  let isInitialized = false;
  
  const toggleBtn = document.getElementById('audio-toggle');
  const icon = document.getElementById('audio-icon');
  
  // Функция инициализации звука
  function initAudio() {
    if (isInitialized) return;
    
    try {
      // Создаем аудио элемент
      audioElement = new Audio();
      // Используем локальный файл (скачайте lofi трек и положите в public/music/)
      audioElement.src = '/music/lofi.mp3';
      audioElement.loop = true;
      audioElement.volume = 0.15; // 20% громкости
      audioElement.crossOrigin = 'anonymous';
      
      // Создаем AudioContext
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      sourceNode = audioContext.createMediaElementSource(audioElement);
      sourceNode.connect(audioContext.destination);
      
      audioElement.addEventListener('canplaythrough', () => {
        console.log('Music loaded');
      });
      
      audioElement.addEventListener('error', () => {
        console.error('Failed to load music file');
        if (icon) icon.className = 'ph-fill ph-warning text-white text-2xl';
      });
      
      isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize audio:', error);
    }
  }
  
  // Функция запуска музыки (требует взаимодействия с пользователем)
  async function startMusic() {
    if (!audioContext || !audioElement || !sourceNode) {
      initAudio();
      if (!audioContext || !audioElement) return;
    }
    
    try {
      // Resume AudioContext (он всегда стартует в suspended состоянии)
      if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume();
      }
      
      // Запускаем воспроизведение
      await audioElement?.play();
      isPlaying = true;
      if (icon) icon.className = 'ph-fill ph-pause text-white text-2xl';
      
      // После успешного запуска удаляем обработчики
      document.removeEventListener('click', startMusic);
      document.removeEventListener('keydown', startMusic);
      document.removeEventListener('touchstart', startMusic);
    } catch (error) {
      console.log('Auto-play prevented, waiting for user interaction');
    }
  }
  
  // Функция переключения музыки
  async function toggleAudio() {
    if (!audioContext || !audioElement) {
      initAudio();
      if (!audioContext || !audioElement) return;
    }
    
    try {
      if (isPlaying) {
        audioElement?.pause();
        if (icon) icon.className = 'ph-fill ph-music-note text-white text-2xl';
        isPlaying = false;
      } else {
        if (audioContext?.state === 'suspended') {
          await audioContext.resume();
        }
        await audioElement?.play();
        if (icon) icon.className = 'ph-fill ph-pause text-white text-2xl';
        isPlaying = true;
      }
    } catch (error) {
      console.error('Play failed:', error);
    }
  }
  
  // Инициализируем аудио
  initAudio();
  
  // Пытаемся запустить музыку при первом взаимодействии
  document.addEventListener('click', startMusic);
  document.addEventListener('keydown', startMusic);
  document.addEventListener('touchstart', startMusic);
  
  toggleBtn?.addEventListener('click', toggleAudio);
  
  // Пауза при неактивной вкладке
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying && audioElement) {
      audioElement.pause();
    } else if (!document.hidden && isPlaying && audioElement) {
      audioElement.play().catch(() => {});
    }
  });
  
  // Возвращаем функцию очистки
  return () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.src = '';
    }
    if (audioContext) {
      audioContext.close();
    }
    toggleBtn?.removeEventListener('click', toggleAudio);
  };
}