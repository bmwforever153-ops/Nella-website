import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Sparkles, Car, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, type ServicePackage } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export interface ServicePackagesProps {
  showHeader?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  actionNode?: React.ReactNode;
  onSelectPackage?: (pkg: ServicePackage) => void;
}

type VehicleSize = "all" | "sedan" | "suv";

export function ServicePackages({
  showHeader = true,
  eyebrow = "Detailing Tiers",
  title = "Choose Your Level of Clean",
  description = "Crafted for every vehicle's needs — from essential upkeep to our signature deep restoration.",
  className,
  actionNode,
  onSelectPackage,
}: ServicePackagesProps) {
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>("all");

  return (
    <div className={cn("w-full", className)}>
      {showHeader && (
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
            {description && (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
            )}
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            {/* Vehicle size filter toggle */}
            <div className="flex w-full sm:w-auto shrink-0 items-center justify-between rounded-xl border border-border bg-secondary/60 p-1 backdrop-blur">
              <button
                type="button"
                onClick={() => setVehicleSize("all")}
                className={cn(
                  "flex-1 sm:flex-initial text-center rounded-lg px-3 py-2 text-xs font-semibold transition-all",
                  vehicleSize === "all"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Price Range
              </button>
              <button
                type="button"
                onClick={() => setVehicleSize("sedan")}
                className={cn(
                  "flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all",
                  vehicleSize === "sedan"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Car className="size-3.5" /> Sedan
              </button>
              <button
                type="button"
                onClick={() => setVehicleSize("suv")}
                className={cn(
                  "flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all",
                  vehicleSize === "suv"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Shield className="size-3.5" /> SUV / Truck
              </button>
            </div>

            {actionNode}
          </div>
        </div>
      )}

      {/* Detailing Tiers Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((pkg, index) => {
          const displayPrice =
            vehicleSize === "sedan"
              ? pkg.sedanPrice
              : vehicleSize === "suv"
                ? pkg.suvPrice
                : pkg.price;

          const isFeatured = pkg.popular;

          return (
            <article
              key={pkg.id || pkg.title}
              className={cn(
                "pop-card group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all",
                isFeatured
                  ? "border-accent shadow-md ring-1 ring-accent/30"
                  : "border-border shadow-sm",
              )}
            >
              {/* Header Badges */}
              {isFeatured && (
                <div className="absolute right-4 top-4 z-10">
                  <Badge
                    variant="default"
                    className="flex items-center gap-1.5 bg-accent text-accent-foreground shadow-sm hover:bg-accent"
                  >
                    <Sparkles className="size-3" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}

              {/* Package Visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={pkg.image}
                  alt={`${pkg.tier} detailing tier - ${pkg.title}`}
                  loading="lazy"
                  width={index === 2 ? 1536 : 1200}
                  height={index === 2 ? 1024 : 912}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tier indicator pill on photo */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-background/95 px-3 py-1 text-xs font-bold tracking-wider uppercase text-foreground shadow-sm backdrop-blur">
                    Tier 0{index + 1} &bull; {pkg.tier}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                {/* Tier and Title */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {pkg.tier} Detailing
                  </span>
                  {pkg.badge && !isFeatured && (
                    <span className="text-xs font-medium text-muted-foreground">{pkg.badge}</span>
                  )}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-foreground">{pkg.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>

                {/* Pricing & Duration row */}
                <div className="mt-5 flex items-baseline justify-between border-y border-border py-4">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold tracking-tight text-foreground">
                        {displayPrice}
                      </span>
                      {vehicleSize !== "all" && (
                        <span className="text-xs font-medium text-muted-foreground">
                          {vehicleSize === "sedan" ? "/ sedan" : "/ SUV"}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-muted-foreground">
                      {vehicleSize === "all" ? "Varies by vehicle size" : "Estimated base price"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Clock className="size-3.5 text-accent-foreground" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="mt-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What's Included:
                  </p>
                  <ul className="mt-3.5 space-y-2.5">
                    {pkg.includes.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action */}
                <div className="mt-8 pt-2">
                  <Button
                    asChild
                    variant={isFeatured ? "premium" : "soft"}
                    size="lg"
                    className="h-12 w-full font-semibold shadow-sm transition-all"
                    onClick={() => onSelectPackage?.(pkg)}
                  >
                    <Link to="/contact">
                      Book {pkg.tier} Detail <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ServicePackages;
