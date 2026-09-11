import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-[1400px] px-5 md:px-10", className)}>
      {children}
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
      <h2 className="mt-4 font-display text-3xl font-extrabold uppercase md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground md:text-xl">{sub}</p>}
    </Reveal>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="eyebrow rule-link mt-8 inline-flex text-ink">
      {children}
      <ArrowRight className="size-3.5" aria-hidden="true" />
    </Link>
  );
}

export function PhotoBreak({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[45vh] w-full object-cover md:h-[70vh]"
      />
      <figcaption className="eyebrow absolute bottom-0 left-0 bg-ink px-5 py-3 text-primary-foreground md:px-8 md:py-4">
        {caption}
      </figcaption>
    </figure>
  );
}

export function VideoCard({
  href,
  image,
  alt,
  eyebrow,
  title,
  text,
}: {
  href: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="img-zoom group relative block bg-ink"
    >
      <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-6 md:p-10">
        <span className="flex size-12 items-center justify-center border border-primary-foreground/50 text-primary-foreground">
          <Play className="size-4" aria-hidden="true" />
        </span>
        <p className="eyebrow mt-6 text-primary-foreground/70">{eyebrow}</p>
        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-primary-foreground md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm text-primary-foreground/70">{text}</p>
        <span className="eyebrow rule-link mt-6 inline-flex text-gold">
          Watch on YouTube
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

export function WorkWithMarkCTA() {
  return (
    <section className="bg-ink text-primary-foreground">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-10 md:py-28">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold uppercase md:text-5xl">
          Ready to discuss a football project?
        </h2>
        <Link
          to="/contact"
          className="eyebrow rule-link shrink-0 border border-primary-foreground/40 px-8 py-4 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
        >
          Work With Mark
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
