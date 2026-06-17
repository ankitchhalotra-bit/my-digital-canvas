import { useEffect, useRef, useState } from "react";

/**
 * Global visual effects layer:
 *  - cursor-following amber spotlight (desktop only)
 *  - slow floating gradient "blobs" in the background
 *  - subtle scroll-progress bar
 */
export function VisualFX() {
  const spotRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (!isCoarse) {
      const onMove = (e: MouseEvent) => {
        if (!spotRef.current) return;
        spotRef.current.style.setProperty("--x", `${e.clientX}px`);
        spotRef.current.style.setProperty("--y", `${e.clientY}px`);
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[60] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      {/* Floating gradient blobs */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
      </div>

      {/* Cursor spotlight */}
      <div
        ref={spotRef}
        className="pointer-events-none fixed inset-0 z-[55] hidden md:block"
        style={{
          background:
            "radial-gradient(360px circle at var(--x, -200px) var(--y, -200px), color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)",
          mixBlendMode: "multiply",
        }}
        aria-hidden
      />
    </>
  );
}

/**
 * 3D tilt wrapper. Wrap any element to get a smooth perspective tilt on hover.
 * Disables itself on touch devices.
 */
export function Tilt({
  children,
  className = "",
  max = 10,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`tilt ${className}`}
    >
      <div className="tilt-inner">
        {children}
        {glare && <div className="tilt-glare" aria-hidden />}
      </div>
    </div>
  );
}