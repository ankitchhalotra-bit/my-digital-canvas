import { Section } from "./Section";

const items = [
  {
    when: "Jun 2025 — Now",
    role: "Software Engineer",
    org: "Lise Infotech Pvt. Ltd. — On-site",
    detail:
      "Building ATM & POS drivers on the Postilion Realtime Framework. Spring Boot/MVC backends, JDBC/JPA optimization, RCA, and SonarQube-compliant secure REST APIs.",
  },
  {
    when: "Sep 2024 — Mar 2025",
    role: "Software Development Intern",
    org: "Oak Tree Software Pvt. Ltd. — On-site",
    detail:
      "Built RESTful APIs and integrated dynamic frontends. End-to-end full-stack work across the project lifecycle, from requirement analysis to deployment.",
  },
  {
    when: "Aug 2021 — Jun 2025",
    role: "B.Tech, Computer Science & Engineering",
    org: "Chameli Devi Group of Institutions, Indore",
    detail: "CGPA 7.37. Coursework spanning data structures, databases, and distributed systems.",
  },
  {
    when: "Jul 2018 — Jul 2021",
    role: "Higher Secondary Certification",
    org: "Abhigyan International School, Sanawad",
    detail: "Aggregate 76.6%.",
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