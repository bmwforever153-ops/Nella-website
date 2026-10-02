import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, Facebook, Menu, Phone, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { business } from "@/lib/site-data";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/services", hash: "pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function MotionEffects() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("[data-cursor]");
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.dataset.active = document
        .elementFromPoint(event.clientX, event.clientY)
        ?.closest("a, button, article, input, select, textarea")
        ? "true"
        : "false";
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return (
    <span data-cursor aria-hidden="true" className="cursor-spark">
      <Sparkles className="size-3" />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3"
          aria-label="Nella's Enchanted Detailing home"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 sm:size-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="size-3.5 sm:size-4" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block text-xs sm:text-sm font-bold tracking-[0.24em] text-foreground">
              NELLA'S
            </span>
            <span className="mt-1 block text-[8px] sm:text-[9px] font-medium tracking-[0.28em] text-muted-foreground">
              ENCHANTED DETAILING
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={`${link.to}-${link.label}`}
              to={link.to}
              hash={"hash" in link ? link.hash : undefined}
              activeOptions={{ exact: link.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="soft" size="default">
            <a href={business.phoneHref} className="flex items-center gap-1.5 font-semibold">
              <Phone className="size-3.5 text-accent-foreground" />
              <span>{business.phone}</span>
            </a>
          </Button>
          <Button asChild variant="premium" size="lg">
            <Link to="/contact">
              Book a detail <ArrowUpRight />
            </Link>
          </Button>
        </div>

        {/* Mobile Header Action: Call shortcut + Menu Toggle */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={business.phoneHref}
            className="grid size-10 place-items-center rounded-full border border-border bg-secondary/80 text-foreground transition-colors hover:bg-secondary active:scale-95"
            aria-label={`Call ${business.phone}`}
          >
            <Phone className="size-4 text-accent-foreground" />
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <div
          className="fixed inset-x-0 top-16 sm:top-20 z-50 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background/98 p-5 shadow-2xl backdrop-blur-2xl lg:hidden flex flex-col justify-between"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex w-full max-w-md flex-col gap-1">
            {links.map((link) => (
              <Link
                key={`${link.to}-${link.label}`}
                to={link.to}
                hash={"hash" in link ? link.hash : undefined}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary active:bg-secondary"
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            ))}

            <div className="mt-4 rounded-2xl border border-border bg-card p-4 shadow-xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Mobile Detailing Service
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                We come directly to your home or office!
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background py-2.5 px-3 text-xs font-semibold text-foreground transition-colors active:bg-secondary"
                >
                  <Phone className="size-3.5 text-accent-foreground" /> {business.phone}
                </a>
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background py-2.5 px-3 text-xs font-semibold text-foreground transition-colors active:bg-secondary"
                >
                  <Facebook className="size-3.5 text-accent-foreground" /> Facebook
                </a>
              </div>
            </div>

            <Button
              asChild
              variant="premium"
              size="lg"
              className="mt-4 h-12 w-full text-sm font-semibold shadow-md"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book a Detail <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mx-auto w-full max-w-md border-t border-border pt-4 pb-6 text-center text-xs text-muted-foreground">
            © 2026 Nella's Enchanted Detailing &bull; Columbus, Ohio
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * Mobile-First Sticky Action Bar (Thumb Zone)
 * Appears fixed at the bottom for phone users to provide instant tap actions
 */
export function MobileQuickActionBar() {
  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-border/80 bg-background/95 px-4 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.65rem, env(safe-area-inset-bottom))" }}
    >
      <Button
        asChild
        variant="soft"
        size="lg"
        className="h-11 flex-1 rounded-xl border-border/90 px-3 text-xs font-semibold shadow-xs"
      >
        <a href={business.phoneHref} aria-label={`Call ${business.phone}`}>
          <Phone className="size-4 text-accent-foreground" />
          <span>Call Now</span>
        </a>
      </Button>

      <Button
        asChild
        variant="premium"
        size="lg"
        className="h-11 flex-1 rounded-xl px-4 text-xs font-semibold shadow-md"
      >
        <Link to="/contact" aria-label="Book a detailing appointment">
          <Sparkles className="size-4" />
          <span>Book Detail</span>
        </Link>
      </Button>
    </aside>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-primary-foreground text-primary">
              <Sparkles className="size-4" />
            </span>
            <p className="font-bold tracking-[0.18em]">NELLA'S ENCHANTED DETAILING</p>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/65">
            Several levels of clean, thoughtfully selected for vehicles that deserve to feel cared
            for inside and out.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Explore
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            {links.slice(1).map((link) => (
              <Link
                key={`${link.to}-${link.label}`}
                to={link.to}
                hash={"hash" in link ? link.hash : undefined}
                className="w-fit text-primary-foreground/75 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Connect
          </p>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground"
          >
            <Facebook className="size-4" /> Follow on Facebook
          </a>
          <a
            href={business.phoneHref}
            className="mt-4 block text-sm font-semibold text-primary-foreground"
          >
            {business.phone}
          </a>
          <p className="mt-8 text-xs leading-5 text-primary-foreground/45">
            Hours, service area, and appointments are confirmed directly when you enquire.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/45">
        © 2026 Nella's Enchanted Detailing. All rights reserved.
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/55">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3.5 max-w-4xl text-3xl font-semibold leading-[1.05] sm:text-6xl sm:leading-[0.98]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
