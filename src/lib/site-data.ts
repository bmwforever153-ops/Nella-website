import heroImage from "@/assets/nellas-hero.jpg";
import exteriorImage from "@/assets/nellas-exterior.jpg";
import interiorImage from "@/assets/nellas-interior.jpg";
import washImage from "@/assets/nellas-wash.jpg";
import packageFlyer from "@/assets/nellas-packages.png.asset.json";

export const business = {
  name: "Nella's Enchanted Detailing",
  shortName: "NELLA'S",
  facebookUrl: "https://www.facebook.com/p/Nellas-Enchanted-Detailing-61594213333847/",
  phone: "(614) 394-1013",
  phoneHref: "tel:+16143941013",
  tagline: "Car dirty inside or out? We have several levels of clean for you to select from.",
};

export const images = {
  heroImage,
  exteriorImage,
  interiorImage,
  washImage,
  packageFlyer: packageFlyer.url,
};

export interface ServicePackage {
  id: string;
  tier: "Basic" | "Interior" | "Full Detail";
  title: string;
  price: string;
  sedanPrice: string;
  suvPrice: string;
  duration: string;
  badge?: string;
  popular?: boolean;
  description: string;
  image: string;
  includes: string[];
}

export const services: ServicePackage[] = [
  {
    id: "basic",
    tier: "Basic",
    title: "The Quick Spell",
    price: "$75–$100",
    sedanPrice: "$75",
    suvPrice: "$100",
    duration: "1.5–2 hrs",
    badge: "Quick Refresh",
    popular: false,
    description: "A quick inside-and-out refresh for everyday upkeep and regular maintenance.",
    image: exteriorImage,
    includes: [
      "Interior wipe down & dash dusting",
      "Quick sweep & light vacuum",
      "Door jams wiped clean",
      "Exterior hand wash & rinse",
      "Tire shine dressing",
      "Streak-free glass & windows",
    ],
  },
  {
    id: "interior",
    tier: "Interior",
    title: "The Full Enchantment",
    price: "$125–$150",
    sedanPrice: "$125",
    suvPrice: "$150",
    duration: "2.5–3.5 hrs",
    badge: "Most Popular",
    popular: true,
    description:
      "A deeper cabin reset with hand wax, surface decontamination, and focused spot care.",
    image: interiorImage,
    includes: [
      "Deep interior scrub & sanitization",
      "Thorough deep sweep & vacuuming",
      "Door jams degreased & cleaned",
      "Exterior hand wash + protective hand wax",
      "Long-lasting tire shine",
      "Crystal-clear window polishing",
      "Targeted upholstery & seat spot clean",
    ],
  },
  {
    id: "full-detail",
    tier: "Full Detail",
    title: "Midnight Magic",
    price: "$200–$225",
    sedanPrice: "$200",
    suvPrice: "$225",
    duration: "4–5 hrs",
    badge: "Complete Magic",
    popular: false,
    description:
      "The complete enchantment from bumper to bumper, including deep carpet extraction.",
    image: heroImage,
    includes: [
      "Full interior scrub & sanitizing",
      "Deep sweep & crevices detailing",
      "Deep hot-water carpet & mat extraction",
      "Complete door & trunk jamb detailing",
      "Exterior premium foam wash + hand wax",
      "Premium tire & trim dressing",
      "Interior & exterior precision glass polish",
      "Headliner & upholstery spot clean",
    ],
  },
];

export const gallery = [
  {
    src: heroImage,
    title: "Finished to shine",
    category: "Complete detail",
    width: 1536,
    height: 1024,
  },
  {
    src: exteriorImage,
    title: "Paintwork care",
    category: "Exterior detail",
    width: 1200,
    height: 912,
  },
  {
    src: interiorImage,
    title: "A cabin reset",
    category: "Interior detail",
    width: 1200,
    height: 912,
  },
  {
    src: washImage,
    title: "The careful clean",
    category: "Exterior wash",
    width: 1200,
    height: 912,
  },
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  vehicle: string;
  tier: "Basic" | "Interior" | "Full Detail";
  packageTitle: string;
  title: string;
  review: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    location: "Columbus, OH",
    rating: 5,
    date: "2 weeks ago",
    vehicle: "2023 BMW M340i",
    tier: "Full Detail",
    packageTitle: "Midnight Magic",
    title: "Better shine than the showroom floor",
    review:
      "Booked the Midnight Magic tier before a road trip. Nella took extreme care with my mineral gray paint and the interior smells fresh without any harsh chemical scent. The hand wax gave the paint incredible depth.",
    verified: true,
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    location: "Dublin, OH",
    rating: 5,
    date: "1 month ago",
    vehicle: "2022 Toyota Highlander",
    tier: "Interior",
    packageTitle: "The Full Enchantment",
    title: "Vanished two years of kid & dog chaos",
    review:
      "With two golden retrievers and three young kids, my backseat was completely covered in ground-in snacks and fur. Nella worked genuine magic on the carpets and seats. I honestly didn't think the stains would come out, but it looks brand new.",
    verified: true,
  },
  {
    id: "test-3",
    name: "David Kim",
    location: "Westerville, OH",
    rating: 5,
    date: "3 weeks ago",
    vehicle: "2024 Tesla Model Y",
    tier: "Basic",
    packageTitle: "The Quick Spell",
    title: "Perfect maintenance wash & quick sweep",
    review:
      "The Quick Spell was exactly what I needed between big road trips. Clean glass inside and out with zero streaking, pristine door jambs, and tires dressed with just the right amount of satin shine.",
    verified: true,
  },
  {
    id: "test-4",
    name: "Elena Rostova",
    location: "Upper Arlington, OH",
    rating: 5,
    date: "Last month",
    vehicle: "2021 Porsche Macan S",
    tier: "Full Detail",
    packageTitle: "Midnight Magic",
    title: "Meticulous eye for every crevice",
    review:
      "I am very particular about my car's leather stitching and gloss black trim. Nella took the time to meticulously clean every AC vent, console seam, and wheel barrel. Exceptional communication and punctual mobile service.",
    verified: true,
  },
  {
    id: "test-5",
    name: "Brian Mitchell",
    location: "Pickerington, OH",
    rating: 5,
    date: "2 months ago",
    vehicle: "2020 Ford F-150 Lariat",
    tier: "Interior",
    packageTitle: "The Full Enchantment",
    title: "Deep scrub brought the leather back to life",
    review:
      "My truck gets used for work and camping on weekends. The deep sweep, seat scrub, and leather hydration took care of all the dust and grime. Very reasonable pricing for the level of effort and craft delivered.",
    verified: true,
  },
  {
    id: "test-6",
    name: "Jessica Albright",
    location: "Grandview Heights, OH",
    rating: 5,
    date: "3 weeks ago",
    vehicle: "2023 Audi Q5",
    tier: "Full Detail",
    packageTitle: "Midnight Magic",
    title: "Honest, courteous, and truly enchanted results",
    review:
      "Booking was seamless through the website and direct call. The car was sparkling from the wheels to the sunroof. You can tell they take immense pride in their work. I’ll definitely be setting up regular details.",
    verified: true,
  },
];
