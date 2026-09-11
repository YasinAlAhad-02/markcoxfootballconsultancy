import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { photos } from "@/lib/media";

export const journeySlides = [
  { n: "01", title: "The Camp", sub: "National Stadium, Dhaka", photo: photos.camp },
  { n: "02", title: "The Work", sub: "Coaching & Development", photo: photos.coaching },
  { n: "03", title: "Pakistan", sub: "Football Development", photo: photos.pakistan },
  { n: "04", title: "Bangladesh U-20", sub: "International Competition", photo: photos.balls },
  { n: "05", title: "The Championship", sub: "SAFF U-20 Champions", photo: photos.trophy },
  { n: "06", title: "The Celebration", sub: "A Team Achievement", photo: photos.champions },
  { n: "07", title: "Leadership", sub: "Working With Players & Staff", photo: photos.ceremony },
  { n: "08", title: "Looking Ahead", sub: "The Next Chapter", photo: photos.award },
];

export function JourneySlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    if (!embla || paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => embla.scrollNext(), 5000);
    return () => window.clearInterval(id);
  }, [embla, paused]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {journeySlides.map((s) => (
            <figure key={s.n} className="img-zoom relative min-w-0 flex-[0_0_88%] pr-3 md:flex-[0_0_58%] md:pr-5">
              <img
                src={s.photo.src}
                alt={s.photo.alt}
                loading="lazy"
                className="h-[52vh] w-full object-cover md:h-[68vh]"
              />
              <figcaption className="mt-4 flex items-baseline gap-4">
                <span className="eyebrow text-muted-foreground">{s.n}</span>
                <span>
                  <span className="font-display text-lg font-bold uppercase">{s.title}</span>
                  <span className="ml-3 text-sm text-muted-foreground">{s.sub}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex size-11 items-center justify-center border border-border transition-colors hover:border-ink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex size-11 items-center justify-center border border-border transition-colors hover:border-ink"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <p className="eyebrow ml-2 text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {journeySlides.length}
        </p>
      </div>
    </div>
  );
}
