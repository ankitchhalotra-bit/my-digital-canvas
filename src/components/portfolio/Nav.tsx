import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="font-display text-xl tracking-tight hover:text-primary transition-colors"
        >
          ankit<span className="text-primary">.</span>
        </button>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="group relative text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="font-mono text-xs text-primary mr-1">0{i + 1}.</span>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
        <a
          href="/AnkitChhalotra_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium border border-foreground/20 hover:border-primary hover:text-primary px-4 py-2 rounded-full transition-all"
        >
          Resume ↓
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-px bg-foreground mb-1.5" />
          <div className="w-6 h-px bg-foreground" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l, i) => (
              <li key={l.id}>
                <button onClick={() => go(l.id)} className="text-foreground/80">
                  <span className="font-mono text-xs text-primary mr-2">0{i + 1}.</span>
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a href="/AnkitChhalotra_Resume.pdf" download className="text-primary">Resume ↓</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}