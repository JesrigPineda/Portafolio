import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { JsonLd } from "@/components/json-ld";
import { links } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "https://jesrig.dev/" },
};

export default function Home() {
  return (
    <main id="content" tabIndex={-1} className="page-shell">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Person", "@id": "https://jesrig.dev/#person", name: "Jesrig Pineda", url: "https://jesrig.dev/", jobTitle: "Software Engineer", sameAs: [links.linkedin, links.github] },
          { "@type": "WebSite", "@id": "https://jesrig.dev/#website", name: "Jesrig Pineda — Portfolio", url: "https://jesrig.dev/", author: { "@id": "https://jesrig.dev/#person" } },
        ],
      }} />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
