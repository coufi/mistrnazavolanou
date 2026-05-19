"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  useRef,
  useState,
} from "react";

type BeforeAfterImageProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  priority?: boolean;
  className?: string;
  viewportClassName?: string;
  aspectRatioClassName?: string;
  sizes?: string;
};

const DEFAULT_REVEAL = 50;

function clampReveal(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function BeforeAfterImage({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  priority = false,
  className = "",
  viewportClassName = "",
  aspectRatioClassName = "aspect-[4/3]",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: BeforeAfterImageProps) {
  const [reveal, setReveal] = useState(DEFAULT_REVEAL);
  const viewportRef = useRef<HTMLDivElement>(null);

  const updateReveal = (clientX: number) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const { left, width } = viewport.getBoundingClientRect();
    const nextReveal = ((clientX - left) / width) * 100;

    setReveal(clampReveal(nextReveal));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateReveal(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType === "mouse" ||
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      updateReveal(event.clientX);
    }
  };

  const handlePointerRelease = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    updateReveal(event.clientX);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 5;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        event.preventDefault();
        setReveal((value) => clampReveal(value - step));
        break;
      case "ArrowRight":
      case "ArrowUp":
        event.preventDefault();
        setReveal((value) => clampReveal(value + step));
        break;
      case "Home":
        event.preventDefault();
        setReveal(0);
        break;
      case "End":
        event.preventDefault();
        setReveal(100);
        break;
      default:
        break;
    }
  };

  const revealMask = `linear-gradient(to right, #000 0%, #000 ${reveal}%, transparent ${reveal}%, transparent 100%)`;

  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-4 shadow-[0_24px_80px_-32px_rgba(31,41,55,0.35)] ${className}`}
    >
      <div
        ref={viewportRef}
        className={`group relative block w-full overflow-hidden rounded-[1.5rem] bg-[#efe6d5] text-left outline-none focus-visible:ring-4 focus-visible:ring-primary/45 touch-none select-none cursor-ew-resize ${viewportClassName}`}
        role="slider"
        tabIndex={0}
        aria-label="Interaktivní ukázka před a po"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(reveal)}
        aria-valuetext={`${Math.round(reveal)} % po úpravě`}
        onMouseEnter={handleMouseMove}
        onMouseMove={handleMouseMove}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerRelease}
        onPointerCancel={handlePointerRelease}
        onKeyDown={handleKeyDown}
      >
        <div className={aspectRatioClassName}>
          <Image
            src={beforeSrc}
            alt="Ilustrační stav prostoru před úpravou"
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `polygon(0 0, ${reveal}% 0, ${reveal}% 100%, 0 100%)`,
              WebkitClipPath: `polygon(0 0, ${reveal}% 0, ${reveal}% 100%, 0 100%)`,
              maskImage: revealMask,
              WebkitMaskImage: revealMask,
            }}
          >
            <Image
              src={afterSrc}
              alt="Ilustrační stav prostoru po úpravě"
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
          </div>

          <div
            className="pointer-events-none absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_0_2px_rgba(31,41,55,0.08)]"
            style={{ left: `calc(${reveal}% - 2px)` }}
            aria-hidden="true"
          >
            <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-secondary text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
              ↔
            </span>
          </div>

          <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {beforeLabel}
          </span>
          <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {afterLabel}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Přejeďte kurzorem nebo táhněte prstem a porovnejte stav před a po.</p>
        <span className="font-medium text-secondary">Interaktivní demo před/po</span>
      </div>
    </div>
  );
}
