import { StackTicker } from "@/components/stack-ticker";

export function StackSection() {
  return (
    <section className="w-full py-16">
      <p className="mb-10 text-center font-mono text-xs uppercase tracking-widest text-muted">
        // powered with
      </p>
      <StackTicker />
    </section>
  );
}
