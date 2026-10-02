import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Nella's Enchanted Detailing" },
      {
        name: "description",
        content: "Explore the finish and care behind Nella's Enchanted Detailing.",
      },
      { property: "og:title", content: "Detailing Gallery | Nella's Enchanted Detailing" },
      { property: "og:description", content: "See vehicle detailing inspiration, inside and out." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="Details worth looking closer at."
        description="A visual look at the careful finishes and refreshed spaces that inspire Nella's work."
      />
      <section className="section-shell grid gap-5 md:grid-cols-2">
        {gallery.map((item, index) => (
          <figure key={item.title} className={index === 0 ? "group md:col-span-2" : "group"}>
            <div
              className={
                index === 0
                  ? "aspect-[16/8] overflow-hidden rounded-xl"
                  : "aspect-[4/3] overflow-hidden rounded-xl"
              }
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                width={item.width}
                height={item.height}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </div>
            <figcaption className="flex justify-between gap-4 py-4">
              <span className="font-semibold">{item.title}</span>
              <span className="text-sm text-muted-foreground">{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="px-5 pb-24 text-center sm:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-secondary px-6 py-16">
          <p className="text-3xl font-semibold sm:text-5xl">Want to see the latest work?</p>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Current client transformations and updates are shared on Facebook.
          </p>
          <Button asChild variant="premium" size="lg" className="mt-7">
            <a
              href="https://www.facebook.com/p/Nellas-Enchanted-Detailing-61594213333847/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Facebook <ArrowRight />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
