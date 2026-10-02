import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Menu, Sparkles, X } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Nella's Enchanted Detailing home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[0.24em] text-foreground">
              NELLA'S
            </span>
            <span className="mt-1 block text-[9px] font-medium tracking-[0.28em] text-muted-foreground">
              ENCHANTED DETAILING
            </span>
          </span>
        </Link>

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

        <div className="hidden lg:block">
          <Button asChild variant="premium" size="lg">
            <Link to="/contact">
              Book a detail <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <Link
                key={`${link.to}-${link.label}`}
                to={link.to}
                hash={"hash" in link ? link.hash : undefined}
                className="border-b border-border py-4 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="premium" size="lg" className="mt-5">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book a detail <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
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
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
