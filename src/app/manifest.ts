import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jesrig Pineda — Software Engineer | Integrations, Automation & Cloud",
    short_name: "Jesrig",
    description:
      "Software Engineer building APIs, backend services, integrations, automation and cloud systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f3",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
