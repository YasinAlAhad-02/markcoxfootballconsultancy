import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { logos } from "@/lib/media";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Mark" },
  { to: "/services", label: "Services" },
  { to: "/achievements", label: "Achievements & Vision" },
  { to: "/journey", label: "The Journey" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 backdrop-blur-sm transition-colors",
        scrolled ? "bg-background/95" : "bg-background/80",
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logos.mcifc.src}
            alt={logos.mcifc.alt}
            className="h-9 w-auto shrink-0 mix-blend-multiply md:h-11"
            width={160}
            height={44}
          />
          <span className="sr-only">Mark Cox International Football Consultancy</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-ink" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="eyebrow rule-link transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="eyebrow bg-ink px-5 py-3 text-primary-foreground transition-colors hover:bg-foreground"
          >
            Work With Mark
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="justify-self-end p-2 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="eyebrow border-b border-border/70 py-4 text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="eyebrow mt-4 mb-4 bg-ink px-5 py-4 text-center text-primary-foreground"
            >
              Work With Mark
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
