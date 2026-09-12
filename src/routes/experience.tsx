import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ExperienceEntry } from "@/components/site/ExperienceEntry";
import { Reveal } from "@/components/site/Reveal";
import { Section, WorkWithMarkCTA } from "@/components/site/Bits";
import { experience, progression } from "@/lib/experience";
import { abs } from "@/lib/media";

const TITLE = "Experience | Mark Cox International Football Consultancy";
const DESC =
  "Explore Mark Cox's verified football experience across elite academies, coach education, international development, technical leadership and Bangladesh U-20.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: abs("/experience") },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: abs("/experience") }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24 md:pb-14">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Experience</p>
          <h1 className="mt-4 max-w-5xl font-display text-4xl leading-none font-extrabold uppercase md:text-7xl">
            A Career Built Around Development
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            From elite academy football in England to international coaching, technical leadership
            and football development, Mark Cox has built his career around developing players,
            coaches, teams and football environments.
          </p>
        </Reveal>
      </Section>

      <Section className="pb-20 md:pb-28">
        <Reveal className="border-y border-border py-5">
          <ol className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {progression.map((stage, index) => (
              <li key={stage} className="flex items-center gap-4">
                <span className="eyebrow text-muted-foreground">{stage}</span>
                {index < progression.length - 1 && (
                  <ArrowRight className="size-3 text-gold" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <ol className="mt-12 md:mt-16">
          {experience.map((item) => (
            <ExperienceEntry key={item.number} item={item} />
          ))}
        </ol>
      </Section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
          <p className="font-display text-3xl font-extrabold uppercase md:text-6xl">
            Experience. Development. Leadership.
          </p>
        </div>
      </section>

      <WorkWithMarkCTA />
    </>
  );
}