import type { ReactNode } from "react";

export function Section({
  id,
  number,
  eyebrow,
  title,
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-28 md:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs text-primary">{number}</span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {eyebrow}
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-4xl mb-16">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}