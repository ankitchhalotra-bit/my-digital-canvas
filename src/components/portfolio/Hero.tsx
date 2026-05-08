import heroImg from "@/assets/hero-portrait.jpg";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 reveal">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            ◆ Java Software Engineer · Fintech
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight">
            Building <em className="italic text-primary/90">scalable</em>
            <br />
            backend
            <br />
            <span className="relative inline-block">
              systems.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 75 2, 150 6 T 298 4"
                  stroke="var(--primary)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Ankit Chhalotra</span>, a
            Software Engineer with 1+ year of experience in fintech, specializing in
            Java, Spring Boot, and the Postilion Realtime Framework for ATM & POS systems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              See selected work
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            <div className="flex items-center gap-1">
              {[
                { Icon: Github, href: "https://github.com/Ankitchhalotra" },
                { Icon: Linkedin, href: "https://linkedin.com/in/ankit-chhalotra" },
                { Icon: Mail, href: "mailto:chhalotraankit@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full hover:bg-foreground/5 hover:text-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative reveal" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-ink">
            <img
              src={heroImg}
              alt="Portrait"
              width={1024}
              height={1280}
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-cream font-mono text-xs">
              <div>
                <div className="opacity-60">INDORE</div>
                <div className="opacity-60">INDIA</div>
              </div>
              <div className="text-right">
                <div className="opacity-60">PORTFOLIO</div>
                <div className="opacity-60">VOL. 05 / 2026</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-primary/40 flex items-center justify-center font-mono text-[10px] text-primary animate-spin-slow"
               style={{ animation: "spin 18s linear infinite" }}>
            ★ OPEN · TO · WORK ·
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 border-y border-border py-5 overflow-hidden">
        <div className="flex marquee whitespace-nowrap font-display text-3xl md:text-4xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center shrink-0">
              {["Java", "Spring Boot", "Hibernate", "Postilion", "MySQL", "Docker", "AWS", "REST APIs"].map(
                (w) => (
                  <span key={w} className="italic text-foreground/80 inline-flex items-center">
                    <span className="px-12">{w}</span>
                    <span className="text-primary not-italic">✺</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}