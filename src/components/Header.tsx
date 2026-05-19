"use client";

import { useState } from "react";

import { NavigationContent, SiteInfo } from "@/data/siteContent";

import { Logo } from "./Logo";

type HeaderProps = {
  navigation: NavigationContent;
  siteInfo: SiteInfo;
};

export function Header({ navigation, siteInfo }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo siteInfo={siteInfo} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavní navigace">
          {navigation.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-[color:var(--accent)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={navigation.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/15 hover:-translate-y-0.5 hover:bg-black"
          >
            {navigation.cta.label}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-full border border-[color:var(--border)] p-3 text-secondary md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Zavřít navigaci" : "Otevřít navigaci"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-4 w-5 flex-col justify-between">
            <span className="block h-0.5 rounded-full bg-current" />
            <span className="block h-0.5 rounded-full bg-current" />
            <span className="block h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-[color:var(--border)] bg-white px-4 py-4 md:hidden"
          aria-label="Mobilní navigace"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-secondary hover:bg-cream"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={navigation.cta.href}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {navigation.cta.label}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
