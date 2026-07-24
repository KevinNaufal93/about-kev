type AvailabilityBadgeProps = {
  label: string;
};

/** Mono status pill with a terminal-style blinking dot. */
export function AvailabilityBadge({ label }: AvailabilityBadgeProps) {
  return (
    <div className="mb-8 inline-flex items-center gap-2.5 font-mono text-sm text-brand">
      <span className="inline-flex h-2.5 w-2.5 animate-blink rounded-full bg-brand" />
      {label}
    </div>
  );
}
