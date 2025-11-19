import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3005'),
  title: {
    default: "Paramveer Singh - Senior Frontend Engineer",
    template: "%s | Paramveer Singh",
  },
  description: "Senior Frontend Engineer specializing in real-time data systems, enterprise dashboards, and scalable web applications. Building data products at Etisalat.",
  keywords: [
    "Frontend Developer",
    "Senior Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Real-time Data",
    "Dashboard Development",
    "Data Visualization",
    "Kafka",
    "Apache Flink",
    "Web Performance",
    "Dubai Developer",
  ],
  authors: [{ name: "Paramveer Singh", url: "https://github.com/paramvsi" }],
  creator: "Paramveer Singh",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Paramveer Singh - Senior Frontend Engineer",
    description: "Building real-time data products and enterprise dashboards that make telecom-scale data usable.",
    siteName: "Paramveer Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paramveer Singh - Senior Frontend Engineer",
    description: "Building real-time data products and enterprise dashboards",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        jakarta.variable,
        jetbrains.variable,
        "font-sans antialiased bg-background min-h-screen"
      )}>
        {children}
      </body>
    </html>
  );
}
