export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ankit Chhalotra · Built with Java-grade care.</div>
        <div className="font-mono text-xs">v05.2026 · Indore, IN</div>
      </div>
    </footer>
  );
}