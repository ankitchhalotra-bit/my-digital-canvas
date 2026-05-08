import { Section } from "./Section";

const groups = [
  {
    name: "Languages",
    items: ["Java (J2SE/J2EE)", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    name: "Frameworks",
    items: ["Spring Boot", "Spring MVC", "Hibernate", "JPA", "Postilion RT"],
  },
  {
    name: "Backend",
    items: ["REST APIs", "JDBC", "MySQL", "JUnit", "Mockito"],
  },
  {
    name: "Platform",
    items: ["AWS (EC2, RDS)", "Docker", "GitHub Actions", "SonarQube", "Postman"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      number="02"
      eyebrow="Toolkit"
      title={<>The tools I reach for, day in and day out.</>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
        {groups.map((g) => (
          <div key={g.name} className="bg-background p-8">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">
              {g.name}
            </div>
            <ul className="space-y-3">
              {g.items.map((it) => (
                <li key={it} className="font-display text-2xl tracking-tight">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}