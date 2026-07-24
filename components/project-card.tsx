import type { Project } from "@/lib/projects";
import { PipelineFlow } from "@/components/pipeline-flow";

type ProjectCardProps = {
  project: Project;
};

function StackTag({ label }: { label: string }) {
  return (
    <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted transition-colors group-hover:border-brand/30 group-hover:bg-brand/8 group-hover:text-brand/75">
      {label}
    </span>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, subtitle, pipeline, sections, description, stack } = project;

  return (
    <article className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-white/12 hover:bg-white/[0.025]">
      <div>
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="mt-1 font-mono text-xs text-muted">{subtitle}</p>
      </div>

      {pipeline && <PipelineFlow nodes={pipeline} />}

      {sections && (
        <div className="mt-5 space-y-4">
          {sections.map(({ label, text, highlight }) => (
            <div key={label}>
              <p className="font-mono text-xs text-brand">// {label}</p>
              <p
                className={`mt-1 text-sm leading-relaxed ${
                  highlight ? "text-foreground/85" : "text-muted"
                }`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      )}

      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <StackTag key={tech} label={tech} />
        ))}
      </div>
    </article>
  );
}
