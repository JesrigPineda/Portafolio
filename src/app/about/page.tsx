import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "La trayectoria y forma de pensar de Jesrig Pineda: ingeniería de software cerca de la operación.",
  alternates: { canonical: "/about" },
  openGraph: { title: "Sobre mí | Jesrig Pineda", description: "Ingeniería de software cerca de la operación.", url: "/about", siteName: "Jesrig Pineda", locale: "es_MX", type: "profile", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jesrig Pineda — Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "Sobre mí | Jesrig Pineda", description: "Ingeniería de software cerca de la operación.", images: ["/opengraph-image"] },
};
export default function About() { return <AboutPage />; }
