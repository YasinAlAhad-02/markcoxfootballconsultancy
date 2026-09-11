import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { abs, descriptor, links, share } from "@/lib/media";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHead } from "@/components/site/Bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Work With Mark | Mark Cox International Football Consultancy" },
      {
        name: "description",
        content:
          "Contact Mark Cox International Football Consultancy for football technical expertise, development support, or international consultancy. WhatsApp +92 326 0522098 or email MCOX.IFC@PROTON.ME.",
      },
      { property: "og:title", content: "Work With Mark — Mark Cox International Football Consultancy" },
      { property: "og:description", content: descriptor },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/contact") },
      { property: "og:image", content: share.contact },
      { name: "twitter:image", content: share.contact },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: abs("/contact") }],
  }),
  component: Contact,
});

const audiences = [
  ["Clubs", "Technical direction, football operations, and club development support."],
  ["Academies & Federations", "Pathway design, coach education, and player development programmes."],
  ["Football Organisations & Projects", "International consultancy, partnerships, and project advisory."],
];

function Contact() {
  return (
    <>
      <Section className="pt-16 pb-14 md:pt-24 md:pb-20">
        <SectionHead
          eyebrow="Contact"
          title="Work With Mark"
          sub="Looking for football technical expertise, development support, or international consultancy?"
        />
      </Section>

      <Section className="pb-20 md:pb-24">
        <ul className="grid gap-px border border-border bg-border md:grid-cols-3">
          {audiences.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 70} className="bg-background p-8 md:p-10">
              <p className="eyebrow text-muted-foreground">0{i + 1}</p>
              <h2 className="mt-4 font-display text-xl font-bold uppercase">{t}</h2>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border py-20 md:py-24">
        <SectionHead eyebrow="Direct" title="Get Connected" />

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal className="bg-background p-8 md:p-12">
            <div className="flex items-start gap-6">
              <span className="flex size-12 shrink-0 items-center justify-center border border-border">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold uppercase">WhatsApp</h3>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link mt-2 inline-flex text-lg"
                >
                  {links.whatsappDisplay}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border bg-white p-4"
                aria-label={`Open WhatsApp chat with ${links.whatsappDisplay}`}
              >
                <img
                  src="/whatsapp-qr.svg"
                  alt={`QR code that opens a WhatsApp chat with ${links.whatsappDisplay}`}
                  width={200}
                  height={200}
                  className="size-44 md:size-52"
                />
              </a>
              <p className="eyebrow mt-4 text-muted-foreground">Scan to connect on WhatsApp</p>
            </div>
          </Reveal>

          <Reveal delay={80} className="bg-background p-8 md:p-12">
            <div className="flex items-start gap-6">
              <span className="flex size-12 shrink-0 items-center justify-center border border-border">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold uppercase">Email</h3>
                <a href={links.email} className="rule-link mt-2 inline-flex break-all text-lg">
                  {links.emailDisplay}
                  <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="mt-10 max-w-md text-muted-foreground">
              For project briefs, technical consultancy enquiries, and partnership discussions,
              email is the most direct route. Mark replies personally.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
