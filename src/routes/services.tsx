import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";
import { ServicePackages } from "@/components/service-packages";
import { business, images } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | Nella's Enchanted Detailing" },
      {
        name: "description",
        content:
          "Explore interior, exterior, and complete vehicle detailing options from Nella's Enchanted Detailing.",
      },
      { property: "og:title", content: "Detailing Services | Nella's Enchanted Detailing" },
      { property: "og:description", content: "Choose the right level of clean for your vehicle." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services & pricing"
        title="Three ways to work your magic."
        description="Choose the package that suits your vehicle, from a quick refresh to the complete Midnight Magic treatment."
      />
      <section id="pricing" className="section-shell scroll-mt-24">
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="reveal-on-scroll">
            <p className="eyebrow">Official package menu</p>
            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Packages and prices at a glance.
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Call{" "}
              <a href={business.phoneHref} className="font-semibold text-foreground">
                {business.phone}
              </a>{" "}
              for details, custom questions, and same-week scheduling.
            </p>
          </div>
          <img
            src={images.packageFlyer}
            alt="Nella's Enchanted Detailing package menu and prices"
            className="mx-auto w-full max-w-xl rounded-xl shadow-xl"
          />
        </div>

        <ServicePackages
          eyebrow="Detailing Tiers"
          title="Compare Packages & Inclusions"
          description="Toggle between Sedan/Coupe and SUV/Truck sizes to preview estimated pricing for each tier."
        />
      </section>
    </>
  );
}
