"use client";

import { stacks } from "@/lib/stack";

// Duplicate for a seamless infinite loop — the track shifts -50% then resets.
const track = [...stacks, ...stacks];

export function StackTicker() {
  return (
    <div className="ticker-fade group relative overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
        {track.map(({ name, icon: Icon, color }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex shrink-0 flex-col items-center gap-2.5"
          >
            <Icon
              className="h-9 w-9 transition-transform duration-300 group-hover:[animation-play-state:paused]"
              style={{ color }}
              aria-label={name}
            />
            <span className="font-mono text-[10px] text-muted">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
