import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Facebook, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { business } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Nella's Enchanted Detailing" },
      {
        name: "description",
        content: "Request a vehicle detailing appointment with Nella's Enchanted Detailing.",
      },
      { property: "og:title", content: "Book Nella's Enchanted Detailing" },
      {
        property: "og:description",
        content: "Tell us about your vehicle and the level of clean you need.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageIntro
        eyebrow="Contact & booking"
        title="Let’s make your car feel new again."
        description="Share a few details about your vehicle and what needs attention. You can also call or message Nella's directly."
      />
      <section className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-xl bg-primary p-7 text-primary-foreground sm:p-9">
          <p className="eyebrow text-primary-foreground/50">Booking details</p>
          <h2 className="mt-5 text-3xl font-semibold">Start the conversation.</h2>
          <p className="mt-4 leading-7 text-primary-foreground/60">
            Package pricing is listed on the services page. Availability is confirmed when you
            enquire.
          </p>
          <div className="mt-10 space-y-6">
            {[
              { Icon: Phone, title: "Phone", text: business.phone },
              { Icon: Facebook, title: "Facebook", text: "Message Nella's directly" },
              { Icon: MapPin, title: "Service area", text: "Confirmed when you enquire" },
              {
                Icon: CalendarDays,
                title: "Availability",
                text: "Appointment times confirmed directly",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-foreground/10">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-primary-foreground/50">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild variant="soft" className="mt-10 w-full">
            <a href={business.phoneHref}>
              <Phone /> Call {business.phone}
            </a>
          </Button>
        </aside>
        <div className="rounded-xl border border-border bg-card p-7 sm:p-9">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="grid size-16 place-items-center rounded-full bg-secondary">
                <CheckCircle2 className="size-7" />
              </span>
              <h2 className="mt-6 text-3xl font-semibold">Your enquiry is ready.</h2>
              <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                This preview does not send messages yet. Please call or message Nella's to complete
                your request.
              </p>
              <Button asChild variant="premium" className="mt-7">
                <a href={business.phoneHref}>Call {business.phone}</a>
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <h2 className="text-2xl font-semibold">Request an appointment</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Tell us what you can. Nella's will confirm the rest directly.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-11 text-base sm:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="Best number to reach you"
                    className="h-11 text-base sm:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicle" className="text-sm font-medium">
                    Vehicle
                  </Label>
                  <Input
                    id="vehicle"
                    name="vehicle"
                    required
                    placeholder="Year, make and model"
                    className="h-11 text-base sm:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium">
                    Package
                  </Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm shadow-xs outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="">Choose one</option>
                    <option>Basic — The Quick Spell ($75–$100)</option>
                    <option>Interior — The Full Enchantment ($125–$150)</option>
                    <option>Full Detail — Midnight Magic ($200–$225)</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    What needs attention?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about the vehicle's condition and what you would like cleaned."
                    className="text-base sm:text-sm"
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="premium"
                size="lg"
                className="mt-7 h-12 w-full text-base font-semibold shadow-md"
              >
                <Send className="size-4" /> Prepare enquiry
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
