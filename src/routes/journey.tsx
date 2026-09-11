import { createFileRoute } from "@tanstack/react-router";
import { abs, descriptor, photos, share } from "@/lib/media";
import { JourneySlider } from "@/components/site/JourneySlider";
import { PhotoBreak, Section, SectionHead, WorkWithMarkCTA } from "@/components/site/Bits";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "The Journey | Mark Cox International Football Consultancy" },
      {
        name: "description",
        content:
          "Photographs from Mark Cox's football journey: the camp in Dhaka, coaching and development work, Pakistan, and the SAFF U-20 Championship 2026 with Bangladesh.",
      },
      { property: "og:title", content: "The Journey — Mark Cox" },
      { property: "og:description", content: descriptor },
      { property: "og:type", content: "article" },
      { property: "og:url", content: abs("/journey") },
      { property: "og:image", content: share.journey },
      { name: "twitter:image", content: share.journey },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: abs("/journey") }],
  }),
  component: Journey,
});

function Journey() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <SectionHead
          eyebrow="Photographs"
          title="The Journey"
          sub="Eight moments from the training ground, the tournament, and the work in between."
        />
      </Section>

      <Section className="pb-20 md:pb-28">
        <JourneySlider />
      </Section>

      <PhotoBreak
        src={photos.ceremony.src}
        alt={photos.ceremony.alt}
        caption="A team achievement — Dhaka, 2026"
      />

      <WorkWithMarkCTA />
    </>
  );
}
