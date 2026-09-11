import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { descriptor, links, logos } from "@/lib/media";

const socials = [
  { href: links.aslFacebook, label: "ASL Elite Sports on Facebook", Icon: Facebook },
  { href: links.aslInstagram, label: "ASL Elite Sports on Instagram", Icon: Instagram },
  { href: links.aslLinkedin, label: "ASL Elite Sports on LinkedIn", Icon: Linkedin },
  { href: links.aslEmail, label: "Email ASL Elite Sports", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <p className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">MCIFC</p>
            <p className="eyebrow mt-3 text-primary-foreground/70">
              Mark Cox International Football Consultancy
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/60">
              {descriptor}
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="eyebrow text-primary-foreground/50">
              Strategic Sports Marketing &amp; Management Partner
            </p>
            <img
              src={logos.asl.src}
              alt={logos.asl.alt}
              loading="lazy"
              width={120}
              height={120}
              className="mt-5 h-20 w-20 object-contain"
            />
            <p className="eyebrow mt-8 text-primary-foreground/50">
              Connect with ASL Elite Sports
            </p>
            <ul className="mt-4 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center border border-primary-foreground/25 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/45">
            © 2026 ASL Elite Sports. All Rights Reserved.
          </p>
          <img
            src={logos.asl.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={28}
            height={28}
            className="h-7 w-7 object-contain opacity-50"
          />
        </div>
      </div>
    </footer>
  );
}
