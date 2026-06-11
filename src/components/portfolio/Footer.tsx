import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export function Footer() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const key = "visitor_counted_v1";
    const run = async () => {
      try {
        if (!sessionStorage.getItem(key)) {
          const { data, error } = await supabase.rpc("increment_visitor_count");
          if (!error && data != null) {
            sessionStorage.setItem(key, "1");
            if (!cancelled) setCount(Number(data));
            return;
          }
        }
        const { data } = await supabase
          .from("visitor_stats")
          .select("count")
          .eq("id", 1)
          .maybeSingle();
        if (!cancelled && data) setCount(Number(data.count));
      } catch {
        /* ignore */
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ankit Chhalotra · Built with Java-grade care.</div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <Eye className="w-3.5 h-3.5 text-primary" />
          <span>
            {count === null ? "—" : count.toLocaleString()} visitors
          </span>
          <span className="opacity-50">·</span>
          <span>v05.2026 · Indore, IN</span>
        </div>
      </div>
    </footer>
  );
}