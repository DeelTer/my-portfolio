let releaseRequest: Promise<string | null> | undefined;

function getLatestYooKassaRelease(): Promise<string | null> {
  // One bounded request per page session, only after opening this project.
  return releaseRequest ??= (async () => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);
    try {
      const response = await fetch('https://api.github.com/repos/DeelTer/YooKassaSDK/releases/latest', {
        signal: controller.signal,
        headers: { Accept: 'application/vnd.github+json' },
      });
      if (!response.ok) return null;
      const release: unknown = await response.json();
      if (!release || typeof release !== 'object' || !('tag_name' in release)) return null;
      const tag = release.tag_name;
      if (typeof tag !== 'string' || !/^v?\d+\.\d+\.\d+$/.test(tag)) return null;
      if ('prerelease' in release && release.prerelease) return null;
      if ('draft' in release && release.draft) return null;
      return tag;
    } catch {
      return null; // The static 2.1.0 link remains usable offline or when rate-limited.
    } finally {
      window.clearTimeout(timeout);
    }
  })();
}

export function initProjectExtras(container: HTMLElement) {
  const releaseLink = container.querySelector<HTMLAnchorElement>('[data-yookassa-release]');
  if (releaseLink) void getLatestYooKassaRelease().then(tag => {
    if (!tag || !releaseLink.isConnected) return;
    releaseLink.textContent = `Последний релиз: ${tag} · GitHub ↗`;
    releaseLink.href = `https://github.com/DeelTer/YooKassaSDK/releases/tag/${encodeURIComponent(tag)}`;
  });

  container.querySelectorAll<HTMLElement>('[data-video]').forEach(wrapper => {
    const videoId = wrapper.dataset.video;
    if (!videoId || !/^[\w-]{11}$/.test(videoId)) return;
    wrapper.querySelector('button')?.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
      frame.title = 'VRCamera — видео о моде';
      frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      wrapper.replaceChildren(frame);
      frame.focus();
    }, { once: true });
  });
}
