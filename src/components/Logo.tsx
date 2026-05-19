import { SiteInfo } from "@/data/siteContent";

import { Icon } from "./icons";

type LogoProps = {
  siteInfo: SiteInfo;
  compact?: boolean;
};

export function Logo({ siteInfo, compact = false }: LogoProps) {
  return (
    <a href="#top" className="inline-flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary shadow-sm">
        <Icon name="hammer" className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-secondary sm:text-lg">
          {siteInfo.name}
        </span>
        {!compact ? (
          <span className="text-sm text-muted">{siteInfo.claim}</span>
        ) : null}
      </span>
    </a>
  );
}
