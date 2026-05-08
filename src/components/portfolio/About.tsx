import { Section } from "./Section";

const stats = [
  { value: "1+", label: "Years in fintech" },
  { value: "2", label: "Production projects" },
  { value: "7.37", label: "B.Tech CGPA" },
  { value: "∞", label: "Lines of Java" },
];

export function About() {
  return (
    <Section
      id="about"
      number="01"
      eyebrow="About"
      title={
        <>
          A generalist who <em className="italic text-primary">cares</em> about the details
          others overlook.
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Software Engineer at Lise Infotech, working in the fintech industry
            on ATM & POS driver development using the Postilion Realtime Framework.
            My day-to-day is Java, Spring Boot, Hibernate, and the kind of high-throughput
            production systems where every millisecond — and every transaction — matters.
          </p>
          <p>
            I enjoy the deep work of enterprise backend engineering: layered architecture,
            clean RESTful APIs, JDBC/JPA query optimization, and SonarQube-compliant code.
            I lean into RCA and debugging in real-time environments, and I use AI-assisted
            tools (Codex, Claude Code) to ship faster without cutting corners.
          </p>
          <p>
            I graduated in Computer Science & Engineering from Chameli Devi Group of
            Institutions, Indore (2025), and I'm based in India.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8">
              <div className="font-display text-5xl text-primary mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}