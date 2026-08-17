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
    default: "Jesrig Pineda | Software & Integration Engineer",
    template: "%s | Jesrig Pineda",
  },
  description:
    "Software and integration engineer focused on APIs, automation, cloud solutions and internal tools for scalable operations.",
  applicationName: "Jesrig Pineda Portfolio",
  authors: [{ name: "Jesrig Pineda", url: "https://x.com/JesrigPineda" }],
  creator: "Jesrig Pineda",
  publisher: "Jesrig Pineda",
  keywords: [
    "Jesrig Pineda",
    "Integration Engineer",
    "Automation Engineer",
    "Software Engineer",
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
    title: "Jesrig Pineda | Software & Integration Engineer",
    description:
      "I build cloud integrations and automations across ecommerce, CRM, logistics, billing and reporting.",
    url: "/",
    siteName: "Jesrig Pineda",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jesrig Pineda - Software and Integration Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesrig Pineda | Software & Integration Engineer",
    description:
      "Cloud integrations and automation for scalable operations.",
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
