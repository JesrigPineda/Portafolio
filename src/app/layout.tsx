import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesrig.dev"),
  title: {
    default: "Jesrig Pineda | Integration Engineer",
    template: "%s | Jesrig Pineda",
  },
  description:
    "Integration Engineer focused on APIs, automation, cloud workflows and internal tools for smoother operations.",
  applicationName: "Jesrig Pineda Portfolio",
  authors: [{ name: "Jesrig Pineda", url: "https://x.com/JesrigPineda" }],
  creator: "Jesrig Pineda",
  publisher: "Jesrig Pineda",
  keywords: [
    "Jesrig Pineda",
    "Integration Engineer",
    "Automation Engineer",
    "API integrations",
    "Cloud workflows",
    "Shopify integrations",
    "Firebase",
    "Node.js",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jesrig Pineda | Integration Engineer",
    description:
      "I design integrations, automations and cloud workflows for ecommerce, CRM, reporting and internal tools.",
    url: "/",
    siteName: "Jesrig Pineda",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jesrig Pineda - Integration Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesrig Pineda | Integration Engineer",
    description:
      "Integrations, automations and cloud workflows for smoother operations.",
    creator: "@JesrigPineda",
    images: ["/twitter-image"],
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
    { media: "(prefers-color-scheme: light)", color: "#f4f4f2" },
    { media: "(prefers-color-scheme: dark)", color: "#111113" },
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
