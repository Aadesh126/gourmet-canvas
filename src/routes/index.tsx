import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import {
  CursorGlow,
  LoadingCurtain,
  ScrollProgress,
  SmoothScroll,
} from "@/components/site/experience";
import {
  DiningExperience,
  Marquee,
  ReserveCta,
  SignatureDishes,
  Stats,
  Story,
  WhyChooseUs,
} from "@/components/site/sections-a";
import {
  Awards,
  ChefsSpecial,
  Contact,
  Faq,
  Gallery,
  MenuShowcase,
  SiteFooter,
  Testimonials,
} from "@/components/site/sections-b";

const title = "Maison Lumière — Two-Star Fine Dining in Paris VIII";
const description =
  "A seventeen-course seasonal tasting menu cooked over wood fire in Paris. Reserve a table at Maison Lumière, two Michelin stars, Rue de Penthièvre.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Maison Lumière",
          description,
          servesCuisine: "Modern French",
          priceRange: "€€€€",
          telephone: "+33 1 42 65 09 14",
          address: {
            "@type": "PostalAddress",
            streetAddress: "14 Rue de Penthièvre",
            addressLocality: "Paris",
            postalCode: "75008",
            addressCountry: "FR",
          },
          openingHours: "Tu-Sa 19:00-23:00",
          award: "Two Michelin Stars",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <LoadingCurtain />
      <SiteNav />
      <main>
        <Hero />
        <SignatureDishes />
        <Story />
        <WhyChooseUs />
        <DiningExperience />
        <MenuShowcase />
        <ChefsSpecial />
        <Marquee />
        <Gallery />
        <Testimonials />
        <Awards />
        <Stats />
        <ReserveCta />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
