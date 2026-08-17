import { useCallback, useEffect, useRef, useState } from 'react';
import type { ProjectMediaItem } from '@/features/projects/types/project';
import { MarqueePattern } from './project-marquee';

type YTPlayerInstance = {
  destroy: () => void;
  getIframe: () => HTMLIFrameElement;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number }) => void;
          };
        },
      ) => YTPlayerInstance;
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

/** Accepts a full YouTube URL (watch, youtu.be, or embed) or a bare video ID. */
const getYouTubeId = (src: string): string => {
  try {
    const url = new URL(src);

    // Catch the short name case:
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.slice(1);
    }

    // Get the video ID from the long name case:
    const vParam = url.searchParams.get('v');
    if (vParam) {
      return vParam;
    }
  } catch {
    // Not a parseable URL — fall through and use the raw string.
  }
  return src;
};

const useYouTubeIframeApi = (enabled: boolean) => {
  const [ready, setReady] = useState(() => Boolean(window.YT?.Player));

  useEffect(() => {
    if (!enabled || ready) return;

    if (window.YT?.Player) {
      setReady(true);
      return;
    }

    if (!document.getElementById('youtube-iframe-api')) {
      const script = document.createElement('script');
      script.id = 'youtube-iframe-api';
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    }

    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      setReady(true);
    };
  }, [enabled, ready]);

  return ready;
};

const YouTubeSlide = ({ src, title, onEnded }: { src: string; title: string; onEnded: () => void }) => {
  const apiReady = useYouTubeIframeApi(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoId = getYouTubeId(src);

  useEffect(() => {
    if (!apiReady || !containerRef.current || !window.YT) return;

    // The IFrame API replaces whatever element it's given with its own
    // <iframe>. If that element is the one React rendered (containerRef
    // itself), React later tries to remove a node that's already been
    // swapped out from under it — "removeChild: not a child of this
    // node". Handing YT.Player a plain element created here, outside
    // React's tree, keeps the ref'd container itself untouched and
    // stable, so React's own reconciliation never sees the swap.
    const mountPoint = document.createElement('div');
    containerRef.current.appendChild(mountPoint);

    const player = new window.YT.Player(mountPoint, {
      videoId,
      playerVars: { rel: 0, modestbranding: 1 },
      events: {
        onReady: (event) => {
          // The API defaults to a fixed 640x390px — with no size hint
          // it // won't fill the carousel frame on its own. Stretch it 
          // once the player's actual iframe exists.
          const iframe = event.target.getIframe?.();
          if (iframe) {
            iframe.style.position = 'absolute';
            iframe.style.inset = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';
          }
        },
        onStateChange: (event) => {
          if (window.YT && event.data === window.YT.PlayerState.ENDED) {
            onEnded();
          }
        },
      },
    });

    return () => player.destroy();
  }, [apiReady, videoId]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      role="group"
      aria-label={`${title} — video`}
    />
  );
};

type ProjectMediaCarouselProps = {
  items: ProjectMediaItem[];
  title: string;
  className?: string;
};

export const ProjectMediaCarousel = ({ items, title, className = '' }: ProjectMediaCarouselProps) => {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const current = items[index];

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="aspect-21/9 w-full overflow-hidden bg-bg-elevated">
        {current.kind === 'pattern' && (
          <svg
            aria-hidden="true"
            viewBox="0 0 400 240"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
          >
            <MarqueePattern variant={current.variant} />
          </svg>
        )}

        {current.kind === 'image' && (
          <img src={current.src} alt={current.alt} className="h-full w-full object-cover" />
        )}

        {current.kind === 'video' && current.source === 'local' && (
          <video
            key={current.src}
            src={current.src}
            className="h-full w-full object-cover"
            controls
            autoPlay
            muted
            playsInline
            onEnded={next}
          >
            {current.alt && <track kind="descriptions" label={current.alt} />}
          </video>
        )}

        {current.kind === 'video' && current.source === 'youtube' && (
          <YouTubeSlide key={current.src} src={current.src} title={title} onEnded={next} />
        )}
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous media"
            className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-bg/80 text-text backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next media"
            className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-bg/80 text-text backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>

          <div className="mt-3 flex justify-center gap-2">
            {items.map((item, i) => (
              <button
                key={`${item.kind}-${i}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 w-6 transition-colors ${i === index ? 'bg-accent' : 'bg-border'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};