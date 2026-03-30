export function initAudioPlayer() {
  const playerHTML = `
      <div id="audio-player" class="fixed bottom-4 right-4 z-50">
        <button id="audio-toggle"
                class="bg-[#1a1a1a] hover:bg-[#FF337D] w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border border-white/10 hover:border-[#FF337D]/50">
          <i id="audio-icon" class="ph-fill ph-music-note text-2xl"></i>
        </button>
      </div>
    `;
  
  document.body.insertAdjacentHTML('beforeend', playerHTML);
  
  let audioContext: AudioContext | null = null;
  let audioElement: HTMLAudioElement | null = null;
  let isPlaying = false;
  let isInitialized = false;

  const toggleBtn = document.getElementById('audio-toggle') as HTMLButtonElement;
  const icon = document.getElementById('audio-icon') as HTMLElement;

  function initAudio() {
    if (isInitialized) return;

    try {
      audioElement = new Audio();
      audioElement.src = '/music/lofi.mp3';   
      audioElement.loop = true;
      audioElement.volume = 0.15;             
      
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      audioElement.addEventListener('error', () => {
        console.error('Не удалось загрузить музыку');
        if (icon) icon.className = 'ph-fill ph-warning text-xl';
      });

      isInitialized = true;
    } catch (error) {
      console.error('Ошибка инициализации аудио:', error);
    }
  }

  // Основная функция переключения
  async function toggleAudio() {
    if (!audioElement) {
      initAudio();
      if (!audioElement) return;
    }

    try {
      if (isPlaying) {
        // Выключаем
        audioElement.pause();
        icon.className = 'ph-fill ph-music-note text-xl';
        isPlaying = false;
      } else {
        // Включаем
        if (audioContext?.state === 'suspended') {
          await audioContext.resume();
        }
        await audioElement.play();
        icon.className = 'ph-fill ph-pause text-xl';
        isPlaying = true;
      }
    } catch (error) {
      console.error('Ошибка воспроизведения:', error);
    }
  }
  initAudio();

  toggleBtn?.addEventListener('click', toggleAudio);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying && audioElement) {
      audioElement.pause();
    } else if (!document.hidden && isPlaying && audioElement) {
      audioElement.play().catch(() => {});
    }
  });

  return () => {
    if (audioElement) {
      audioElement.pause();
    }
  };
}