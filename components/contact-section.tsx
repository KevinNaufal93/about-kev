import { TerminalContact } from "@/components/terminal-contact";

export function ContactSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20 pb-28 sm:px-10 lg:px-16">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        // contact
      </p>
      <div className="max-w-2xl">
        <TerminalContact />
      </div>
    </section>
  );
}
