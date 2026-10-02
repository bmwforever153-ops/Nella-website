# Premium mobile detailing website

## Goal

Build a complete five-page client website that closely follows the clean, editorial UI and booking-focused experience of the supplied Atelier Detail reference, while using only verified information from the client's public Facebook page.

## Pages

- **Home:** premium car-led opening, key trust points, featured packages, transformation showcase, verified customer reviews, service area, FAQs, and footer.
- **Services & Pricing:** package tiers, inclusions, vehicle-size pricing, and clear booking actions.
- **Gallery:** polished portfolio layout for available client imagery and before/after work.
- **About:** verified business story, experience, credentials, and trust signals.
- **Contact / Booking:** phone, email, hours, service area, map link, and an accessible enquiry form.

## Visual direction

- Closely mirror the reference site's airy off-white canvas, dark typography, thin borders, compact rounded controls, editorial spacing, and premium automotive photography.
- Preserve its strong desktop composition while adapting navigation, pricing grids, gallery, and booking content for phones.
- Use subtle reveal and interaction motion, with reduced-motion support.

## Content rules

- Use the Facebook page and supplied image as the source of truth.
- Do not invent prices, reviews, certifications, hours, locations, or contact details.
- Where Facebook does not expose a requested fact, use a neutral “Contact for details” treatment rather than fabricated information.

## Technical details

- Create separate TanStack routes for Home, Services, Gallery, About, and Contact, each with unique metadata.
- Build shared navigation, footer, package cards, review cards, gallery treatments, FAQ accordion, and enquiry form from the existing design system.
- Keep the booking form front-end only unless a destination email or persistence service is explicitly available.
- Verify the finished experience on desktop and mobile, including navigation and form behavior.
