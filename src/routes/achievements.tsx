import { createFileRoute } from "@tanstack/react-router";
import { abs, descriptor, links, photos, share } from "@/lib/media";
import { Reveal } from "@/components/site/Reveal";
import {
  PhotoBreak,
  Section,
  SectionHead,
  VideoCard,
  WorkWithMarkCTA,
} from "@/components/site/Bits";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Vision | Mark Cox International Football Consultancy" },
      {
        name: "description",
        content:
          "Career milestones, the SAFF U-20 Championship 2026 with Bangladesh, coaching philosophy, and the long-term vision of Mark Cox International Football Consultancy.",
      },
      { property: "og:title", content: "Achievements & Vision — Mark Cox" },
      { property: "og:description", content: descriptor },
      { property: "og:type", content: "article" },
      { property: "og:url", content: abs("/achievements") },
      { property: "og:image", content: share.achievements },
      { name: "twitter:image", content: share.achievements },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: abs("/achievements") }],
  }),
  component: Achievements,
});

const timeline = [
  ["Academy Football, England", "Coaching and development experience within Premier League academy environments, including Manchester United, Stoke City, and Wolverhampton Wanderers academy settings."],
  ["International Coaching & Development", "Coaching, coach education, and development work across a range of international football environments."],
  ["Pakistan", "Football development work including coaching, grassroots development, and support for emerging players and local coaches."],
  ["Zang Bazar FC", "Technical direction and club-level football development."],
  ["Bangladesh U-20", "Technical and coaching involvement with the U-20 national team programme, including camp at the National Stadium, Dhaka."],
  ["SAFF U-20 Championship 2026", "Bangladesh U-20 crowned champions in the Maldives."],
  ["Mark Cox International Football Consultancy", "International consultancy for clubs, academies, federations, and football projects."],
];

const principles = [
  ["Develop", "Build players, coaches, and football environments."],
  ["Connect", "Create relationships across clubs, academies, communities, and football markets."],
  ["Progress", "Turn development into meaningful football opportunities."],
];

const vision = [
  "Developing the next generation",
  "Stronger youth and academy pathways",
  "Developing local coaches",
  "Identifying emerging talent",
  "Grassroots football development",
  "International opportunities",
  "Connecting clubs and academies",
  "Building sustainable football environments",
  "Supporting international football projects",
];

function Achievements() {
  return (
    <>
      <Section className="pt-16 pb-14 md:pt-24 md:pb-20">
        <SectionHead
          eyebrow="Record"
          title="Achievements & Vision"
          sub="Experience that informs the next generation."
        />
      </Section>

      {/* SAFF FEATURE */}
      <Section className="pb-20 md:pb-28">
        <Reveal className="img-zoom">
          <img
            src={photos.award.src}
            alt={photos.award.alt}
            loading="lazy"
            className="aspect-16/10 w-full object-cover md:aspect-21/9"
          />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] font-extrabold uppercase md:text-6xl">
              SAFF U-20 Champions
              <span className="block text-gold">2026</span>
            </h2>
            <p className="eyebrow mt-4 text-muted-foreground">Bangladesh</p>
          </Reveal>
          <Reveal delay={80} className="space-y-5 text-muted-foreground md:text-lg">
            <p>
              A championship built on belief, discipline, team culture, and collective
              responsibility.
            </p>
            <p className="text-base">
              The photographs on this page are from the camp at the National Stadium in Dhaka, the
              training environment, the tournament in the Maldives, and the reception for the
              squad on their return.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[photos.camp, photos.balls, photos.trophy, photos.champions].map((p, i) => (
            <Reveal as="li" key={p.src} delay={i * 70} className="img-zoom">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-3/4 w-full object-cover"
              />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* TIMELINE */}
      <Section className="border-t border-border py-20 md:py-28">
        <SectionHead eyebrow="Career" title="Timeline" />
        <ol className="mt-12 border-l border-border">
          {timeline.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 50} className="relative pb-10 pl-8 md:pl-14">
              <span className="absolute top-2 -left-[3px] size-1.5 rounded-full bg-ink" />
              <h3 className="font-display text-lg font-bold uppercase md:text-2xl">{t}</h3>
              <p className="mt-2 max-w-2xl text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-2 text-sm text-muted-foreground/80 italic">
          Timeline entries are maintained for accuracy and confirmed with Mark before publication.
        </p>
      </Section>

      <PhotoBreak
        src={photos.champions.src}
        alt={photos.champions.alt}
        caption="SAFF U-20 Champions — 2026"
      />

      {/* APPROACH */}
      <Section className="py-20 md:py-28">
        <p className="eyebrow text-muted-foreground">The Approach</p>
        <Reveal>
          <p className="mt-6 font-display text-4xl leading-[0.95] font-extrabold uppercase md:text-8xl">
            Think forward.
            <span className="block text-muted-foreground/40">Play forward.</span>
          </p>
        </Reveal>
        <ul className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {principles.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 70} className="bg-background p-8 md:p-10">
              <h3 className="font-display text-xl font-bold uppercase">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* VIDEO 2 */}
      <Section className="pb-20 md:pb-28">
        <SectionHead eyebrow="Video" title="International Football In Action" />
        <Reveal className="mt-10 aspect-16/10 md:aspect-21/9">
          <VideoCard
            href={links.video2}
            image={photos.pakistan.src}
            alt={photos.pakistan.alt}
            eyebrow="Video • YouTube"
            title="International Football In Action"
            text="A look at the international development work behind the consultancy. Hosted on YouTube."
          />
        </Reveal>
      </Section>

      {/* VISION */}
      <Section className="border-t border-border py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHead eyebrow="Vision" title="Looking Ahead" />
          <div>
            <Reveal className="text-muted-foreground md:text-lg">
              The long-term focus of the consultancy is building football environments that keep
              improving after the project ends — stronger pathways, better-equipped local coaches,
              and players with somewhere to go.
            </Reveal>
            <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {vision.map((v) => (
                <li key={v} className="bg-background px-4 py-3 text-sm">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <WorkWithMarkCTA />
    </>
  );
}
