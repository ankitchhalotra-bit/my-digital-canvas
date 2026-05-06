import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Lumen Analytics",
    blurb:
      "Real-time product analytics platform processing 2B events per month with sub-second query latency.",
    tech: ["TypeScript", "Rust", "ClickHouse", "Next.js"],
    img: p1,
    href: "#",
    span: "lg:col-span-7",
  },
  {
    title: "Helio Design System",
    blurb:
      "Open-source component library with 80+ accessible primitives, used by 12k+ developers.",
    tech: ["React", "Radix", "Tailwind", "Storybook"],
    img: p2,
    href: "#",
    span: "lg:col-span-5",
  },
  {
    title: "Drift Editor",
    blurb:
      "Collaborative markdown editor with CRDT-based sync, offline-first and end-to-end encrypted.",
    tech: ["Yjs", "WebRTC", "IndexedDB"],
    img: p3,
    href: "#",
    span: "lg:col-span-5",
  },
  {
    title: "Orbit Scheduler",
    blurb:
      "Distributed cron system handling 50M+ jobs/day with exactly-once semantics and visual debugging.",
    tech: ["Go", "Postgres", "Kafka"],
    img: p4,
    href: "#",
    span: "lg:col-span-7",
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