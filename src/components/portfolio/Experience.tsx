import { Section } from "./Section";

const items = [
  {
    when: "2023 — Now",
    role: "Senior Software Engineer",
    org: "Northwind Labs",
    detail:
      "Leading the platform team. Rebuilt the analytics pipeline, cutting query latency by 8×.",
  },
  {
    when: "2021 — 2023",
    role: "Full-Stack Engineer",
    org: "Foundry.io",
    detail:
      "Shipped the v2 design system and migrated 40+ apps to a unified component library.",
  },
  {
    when: "2019 — 2021",
    role: "Software Engineer",
    org: "Beacon Studio",
    detail:
      "Built data-heavy dashboards for Fortune-500 clients. Mentored two junior engineers.",
  },
  {
    when: "2015 — 2019",
    role: "B.Sc. Computer Science",
    org: "University of Zagreb",
    detail: "Graduated with honors. Thesis on incremental rendering algorithms.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      number="04"
      eyebrow="Track Record"
      title={<>A short timeline of where I've been.</>}
    >
      <ol className="relative">
        {items.map((it, i) => (
          <li
            key={i}
            className="grid md:grid-cols-12 gap-6 py-8 border-t border-border first:border-t-0"
          >
            <div className="md:col-span-3 font-mono text-xs tracking-widest uppercase text-primary pt-2">
              {it.when}
            </div>
            <div className="md:col-span-6">
              <h3 className="font-display text-3xl tracking-tight">{it.role}</h3>
              <div className="text-muted-foreground mt-1">{it.org}</div>
            </div>
            <p className="md:col-span-3 text-muted-foreground pt-2">{it.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}