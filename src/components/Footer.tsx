import { FooterContent, NavigationContent, SiteInfo } from "@/data/siteContent";

import { Logo } from "./Logo";

type FooterProps = {
  footer: FooterContent;
  navigation: NavigationContent;
  siteInfo: SiteInfo;
};

export function Footer({ footer, navigation, siteInfo }: FooterProps) {
  return (
    <footer className="border-t border-[color:var(--border)] bg-secondary px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <div className="[&_a]:text-white [&_span:last-child]:text-white/70">
            <Logo siteInfo={siteInfo} />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            {siteInfo.description}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            {footer.note}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Navigace
          </h2>
          <ul className="mt-5 space-y-3">
            {navigation.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/80 hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Kontakty a údaje
          </h2>
          <div className="mt-5 space-y-3 text-sm text-white/80">
            <p>
              <a href={siteInfo.phoneHref} className="hover:text-primary">
                {siteInfo.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={siteInfo.emailHref} className="hover:text-primary">
                {siteInfo.email}
              </a>
            </p>
            <p>{siteInfo.area}</p>
            <p>{siteInfo.availability}</p>
            <div className="pt-3">
              <p className="font-semibold text-white">{siteInfo.billingName}</p>
              <p>{siteInfo.billingPerson}</p>
              <p>IČ: {siteInfo.ico}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <p>{siteInfo.legalNote}</p>
      </div>
    </footer>
  );
}
