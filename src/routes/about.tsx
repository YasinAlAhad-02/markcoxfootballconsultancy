import { createFileRoute } from "@tanstack/react-router";
import { descriptor, photos } from "@/lib/media";
import { Reveal } from "@/components/site/Reveal";
import { PhotoBreak, Section, SectionHead, WorkWithMarkCTA } from "@/components/site/Bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mark Cox | UEFA A Licensed Coach & Football Consultant" },
      {
        name: "description",
        content:
          "Mark Cox is a UEFA A Licensed coach and international football consultant working in technical leadership, player development, talent identification, and coach education.",
      },
      { property: "og:title", content: "About Mark Cox — International Football Consultancy" },
      { property: "og:description", content: descriptor },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const focus = [
  "International football coaching",
  "Technical leadership",
  "Player development",
  "Youth and academy development",
  "Talent identification",
  "Coach education and mentoring",
  "Grassroots football development",
  "International football consultancy",
];

function About() {
  return (
    <>
      <Section className="pt-16 pb-16 md:pt-24 md:pb-24">
        <SectionHead
          eyebrow="Profile"
          title="About Mark Cox"
          sub="Experience. Development. Leadership."
        />
        <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Mark Cox is a UEFA A Licensed coach and international football consultant. His
              career has been built on the training ground — coaching players, developing coaches,
              and shaping the technical environments in which both improve.
            </p>
            <p>
              He works across youth and academy football, talent identification, and grassroots
              development, and has coached and advised in a range of international football
              settings. That breadth informs how he reads an organisation: what its players
              actually need, what its coaches can deliver, and where the pathway breaks down.
            </p>
            <p>
              In Bangladesh, Mark&apos;s technical and coaching involvement with the U-20 national
              team programme ran through camp at the National Stadium in Dhaka to the SAFF U-20
              Championship in 2026. In Pakistan, his work has focused on coaching, grassroots
              development, and supporting emerging players and local coaches.
            </p>
            <p>
              Mark Cox International Football Consultancy is the platform for that work: technical
              direction, development programmes, and international consultancy for clubs,
              academies, federations, and football projects.
            </p>
            <p className="text-sm text-muted-foreground/80 italic">
              Career details and credentials on this site are maintained for accuracy and reviewed
              with Mark before publication.
            </p>
          </Reveal>

          <div>
            <Reveal className="img-zoom">
              <img
                src={photos.camp.src}
                alt={photos.camp.alt}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </Reveal>
            <Reveal className="mt-10" delay={80}>
              <p className="eyebrow text-muted-foreground">Areas of Focus</p>
              <ul className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2">
                {focus.map((f) => (
                  <li key={f} className="bg-background px-4 py-3 text-sm">
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <PhotoBreak
        src={photos.balls.src}
        alt={photos.balls.alt}
        caption="The work continues."
      />

      <WorkWithMarkCTA />
    </>
  );
}
