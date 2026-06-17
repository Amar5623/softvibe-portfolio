import { services, testimonials, team, contact } from "@/data/portfolio-data";
import { siteConfig } from "@/lib/seo-config";

// Renders a <script type="application/ld+json"> block describing SoftVibe
// as a ProfessionalService: who founded it, what it offers, and real
// testimonials already shown on the page. This is read directly off
// data/portfolio-data.ts, so it can never drift out of sync with the
// content visitors actually see.
export default function StructuredData() {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    email: contact.email,
    description: siteConfig.description,
    founder: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.roles.join(", "),
    })),
    areaServed: "Worldwide",
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
      "Flutter",
      "SaaS Development",
      "Cloud Deployment",
      "Business Automation",
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      bestRating: "5",
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.displayName },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.quote,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}