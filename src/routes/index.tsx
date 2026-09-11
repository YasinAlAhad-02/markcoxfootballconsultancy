import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { descriptor, links, photos } from "@/lib/media";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { JourneySlider } from "@/components/site/JourneySlider";
import { JourneyRail } from "@/components/site/JourneyRail";
import {
  PhotoBreak,
  Section,
  SectionHead,
  TextLink,
  VideoCard,
  WorkWithMarkCTA,
} from "@/components/site/Bits";

const TITLE = "Mark Cox International Football Consultancy | Football Technical Direction & Development";
const DESC =
  "Mark Cox International Football Consultancy provides football technical direction, coaching, player development, talent identification, academy development, and international football consultancy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: "MARK COX INTERNATIONAL FOOTBALL CONSULTANCY" },
      { property: "og:description", content: descriptor },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const credibility = [
  { k: "27+", label: "Years", sub: "International football experience" },
  { k: "UEFA A", label: "Licensed Coach", sub: "Coaching qualification" },
  { k: "5", label: "Continents", sub: "International coaching & development" },
  { k: "SAFF U-20", label: "2026 Champion", sub: "Bangladesh" },
];

const work = [
  { n: "01", title: "The Camp", sub: "SAFF U-20 / National Stadium, Dhaka", photo: photos.camp },
  { n: "02", title: "The Work", sub: "Coaching, tactics, and player development", photo: photos.coaching },
  { n: "03", title: "The Journey", sub: "International football and Pakistan", photo: photos.pakistan },
  { n: "04", title: "The Tournament", sub: "Bangladesh U-20", photo: photos.balls },
  { n: "05", title: "The Championship", sub: "SAFF U-20 Championship 2026", photo: photos.trophy },
  { n: "06", title: "The Celebration", sub: "Bangladesh U-20 title celebrations", photo: photos.champions },
];

const servicesPreview = [
  {
    t: "Technical Leadership",
    d: "Technical direction, football operations, club development, and structural planning.",
  },
  {
    t: "Player & Coach Development",
    d: "Player development, academy work, talent identification, and coach mentoring.",
  },
  {
    t: "Football Development",
    d: "Grassroots projects, youth strategy, and academy pathway development.",
  },
  {
    t: "International Consultancy",
    d: "International projects, partnerships, and club and academy connections.",
  },
];

function Home() {
  return (
    <>
      <JourneyRail />

      {/* HERO */}
      <section className="relative">
        <img
          src={photos.coaching.src}
          alt={photos.coaching.alt}
          fetchPriority="high"
          className="h-[78vh] w-full object-cover object-[60%_30%] md:h-[88vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 md:px-10 md:pb-20">
            <p className="eyebrow text-primary-foreground/70">
              International Football Consultancy
            </p>
            <h1 className="mt-4 font-display text-[3.2rem] leading-[0.92] font-extrabold tracking-tight text-primary-foreground uppercase md:text-[7.5rem]">
              Mark Cox
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/85 md:text-lg">
              Football expertise built through experience, development, and international
              leadership.
            </p>
            <p className="eyebrow mt-4 text-primary-foreground/55">
              Technical Direction • Coaching • Player Development • Talent Identification
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="eyebrow bg-primary-foreground px-7 py-4 text-ink transition-colors hover:bg-gold"
              >
                Work With Mark
              </Link>
              <Link
                to="/services"
                className="eyebrow border border-primary-foreground/45 px-7 py-4 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <Section className="border-b border-border py-10 md:py-14">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.map((c, i) => (
            <Reveal as="li" key={c.k} delay={i * 70}>
              <p className="font-display text-3xl font-extrabold md:text-4xl">
                {c.k === "27+" ? (
                  <>
                    <Counter to={27} suffix="+" />
                  </>
                ) : (
                  c.k
                )}
              </p>
              <p className="eyebrow mt-2">{c.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ABOUT */}
      <Section id="the-camp" className="py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="img-zoom">
            <img
              src={photos.camp.src}
              alt={photos.camp.alt}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div className="md:pt-10">
            <SectionHead
              eyebrow="About"
              title="About Mark Cox"
              sub="Experience. Development. Leadership."
            />
            <Reveal className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Mark Cox is a UEFA A Licensed coach and international football consultant whose
                work spans technical leadership, player development, coach education, and
                grassroots football development across a range of football environments.
              </p>
              <p>
                His recent work includes technical and coaching involvement with Bangladesh U-20
                football, culminating in the SAFF U-20 Championship in 2026, and football
                development work in Pakistan focused on coaching, youth pathways, and talent
                development.
              </p>
              <p>
                Through MCIFC, Mark advises clubs, academies, federations, and football projects
                that want a clear technical structure, a genuine development pathway, and access
                to an international football network.
              </p>
              <TextLink to="/about">Read Mark&apos;s Story</TextLink>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* THE WORK */}
      <Section id="the-work" className="border-t border-border py-20 md:py-28">
        <SectionHead
          eyebrow="Selected Moments"
          title="The Work"
          sub="From the training ground to international football projects, the work is built around development, people, and long-term progress."
        />
        <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {work.map((w, i) => (
            <Reveal
              as="li"
              key={w.n}
              delay={(i % 2) * 90}
              className={i % 2 === 1 ? "md:mt-20" : undefined}
            >
              <figure className="img-zoom">
                <img
                  src={w.photo.src}
                  alt={w.photo.alt}
                  loading="lazy"
                  className={`w-full object-cover ${i % 3 === 0 ? "aspect-4/3" : "aspect-3/4 md:aspect-4/5"}`}
                />
              </figure>
              <div className="mt-4 flex items-baseline gap-4 border-t border-border pt-4">
                <span className="eyebrow text-muted-foreground">{w.n}</span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* VIDEO 1 */}
      <Section className="pb-20 md:pb-28">
        <SectionHead eyebrow="In His Own Words" title="The Coaching Mindset" />
        <Reveal className="mt-10 aspect-16/10 md:aspect-21/9">
          <VideoCard
            href={links.video1}
            image={photos.balls.src}
            alt={photos.balls.alt}
            eyebrow="Video • YouTube"
            title="The Coaching Mindset"
            text="How Mark approaches players, standards, and the daily work of development. Hosted on YouTube."
          />
        </Reveal>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section id="the-journey" className="border-t border-border py-20 md:py-28">
        <SectionHead eyebrow="Consultancy" title="What Mark Provides" />
        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {servicesPreview.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 60} className="bg-background p-8 md:p-10">
              <p className="eyebrow text-muted-foreground">0{i + 1}</p>
              <h3 className="mt-4 font-display text-xl font-bold uppercase md:text-2xl">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ul>
        <TextLink to="/services">All Services</TextLink>
      </Section>

      <PhotoBreak
        src={photos.ceremony.src}
        alt={photos.ceremony.alt}
        caption="SAFF U-20 Champions — 2026"
      />

      {/* SAFF FEATURE */}
      <Section id="the-tournament" className="py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
          <div>
            <SectionHead eyebrow="Bangladesh U-20" title="SAFF U-20 Champions 2026" />
            <Reveal className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                A championship built on belief, discipline, team culture, and collective
                responsibility.
              </p>
              <p className="text-base">
                From camp at the National Stadium in Dhaka to the final in the Maldives, the
                tournament reflected months of preparation, clear standards, and players trusted
                to take responsibility on the pitch.
              </p>
              <TextLink to="/achievements">Achievements &amp; Vision</TextLink>
            </Reveal>
          </div>
          <Reveal className="img-zoom" delay={80}>
            <img
              src={photos.champions.src}
              alt={photos.champions.alt}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* PAKISTAN */}
      <Section id="the-championship" className="border-t border-border py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="img-zoom">
            <img
              src={photos.pakistan.src}
              alt={photos.pakistan.alt}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div className="md:pt-8">
            <p className="eyebrow text-muted-foreground">International Development</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase md:text-5xl">
              Football Development Beyond Borders
            </h2>
            <Reveal className="mt-6 space-y-5 text-muted-foreground md:text-lg">
              <p>
                Mark&apos;s work in Pakistan has centred on coaching, grassroots football
                development, and supporting young players and local coaches in regions where the
                game grows through people rather than facilities.
              </p>
              <p>
                The purpose is the same everywhere: better sessions, better coaches, clearer
                pathways, and players who are seen.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* JOURNEY SLIDER */}
      <Section className="border-t border-border py-20 md:py-28">
        <SectionHead eyebrow="Photographs" title="The Journey" />
        <div className="mt-12">
          <JourneySlider />
        </div>
        <TextLink to="/journey">Open The Journey</TextLink>
      </Section>

      {/* LOOKING AHEAD */}
      <Section id="the-future" className="border-t border-border py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHead eyebrow="Vision" title="Looking Ahead" />
          <Reveal className="space-y-5 text-muted-foreground md:text-lg">
            <p>
              The long-term focus is straightforward: develop the next generation, strengthen
              youth and academy pathways, and build local coaching capacity so progress outlasts
              any single project.
            </p>
            <p>
              Alongside that sits talent identification, grassroots development, and connecting
              clubs, academies, and football markets so that development turns into real
              opportunities for players and coaches.
            </p>
          </Reveal>
        </div>
      </Section>

      <WorkWithMarkCTA />
    </>
  );
}
