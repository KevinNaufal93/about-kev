/** Decorative grid backdrop that fades out toward the edges. */
export function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="grid-overlay pointer-events-none absolute inset-0"
    />
  );
}
