import { AvailabilityBadge } from "@/components/availability-badge";
import { BackgroundGrid } from "@/components/background-grid";
import { Bio } from "@/components/bio";
import { ContactActions } from "@/components/contact-actions";
import { ProfileMeta } from "@/components/profile-meta";
import { profile } from "@/lib/profile";

/** Full-viewport first section: intro, name, role, bio, CTAs, meta. */
export function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center overflow-hidden">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-16">
        <AvailabilityBadge label={profile.status} />

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-5 font-mono text-lg text-brand sm:text-xl">
          {profile.role}
        </p>

        <Bio />
        <ContactActions />
        <ProfileMeta />
      </div>
    </section>
  );
}
