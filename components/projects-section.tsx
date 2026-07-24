import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        // selected work
      </p>

      <div className="space-y-4">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {regular.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {regular.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
