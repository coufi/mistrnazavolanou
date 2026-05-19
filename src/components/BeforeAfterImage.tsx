"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterImageProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  priority?: boolean;
};

const DEFAULT_REVEAL = 48;
const ACTIVE_REVEAL = 100;

export function BeforeAfterImage({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  priority = false,
}: BeforeAfterImageProps) {
  const [reveal, setReveal] = useState(DEFAULT_REVEAL);
  const [toggled, setToggled] = useState(false);

  const activate = () => setReveal(ACTIVE_REVEAL);
  const reset = () => {
    if (!toggled) {
      setReveal(DEFAULT_REVEAL);
    }
  };

  const handleToggle = () => {
    setToggled((value) => !value);
    setReveal((value) => (value === ACTIVE_REVEAL ? DEFAULT_REVEAL : ACTIVE_REVEAL));
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-4 shadow-[0_24px_80px_-32px_rgba(31,41,55,0.35)]">
      <button
        type="button"
        className="group relative block w-full overflow-hidden rounded-[1.5rem] bg-[#efe6d5] text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/45"
        onMouseEnter={activate}
        onMouseLeave={reset}
        onFocus={activate}
        onBlur={reset}
        onClick={handleToggle}
        aria-label="Interaktivní ukázka před a po"
        aria-pressed={reveal === ACTIVE_REVEAL}
      >
        <div className="aspect-[4/3]">
          <Image
            src={beforeSrc}
            alt="Ilustrační stav prostoru před úpravou"
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
          >
            <Image
              src={afterSrc}
              alt="Ilustrační stav prostoru po úpravě"
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_0_2px_rgba(31,41,55,0.08)]"
            style={{ left: `calc(${reveal}% - 2px)` }}
            aria-hidden="true"
          >
            <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-secondary text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
              ↔
            </span>
          </div>

          <span className="absolute top-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {beforeLabel}
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {afterLabel}
          </span>
        </div>
      </button>

      <div className="mt-4 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Přejeďte kurzorem nebo klepněte pro plynulé odhalení výsledku.</p>
        <span className="font-medium text-secondary">Interaktivní demo před/po</span>
      </div>
    </div>
  );
}
