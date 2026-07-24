import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
