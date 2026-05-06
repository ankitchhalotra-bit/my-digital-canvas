import { Section } from "./Section";

const stats = [
  { value: "6+", label: "Years building products" },
  { value: "40+", label: "Shipped projects" },
  { value: "12", label: "Open-source repos" },
  { value: "∞", label: "Cups of coffee" },
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
            I've spent the last six years shipping web products — from early-stage
            prototypes that found their first users, to platforms serving millions of
            requests a day. I move fluidly between TypeScript, Rust, and SQL, and I'm
            equally comfortable in a Figma file or a query planner.
          </p>
          <p>
            What I love most is the messy middle: turning a vague idea into a tight,
            testable spec, then into a product people actually want to use. I write
            code that's easy to delete and design systems that are easy to extend.
          </p>
          <p>
            Outside the editor I'm usually running trails, brewing pour-over, or
            tinkering with synthesizers.
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