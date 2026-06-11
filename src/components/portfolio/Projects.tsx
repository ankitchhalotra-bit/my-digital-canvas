import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "ATM & POS Drivers",
    blurb:
      "Enterprise ATM & POS driver development on the Postilion Realtime Framework — supporting high-throughput transaction processing for fintech integrations.",
    tech: ["Java", "Postilion", "Spring Boot", "JDBC"],
    img: p1,
    href: "#",
    span: "lg:col-span-7",
  },
  {
    title: "RESTful API Platform",
    blurb:
      "Designed and implemented RESTful web services for CRUD operations on user data, with logging, SonarQube quality gates, and Postman test suites.",
    tech: ["Spring Boot", "Spring Data JPA", "MySQL", "SonarQube"],
    img: p2,
    href: "https://github.com/Ankitchhalotra",
    span: "lg:col-span-5",
  },
  {
    title: "Algorithm Visualizer",
    blurb:
      "Web platform that helps users understand algorithms through animations and step-by-step execution, backed by a Java/Servlet/JSP stack.",
    tech: ["Java", "Servlet", "JSP", "MySQL", "JS"],
    img: p3,
    href: "https://github.com/Ankitchhalotra",
    span: "lg:col-span-12",
  },
];

export function Projects() {
  return (
    <Section
      id="work"
      number="03"
      eyebrow="Selected Work"
      title={<>Projects I'm proud to have shipped.</>}
    >
      <div className="grid lg:grid-cols-12 gap-8">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className={`group relative col-span-12 ${p.span} block`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute top-5 right-5 p-2.5 rounded-full bg-cream/90 text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-display text-3xl tracking-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted-foreground max-w-md">{p.blurb}</p>
              </div>
              <ul className="hidden md:flex flex-wrap justify-end gap-2 max-w-[40%]">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}