import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { abs, descriptor, logos, share } from "@/lib/media";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHead, WorkWithMarkCTA } from "@/components/site/Bits";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Mark Cox International Football Consultancy" },
      {
        name: "description",
        content:
          "Technical leadership, player and coach development, football development programmes, and international football consultancy for clubs, academies, federations, and projects.",
      },
      { property: "og:title", content: "Services — Mark Cox International Football Consultancy" },
      { property: "og:description", content: descriptor },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/services") },
      { property: "og:image", content: share.services },
      { name: "twitter:image", content: share.services },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: abs("/services") }],
  }),
  component: Services,
});

const groups: { letter: string; title: string; items: [string, string][] }[] = [
  {
    letter: "A",
    title: "Technical Leadership",
    items: [
      ["Technical Direction", "Setting and leading the technical identity of a club, academy, or football programme, and holding it to a consistent standard."],
      ["Football Operations", "Organising the day-to-day football environment so coaching, planning, and staff responsibilities work together."],
      ["Club Development", "Practical review and development of the football side of a club, from squad structure to coaching standards."],
      ["Technical Planning", "Season and multi-season planning across training content, competition, and player progression."],
      ["Football Structure & Strategy", "Defining how teams, age groups, staff, and pathways connect into one coherent structure."],
      ["Technical Assessments", "Independent assessment of coaching, training content, playing style, and development outcomes."],
    ],
  },
  {
    letter: "B",
    title: "Player & Coach Development",
    items: [
      ["Player Development", "Individual and team-based development approaches focused on technical growth, decision-making, confidence, football intelligence, and long-term progression."],
      ["Academy Development", "Building academy structures, curriculum, and standards that produce first-team ready players."],
      ["Youth Football Development", "Age-appropriate development plans and session design for youth football."],
      ["Talent Identification & Scouting", "Identification frameworks and practical scouting support to find and track emerging players."],
      ["Coach Education & Mentoring", "On-grass mentoring and structured coach education for local and developing coaches."],
      ["Performance Development", "Raising standards in training, preparation, and competitive performance."],
    ],
  },
  {
    letter: "C",
    title: "Football Development",
    items: [
      ["Grassroots Football Development", "Programmes that grow participation and quality at the base of the game."],
      ["Youth Football Strategy", "Long-term strategy connecting grassroots, youth, and elite pathways."],
      ["Academy Pathway Development", "Clear routes from entry level through to senior football."],
      ["Community Football Projects", "Projects delivered with communities, schools, and local organisations."],
      ["Coach Development Programmes", "Sustainable coach development that leaves capability behind."],
    ],
  },
  {
    letter: "D",
    title: "International Consultancy",
    items: [
      ["International Football Projects", "Advisory and delivery support for football projects across markets."],
      ["Technical Consultancy", "Focused technical input for federations, clubs, academies, and investors."],
      ["International Football Partnerships", "Building working relationships between football organisations."],
      ["Club & Academy Connections", "Introductions and structured links across an international network."],
      ["International Development Opportunities", "Creating routes for players, coaches, and programmes to progress internationally."],
      ["Football Market Entry & Advisory", "Guidance for organisations entering new football markets."],
    ],
  },
];

function ServiceItem({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-display text-base font-bold uppercase tracking-tight md:text-lg">
          {title}
        </span>
        <Plus
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-45",
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-400 ease-out",
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <p className="overflow-hidden pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
          {text}
        </p>
      </div>
    </li>
  );
}

function Services() {
  return (
    <>
      <Section className="pt-16 pb-14 md:pt-24 md:pb-20">
        <SectionHead
          eyebrow="Consultancy"
          title="What Mark Cox International Football Consultancy Provides"
          sub="Four areas of work, delivered on the grass and in the boardroom."
        />
      </Section>

      {groups.map((g, i) => (
        <Section key={g.letter} className={cn("py-12 md:py-16", i > 0 && "border-t border-border")}>
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-16">
            <Reveal>
              <p className="eyebrow text-muted-foreground">{g.letter}</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold uppercase md:text-4xl">
                {g.title}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="border-t border-border">
                {g.items.map(([t, d]) => (
                  <ServiceItem key={t} title={t} text={d} />
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section className="py-20 md:py-24">
        <Reveal className="border border-border bg-secondary/60 p-8 md:p-14">
          <p className="eyebrow text-muted-foreground">Strategic Partnership</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-12">
            <img
              src={logos.asl.src}
              alt={logos.asl.alt}
              loading="lazy"
              width={112}
              height={112}
              className="h-24 w-24 object-contain"
            />
            <div>
              <h2 className="font-display text-xl font-bold uppercase md:text-2xl">
                MCIFC × ASL Elite Sports
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Mark Cox International Football Consultancy focuses on football expertise,
                technical direction, coaching, and development. ASL Elite Sports supports the
                consultancy through sports marketing, brand management, communications, business
                development, project management, and international partnership development.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <WorkWithMarkCTA />
    </>
  );
}
