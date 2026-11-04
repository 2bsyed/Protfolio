import PortfolioExperience from "@/components/PortfolioExperience";
import { getSiteUrl } from "@/lib/site-url";

export default function Home() {
  const origin = getSiteUrl().origin;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    url: origin,
    name: "Syed Abrar Fiaz",
    jobTitle: "Full-Stack and AI Engineer",
    email: "mailto:abrarfiaz12@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    sameAs: ["https://github.com/2bsyed", "https://linkedin.com/in/2bsyed"],
    knowsAbout: ["Software engineering", "Backend systems", "SaaS", "Artificial intelligence", "Machine learning"],
  };

  const websiteData = { "@context": "https://schema.org", "@type": "WebSite", name: "Syed Abrar Fiaz", url: origin, inLanguage: "en" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PortfolioExperience />
    </>
  );
}
