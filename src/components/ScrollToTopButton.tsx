export function ScrollToTopButton() {
  return (
    <a
      href="#top"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center justify-center rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/20 hover:-translate-y-0.5 hover:bg-black sm:right-6 sm:bottom-6"
      aria-label="Posunout na začátek stránky"
    >
      Nahoru
    </a>
  );
}
