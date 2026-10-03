import { ImageResponse } from "next/og";
import { SocialImage } from "@/components/social-image";
import { siteContent } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Jesrig Pineda — Software Engineer especializado en backend, integraciones, automatización y cloud";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialImage title={siteContent.es.hero.headline} eyebrow="SOFTWARE ENGINEER" description="Backend · Integraciones · Automatización · Cloud" />, size);
}
