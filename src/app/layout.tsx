import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language-provider";
import { ScrollExperience } from "@/components/scroll-experience";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jesrig.dev"),
  title: {
    default: "Jesrig Pineda — Software Engineer | Backend e integraciones",
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
  openGraph: {
    title: "Jesrig Pineda — Software Engineer | Backend e integraciones",
    description:
      "Software Engineer especializado en backend, integraciones, automatización y servicios cloud.",
    url: "https://jesrig.dev/",
    siteName: "Jesrig Pineda",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jesrig Pineda — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesrig Pineda — Software Engineer | Backend e integraciones",
    description:
      "Software Engineer especializado en backend, integraciones, automatización y servicios cloud.",
    images: ["/opengraph-image"],
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
        <LanguageProvider>
          <ScrollExperience />
          <Header />
          {children}
          <div className="page-shell">
            <Footer />
          </div>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
