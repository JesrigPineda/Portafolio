import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jesrig.dev"),
  title: {
    default: "Jesrig Pineda — Software Engineer | Integrations, Automation & Cloud",
    template: "%s | Jesrig Pineda",
  },
  description:
    "Software Engineer especializado en APIs, backend, integraciones, automatización y cloud para operaciones confiables y mantenibles.",
  applicationName: "Jesrig Pineda Portfolio",
  authors: [{ name: "Jesrig Pineda", url: "https://github.com/JesrigPineda" }],
  creator: "Jesrig Pineda",
  publisher: "Jesrig Pineda",
  keywords: [
    "Jesrig Pineda",
    "Software Engineer",
    "Integration Engineer",
    "Automation Engineer",
    "Backend Engineer",
    "API integrations",
    "Cloud automation",
    "Shopify integrations",
    "Firebase",
    "Node.js",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jesrig Pineda — Software Engineer | Integrations, Automation & Cloud",
    description:
      "I build APIs, backend services, integrations and cloud automations that simplify complex operations.",
    url: "/",
    siteName: "Jesrig Pineda",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jesrig Pineda — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesrig Pineda — Software Engineer | Integrations, Automation & Cloud",
    description:
      "APIs, backend services, integrations, automation and cloud.",
    creator: "@JesrigPineda",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("jesrig-theme");
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var shouldUseDark = theme ? theme === "dark" : prefersDark;
                document.documentElement.classList.toggle("dark", shouldUseDark);
                document.documentElement.style.colorScheme = shouldUseDark ? "dark" : "light";
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
