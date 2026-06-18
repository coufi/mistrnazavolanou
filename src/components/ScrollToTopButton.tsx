"use client";

export function ScrollToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/20 hover:-translate-y-0.5 hover:bg-black sm:right-6 sm:bottom-6"
      aria-label="Posunout na začátek stránky"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M12 18V6m0 0-5 5m5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
