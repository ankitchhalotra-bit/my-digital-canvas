export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Alex Kovac · Crafted with care.</div>
        <div className="font-mono text-xs">v07.2026 · Zagreb, HR</div>
      </div>
    </footer>
  );
}