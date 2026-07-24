import { Mail } from "lucide-react";

import { ActionLink, type ActionLinkProps } from "@/components/action-link";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/lib/profile";

const actions: ActionLinkProps[] = [
  {
    label: "Get in touch",
    href: `mailto:${profile.email}`,
    icon: Mail,
    variant: "primary",
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
];

/** The row of call-to-action links, rendered from the `actions` config. */
export function ContactActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      {actions.map((action) => (
        <ActionLink key={action.label} {...action} />
      ))}
    </div>
  );
}
