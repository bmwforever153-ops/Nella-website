import { useState } from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  BadgeCheck,
  Car,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { testimonials, business, type Testimonial } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export interface CustomerTestimonialsProps {
  defaultLayout?: "carousel" | "grid";
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function CustomerTestimonials({
  defaultLayout = "carousel",
  eyebrow = "Social Proof",
  title = "Loved by Drivers Across Ohio",
  description = "Read authentic experiences from vehicle owners who trusted Nella's with their cars, SUVs, and trucks.",
  className,
}: CustomerTestimonialsProps) {
  const [layout, setLayout] = useState<"carousel" | "grid">(defaultLayout);
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const filteredTestimonials =
    tierFilter === "all" ? testimonials : testimonials.filter((t) => t.tier === tierFilter);

  // Sync carousel slide indicators
  const onCarouselSelect = (api: CarouselApi) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    setSlideCount(api.scrollSnapList().length);
  };

  return (
    <section className={cn("section-shell reveal-on-scroll scroll-mt-24", className)}>
      {/* Header with Title and Control Toggles */}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>

        {/* View mode toggle (Carousel vs Grid) and Tier Filter */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Tier Filter */}
          <div className="flex shrink-0 items-center rounded-xl border border-border bg-secondary/60 p-1 backdrop-blur">
            <button
              type="button"
              onClick={() => setTierFilter("all")}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold transition-all",
                tierFilter === "all"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              All Tiers
            </button>
            <button
              type="button"
              onClick={() => setTierFilter("Basic")}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold transition-all",
                tierFilter === "Basic"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Basic
            </button>
            <button
              type="button"
              onClick={() => setTierFilter("Interior")}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold transition-all",
                tierFilter === "Interior"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Interior
            </button>
            <button
              type="button"
              onClick={() => setTierFilter("Full Detail")}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold transition-all",
                tierFilter === "Full Detail"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Full Detail
            </button>
          </div>

          {/* Layout switcher */}
          <div className="flex shrink-0 items-center rounded-xl border border-border bg-secondary/60 p-1 backdrop-blur">
            <button
              type="button"
              onClick={() => setLayout("carousel")}
              aria-label="Carousel view"
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all",
                layout === "carousel"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <SlidersHorizontal className="size-3.5" />
              <span>Carousel</span>
            </button>
            <button
              type="button"
              onClick={() => setLayout("grid")}
              aria-label="Grid view"
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all",
                layout === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <LayoutGrid className="size-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Aggregate Rating Banner */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card/70 px-6 py-4 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
            ))}
          </div>
          <div>
            <span className="text-base font-bold text-foreground">5.0 / 5.0</span>
            <span className="ml-2 text-xs text-muted-foreground">
              Based on genuine local vehicle details
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <CheckCircle2 className="size-3.5 text-accent-foreground" />
            100% Satisfaction Focus
          </span>
          <span className="hidden sm:inline text-muted-foreground/40">&bull;</span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-accent-foreground" />
            Bespoke Mobile Service
          </span>
          <span className="hidden sm:inline text-muted-foreground/40">&bull;</span>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent-foreground hover:underline"
          >
            Facebook Page <ExternalLink className="size-3" />
          </a>
        </div>
      </div>

      {/* Main Content: Carousel or Grid */}
      <div className="mt-8">
        {layout === "carousel" ? (
          <div className="relative">
            <Carousel
              setApi={(api) => {
                setCarouselApi(api);
                if (api) {
                  onCarouselSelect(api);
                  api.on("select", () => onCarouselSelect(api));
                }
              }}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 sm:-ml-6">
                {filteredTestimonials.map((item) => (
                  <CarouselItem key={item.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Custom Carousel Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {slideCount > 0 &&
                  [...Array(slideCount)].map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => carouselApi?.scrollTo(idx)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        currentSlide === idx
                          ? "w-7 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
                      )}
                    />
                  ))}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="soft"
                  size="icon"
                  className="size-9 rounded-full"
                  onClick={() => carouselApi?.scrollPrev()}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="soft"
                  size="icon"
                  className="size-9 rounded-full"
                  onClick={() => carouselApi?.scrollNext()}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  // Generate initials for avatar
  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="pop-card group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all sm:p-7">
      {/* Top row: Rating Stars and Quote Icon */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="size-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
            ))}
          </div>
          <Quote className="size-6 text-muted-foreground/25" />
        </div>

        {/* Detailing Package Chip */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-[11px] font-semibold text-foreground/90">
            {item.tier} Detailing
          </Badge>
          <span className="text-xs text-muted-foreground">&bull; {item.packageTitle}</span>
        </div>

        {/* Review Title & Quote */}
        <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">
          &ldquo;{item.title}&rdquo;
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.review}</p>
      </div>

      {/* Footer: Customer Name, Vehicle Serviced, Location, Date */}
      <div className="mt-6 border-t border-border/80 pt-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary font-bold text-xs text-foreground shadow-inner">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <strong className="text-sm font-semibold text-foreground">{item.name}</strong>
              {item.verified && (
                <span
                  className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 shadow-xs"
                  title="Verified Customer • Confirmed Service"
                >
                  <BadgeCheck className="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>Verified Customer</span>
                </span>
              )}
            </div>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {item.location} &bull; {item.date}
            </p>
          </div>
        </div>

        {/* Vehicle Badge */}
        <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">
          <Car className="size-3.5 shrink-0 text-accent-foreground" />
          <span className="truncate font-medium">{item.vehicle}</span>
        </div>
      </div>
    </article>
  );
}

export default CustomerTestimonials;
