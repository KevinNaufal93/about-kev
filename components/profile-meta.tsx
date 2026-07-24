import { Globe, MapPin } from "lucide-react";

import { profile } from "@/lib/profile";
import type { IconComponent } from "@/lib/types";

type MetaItem = {
  icon: IconComponent;
  label: string;
  href?: string;
};

const items: MetaItem[] = [
  { icon: MapPin, label: profile.location },
  { icon: Globe, label: profile.site, href: `https://${profile.site}` },
];

/** Footer metadata (location + site), links when a href is present. */
export function ProfileMeta() {
  return (
    <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
      {items.map(({ icon: Icon, label, href }) => {
        const content = (
          <>
            <Icon className="h-4 w-4 text-brand/80" />
            {label}
          </>
        );

        return href ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-brand"
          >
            {content}
          </a>
        ) : (
          <span key={label} className="inline-flex items-center gap-2">
            {content}
          </span>
        );
      })}
    </div>
  );
}
