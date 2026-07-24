"use client";

import { type FormEvent, useState } from "react";

import { profile } from "@/lib/profile";

type Field = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent";

const PROMPT = "$";

export function TerminalContact() {
  const [fields, setFields] = useState<Field>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function patch(key: keyof Field) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(`Message from ${fields.name}`);
    const body = encodeURIComponent(
      `From: ${fields.name} <${fields.email}>\n\n${fields.message}`
    );

    setTimeout(() => {
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
      setStatus("sent");
    }, 900);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-[#0c0c0c] font-mono">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-muted">~/contact</span>
      </div>

      {/* Body */}
      <form onSubmit={handleSubmit} className="space-y-5 p-6">
        {/* Boot line */}
        <p className="text-xs text-brand">
          {PROMPT} new-message --to{" "}
          <span className="text-muted">{profile.email}</span>
        </p>

        {/* Fields */}
        <div className="space-y-4 pl-3">
          <TerminalField
            prompt="name"
            type="text"
            placeholder="your name"
            value={fields.name}
            onChange={patch("name")}
            required
          />
          <TerminalField
            prompt="email"
            type="email"
            placeholder="your@email.com"
            value={fields.email}
            onChange={patch("email")}
            required
          />
          <TerminalTextarea
            prompt="msg"
            placeholder="what's on your mind..."
            value={fields.message}
            onChange={patch("message")}
            required
          />
        </div>

        {/* Submit row */}
        <div className="pl-3 pt-1">
          {status === "sent" ? (
            <p className="text-xs text-brand">
              {PROMPT} <span className="text-muted">message queued.</span>{" "}
              i&apos;ll get back to you.
            </p>
          ) : (
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-1.5 text-xs text-brand transition-colors hover:text-brand-strong disabled:opacity-60"
            >
              <span>{PROMPT}</span>
              <span>{status === "sending" ? "sending..." : "send-message"}</span>
              {status === "idle" && (
                <span className="inline-block h-3.5 w-[7px] bg-brand animate-blink" />
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

/* ── sub-components ────────────────────────────────────────── */

type FieldProps = {
  prompt: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

function TerminalField({ prompt, type, placeholder, value, onChange, required }: FieldProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-xs text-muted">{prompt} →</span>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 border-b border-border bg-transparent pb-1 text-sm text-foreground outline-none placeholder:text-muted/35 focus:border-brand/50 transition-colors"
      />
    </div>
  );
}

type TextareaProps = {
  prompt: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
};

function TerminalTextarea({ prompt, placeholder, value, onChange, required }: TextareaProps) {
  return (
    <div className="flex gap-3">
      <span className="w-14 shrink-0 pt-0.5 text-xs text-muted">{prompt} →</span>
      <textarea
        required={required}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 resize-none border-b border-border bg-transparent pb-1 text-sm text-foreground outline-none placeholder:text-muted/35 focus:border-brand/50 transition-colors"
      />
    </div>
  );
}
