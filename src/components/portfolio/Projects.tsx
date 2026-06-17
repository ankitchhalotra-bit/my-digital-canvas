import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";
import { Tilt } from "./VisualFX";
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
    alwaysSplit: false,
  },
  {
    title: "RESTful API Platform",
    blurb:
      "Designed and implemented RESTful web services for CRUD operations on user data, with logging, SonarQube quality gates, and Postman test suites.",
    tech: ["Spring Boot", "Spring Data JPA", "MySQL", "SonarQube"],
    img: p2,
    href: "https://github.com/Ankitchhalotra",
    span: "lg:col-span-5",
    alwaysSplit: false,
  },
  {
    title: "Algorithm Visualizer",
    blurb:
      "Web platform that helps users understand algorithms through animations and step-by-step execution, backed by a Java/Servlet/JSP stack.",
    tech: ["Java", "Servlet", "JSP", "MySQL", "JS"],
    img: p3,
    href: "https://github.com/Ankitchhalotra",
    span: "lg:col-span-12",
    alwaysSplit: true,
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
        {projects.map((p) => {
          // alwaysSplit => image|details side-by-side on every breakpoint
          // otherwise   => split on mobile, stacked on lg+
          const wrapperCls = p.alwaysSplit
            ? "flex gap-5 items-start"
            : "flex gap-5 lg:block items-start";
          const imgCls = p.alwaysSplit
            ? "w-1/2 aspect-square lg:aspect-[4/3]"
            : "w-1/2 aspect-square lg:w-full lg:aspect-[4/3]";
          const detailsCls = p.alwaysSplit
            ? "w-1/2 flex flex-col gap-3"
            : "w-1/2 lg:w-full flex flex-col gap-3 lg:mt-5 lg:flex-row lg:items-start lg:justify-between";

          return (
            <a
              key={p.title}
              href={p.href}
              className={`group relative col-span-12 ${p.span} block`}
            >
              <div className={wrapperCls}>
                <Tilt max={6} className={`shrink-0 ${imgCls}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-muted w-full h-full ring-1 ring-border/60 group-hover:ring-primary/40 transition-shadow group-hover:shadow-[0_30px_80px_-30px_var(--primary)]">
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
                </Tilt>
                <div className={detailsCls}>
                  <div className="min-w-0">
                    <h3 className="font-display tracking-tight group-hover:text-primary transition-colors text-xl lg:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-md text-sm lg:text-base">
                      {p.blurb}
                    </p>
                  </div>
                  <ul className={`flex flex-wrap gap-2 ${p.alwaysSplit ? "lg:justify-end lg:max-w-[40%]" : "lg:justify-end lg:max-w-[40%]"}`}>
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
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
