import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, ListChecks, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Nella's Enchanted Detailing" },
      {
        name: "description",
        content: "Learn about the thoughtful approach behind Nella's Enchanted Detailing.",
      },
      { property: "og:title", content: "About Nella's Enchanted Detailing" },
      {
        property: "og:description",
        content: "Several levels of clean, chosen around your vehicle.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Nella's"
        title="A thoughtful approach to every clean."
        description="Nella's Enchanted Detailing helps drivers choose from several levels of interior and exterior care, based on what their vehicle needs."
      />
      <section className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <img
          src={images.exteriorImage}
          alt="Careful paint detailing"
          loading="lazy"
          width={1200}
          height={912}
          className="aspect-[4/3] w-full rounded-2xl object-cover"
        />
        <div>
          <p className="eyebrow">The approach</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            No one-size-fits-all clean.
          </h2>
          <p className="mt-6 leading-8 text-muted-foreground">
            A daily driver, family vehicle, and weekend car can need very different attention.
            Nella's makes it simple to start with the right level of service—inside, outside, or
            both.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              { Icon: ListChecks, title: "Choice", text: "Several levels of clean to select from" },
              { Icon: Heart, title: "Care", text: "A considered approach to your vehicle" },
              { Icon: Sparkles, title: "Finish", text: "Attention where it makes the difference" },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomerTestimonials
        defaultLayout="grid"
        eyebrow="Reputation & trust"
        title="What Our Clients Say"
        description="Every vehicle is treated like our own. Read reviews from local drivers who rely on Nella's."
      />
      <section className="bg-primary text-primary-foreground">
        <div className="section-shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow text-primary-foreground/50">Your vehicle next</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
              Tell us what needs attention.
            </h2>
          </div>
          <Button asChild variant="soft" size="lg">
            <Link to="/contact">
              Start an enquiry <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
