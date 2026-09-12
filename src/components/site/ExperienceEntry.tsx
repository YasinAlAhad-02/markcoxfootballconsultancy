import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/lib/experience";
import { cn } from "@/lib/utils";

export function ExperienceEntry({ item }: { item: ExperienceItem }) {
  const place = item.location ?? item.country;

  return (
    <li className="relative grid md:grid-cols-[minmax(0,0.72fr)_3rem_minmax(0,1.28fr)] md:gap-7">
      <div className="hidden pt-10 text-right md:block">
        <p className="font-display text-5xl font-extrabold text-border">{item.number}</p>
        {item.period && <p className="eyebrow mt-3 text-foreground">{item.period}</p>}
        {place && <p className="eyebrow mt-2 text-muted-foreground">{place}</p>}
      </div>

      <div className="absolute top-0 bottom-0 left-4 flex justify-center md:static">
        <span className="h-full w-px bg-border" />
        <span
          className={cn(
            "absolute top-11 size-2.5 border-2 border-background bg-muted-foreground md:top-12",
            item.featured || item.current ? "bg-gold" : "",
          )}
        />
      </div>

      <details
        className={cn(
          "group ml-10 border-t border-border py-8 md:ml-0 md:py-10",
          item.featured && "border-gold bg-ink px-6 text-primary-foreground md:px-9",
          item.current && "border-foreground border-b bg-secondary px-6 md:px-9",
        )}
      >
        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <div className="flex items-start gap-5 md:gap-7">
            <div
              className={cn(
                "flex size-16 shrink-0 items-center justify-center border border-border bg-background p-2 md:size-20",
                item.featured && "border-primary-foreground/25",
              )}
            >
              {item.logo ? (
                <img
                  src={item.logo.src}
                  alt={item.logo.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <span className="font-display text-xl font-extrabold text-foreground">{item.mark}</span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={cn(
                      "eyebrow text-muted-foreground",
                      item.featured && "text-gold",
                    )}
                  >
                    {item.category}
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-tight font-extrabold uppercase md:text-4xl">
                    {item.organisation}
                  </h2>
                </div>
                <ChevronDown
                  className="mt-1 size-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </div>
              <p className={cn("eyebrow mt-4", item.featured ? "text-primary-foreground" : "text-foreground")}>
                {item.role}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 md:hidden">
                <span className="eyebrow text-muted-foreground">{item.number}</span>
                {item.period && <span className="eyebrow text-muted-foreground">{item.period}</span>}
                {place && <span className="eyebrow text-muted-foreground">{place}</span>}
              </div>
              <p
                className={cn(
                  "mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground md:text-base",
                  item.featured && "text-primary-foreground/70",
                )}
              >
                {item.description}
              </p>
            </div>
          </div>
        </summary>

        <div className="ml-0 pt-7 md:ml-[6.75rem]">
          <div className={cn("border-t border-border pt-6", item.featured && "border-primary-foreground/20")}>
            <p
              className={cn(
                "max-w-2xl leading-relaxed text-muted-foreground md:text-lg",
                item.featured && "text-primary-foreground/75",
              )}
            >
              {item.description}
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.ageGroup && (
                <div>
                  <dt className="eyebrow text-muted-foreground">Age group</dt>
                  <dd className="mt-1 font-medium">{item.ageGroup}</dd>
                </div>
              )}
              {place && (
                <div>
                  <dt className="eyebrow text-muted-foreground">Location</dt>
                  <dd className="mt-1 font-medium">{place}</dd>
                </div>
              )}
              {item.achievement && (
                <div className="sm:col-span-2">
                  <dt className="eyebrow text-gold">Achievement</dt>
                  <dd className="mt-2 font-display text-xl font-bold uppercase">{item.achievement}</dd>
                </div>
              )}
            </dl>
            {item.services && (
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-5">
                {item.services.map((service) => (
                  <li key={service} className="eyebrow text-muted-foreground">
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </details>
    </li>
  );
}