import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const stops = [
  { id: "the-camp", label: "The Camp" },
  { id: "the-work", label: "The Work" },
  { id: "the-journey", label: "The Journey" },
  { id: "the-tournament", label: "The Tournament" },
  { id: "the-championship", label: "The Championship" },
  { id: "the-future", label: "The Future" },
];

export function JourneyRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.45;
      let current = 0;
      stops.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none fixed top-1/2 left-4 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-4">
        {stops.map((s, i) => (
          <li key={s.id} className="flex items-center gap-3">
            <span
              className={cn(
                "h-px transition-all duration-500",
                i === active ? "w-8 bg-ink" : "w-4 bg-border",
              )}
            />
            <a
              href={`#${s.id}`}
              className={cn(
                "eyebrow transition-colors",
                i === active ? "text-ink" : "text-muted-foreground/60 hover:text-ink",
              )}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
