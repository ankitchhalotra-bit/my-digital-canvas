import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ankit Chhalotra — Java Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ankit Chhalotra — Java Software Engineer specializing in Spring Boot, Hibernate, REST APIs, and the Postilion Realtime Framework for fintech.",
      },
      { property: "og:title", content: "Ankit Chhalotra — Java Software Engineer" },
      {
        property: "og:description",
        content: "Selected work, experience, and ways to get in touch.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
