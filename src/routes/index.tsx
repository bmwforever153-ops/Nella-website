import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  MapPin,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ServicePackages } from "@/components/service-packages";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { business, images } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nella's Enchanted Detailing | Vehicle Detailing" },
      {
        name: "description",
        content:
          "Choose from several levels of interior and exterior vehicle detailing with Nella's Enchanted Detailing.",
      },
      { property: "og:title", content: "Nella's Enchanted Detailing" },
      { property: "og:description", content: "Thoughtful vehicle detailing, inside and out." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <Transformation />
      <CustomerTestimonials />
      <TrustSection />
      <Faq />
      <CallToAction />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[92rem] px-3 pb-6 pt-2 sm:px-6 sm:pb-16 sm:pt-3">
      <div className="relative min-h-[560px] overflow-hidden rounded-[1.5rem] sm:min-h-[720px] sm:rounded-[1.75rem]">
        <img
          src={images.heroImage}
          alt="Freshly detailed white luxury sedan at sunset"
          width={1536}
          height={1024}
          className="absolute inset-0 size-full object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-background)_95%,transparent)_0%,color-mix(in_oklab,var(--color-background)_70%,transparent)_45%,transparent_100%)] sm:bg-[linear-gradient(90deg,var(--color-background)_0%,color-mix(in_oklab,var(--color-background)_92%,transparent)_26%,color-mix(in_oklab,var(--color-background)_25%,transparent)_62%,transparent_100%)]" />

        <div className="relative flex min-h-[560px] max-w-7xl flex-col justify-center px-5 py-12 sm:min-h-[720px] sm:px-12 lg:px-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-1.5 text-xs font-semibold shadow-xs backdrop-blur">
            <span className="size-2 rounded-full bg-accent animate-pulse" /> Mobile detailing direct
            to you
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] xs:text-5xl sm:text-7xl lg:text-[5.5rem]">
            A little magic.
            <br />A lot of clean.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground sm:text-lg sm:leading-7">
            {business.tagline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              variant="premium"
              size="lg"
              className="h-12 w-full sm:w-auto font-semibold shadow-md"
            >
              <Link to="/contact">
                <Sparkles className="size-4" /> Book your detail <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="soft"
              size="lg"
              className="h-12 w-full sm:w-auto font-semibold"
            >
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>

        {/* Desktop floating feature bar */}
        <div className="absolute inset-x-4 bottom-4 hidden overflow-hidden rounded-2xl border border-border bg-border/70 sm:grid sm:grid-cols-3 lg:inset-x-8">
          {[
            { Icon: ShieldCheck, title: "Careful service", text: "Every surface considered" },
            { Icon: WandSparkles, title: "Inside or out", text: "Choose your level of clean" },
            { Icon: MapPin, title: "Simple booking", text: "Confirm details directly" },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-4 bg-background/92 px-6 py-5 backdrop-blur-xl"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary">
                <Icon className="size-4" />
              </span>
              <span>
                <strong className="block text-sm">{title}</strong>
                <small className="text-muted-foreground">{text}</small>
              </span>
            </div>
          ))}
        </div>

        <a
          href="#packages"
          aria-label="Scroll down to packages"
          className="scroll-cue absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 sm:grid"
        >
          <ArrowDown className="size-4" />
        </a>
      </div>

      {/* Mobile feature highlights row */}
      <div className="mt-3 grid grid-cols-3 gap-2 sm:hidden">
        {[
          { Icon: ShieldCheck, title: "Careful Care" },
          { Icon: WandSparkles, title: "Mobile Service" },
          { Icon: MapPin, title: "Fast Booking" },
        ].map(({ Icon, title }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/80 p-3 text-center backdrop-blur shadow-2xs"
          >
            <span className="grid size-8 place-items-center rounded-full bg-secondary text-foreground">
              <Icon className="size-3.5 text-accent-foreground" />
            </span>
            <span className="mt-1.5 text-[11px] font-semibold tracking-tight text-foreground">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section id="packages" className="section-shell reveal-on-scroll scroll-mt-24">
      <ServicePackages
        eyebrow="Packages & pricing"
        title="A spell for every level of clean."
        description="Select the detailing tier tailored to your vehicle. Choose standard or SUV sizing for estimated rates."
        actionNode={
          <Button asChild variant="soft">
            <Link to="/services">
              View all services <ArrowRight />
            </Link>
          </Button>
        }
      />
    </section>
  );
}

function Transformation() {
  const [position, setPosition] = useState(52);
  return (
    <section className="reveal-on-scroll bg-primary text-primary-foreground">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-primary-foreground/50">The transformation</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            From everyday mess to enchanted finish.
          </h2>
          <p className="mt-6 max-w-lg leading-7 text-primary-foreground/60">
            Drag across the image to explore the difference a focused exterior clean can make.
          </p>
          <Button asChild variant="soft" size="lg" className="mt-8">
            <Link to="/gallery">
              See the gallery <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <img
            src={images.washImage}
            alt="Vehicle during an exterior wash"
            loading="lazy"
            width={1200}
            height={912}
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={images.exteriorImage}
              alt="Vehicle paint after detailing"
              loading="lazy"
              width={1200}
              height={912}
              className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
              style={{ width: "min(80vw, 768px)" }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-background"
            style={{ left: `${position}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-foreground shadow-xl">
              ↔
            </span>
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-primary/80 px-3 py-1.5 text-xs">
            After
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-primary/80 px-3 py-1.5 text-xs">
            During
          </span>
          <input
            aria-label="Compare during and after detailing"
            type="range"
            min="15"
            max="85"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="absolute inset-0 size-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section-shell reveal-on-scroll">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Why Nella's</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            Your car, treated with intention.
          </h2>
        </div>
        <div className="grid gap-4">
          {[
            "Several levels of clean to choose from",
            "Interior and exterior options",
            "Clear recommendations for your vehicle",
            "Appointments arranged directly with Nella's",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 border-b border-border py-5 text-base font-medium"
            >
              <span className="grid size-8 place-items-center rounded-full bg-secondary">
                <Check className="size-4" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 rounded-2xl bg-secondary p-8 text-center sm:p-14">
        <p className="eyebrow">Community</p>
        <p className="mt-5 text-3xl font-semibold sm:text-5xl">
          Follow the latest transformations.
        </p>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
          Nella's Facebook page is the best place to see current work, updates, and community
          activity.
        </p>
        <Button asChild variant="premium" size="lg" className="mt-7">
          <a href={business.facebookUrl} target="_blank" rel="noreferrer">
            Visit Facebook <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}

function Faq() {
  const questions = [
    {
      question: "What services do you offer?",
      answer:
        "Nella's offers several levels of clean for vehicles that need attention inside, outside, or both. Send an enquiry and we’ll help identify the right option.",
    },
    {
      question: "How much does a detail cost?",
      answer:
        "The Quick Spell is $75–$100, The Full Enchantment is $125–$150, and Midnight Magic is $200–$225.",
    },
    {
      question: "How long will my detail take?",
      answer:
        "Timing varies with vehicle size, condition, and the selected service. Your expected timing will be confirmed before the appointment.",
    },
    {
      question: "Where do you provide service?",
      answer:
        "Current service-area details are confirmed directly when you enquire, ensuring availability for your location.",
    },
  ];
  return (
    <section className="section-shell reveal-on-scroll grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="eyebrow">Good to know</p>
        <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Questions, answered.</h2>
      </div>
      <Accordion type="single" collapsible className="border-t border-border">
        {questions.map(({ question, answer }) => (
          <AccordionItem key={question} value={question}>
            <AccordionTrigger className="py-6 text-base">{question}</AccordionTrigger>
            <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-2xl bg-accent p-8 text-accent-foreground sm:p-14 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow text-accent-foreground/65">Ready when you are</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Let’s bring back the clean.</h2>
        </div>
        <Button asChild variant="premium" size="lg">
          <Link to="/contact">
            Request an appointment <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
