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
  title: "Paramveer Singh - Senior Frontend Engineer",
  description: "Building real-time data products and dashboards that make telecom-scale data usable.",
  keywords: ["Frontend Developer", "Real-time Data", "Dashboard Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Paramveer Singh" }],
  openGraph: {
    title: "Paramveer Singh - Senior Frontend Engineer",
    description: "Building real-time data products and dashboards",
    type: "website",
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
