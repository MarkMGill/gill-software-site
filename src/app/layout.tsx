import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import logo from "../assets/tree_logo.png";
import { siteConfig } from "../lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mark Gill | Full-Stack Developer in North Attleboro, MA",
    template: "%s | Gill Software Solutions",
  },
  description: "North Attleboro, MA full-stack developer building reliable web applications, mobile apps, APIs, and production software with React, Next.js, React Native, Node.js, and TypeScript.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  keywords: [
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "Node.js developer",
    "TypeScript developer",
    "web application development",
    "mobile app development",
    "API development",
    "North Attleboro software developer",
    "Massachusetts web developer",
    "New England app developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: "Mark Gill | Full-Stack Developer in North Attleboro, MA",
    description: "Web, mobile, and backend software development based in North Attleboro, Massachusetts and serving clients nationwide.",
  },
  twitter: {
    card: "summary",
    title: "Mark Gill | Full-Stack Developer in North Attleboro, MA",
    description: "Web, mobile, and backend software development based in North Attleboro, Massachusetts and serving clients nationwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: logo.src, sizes: "32x32", type: "image/png" },
      { url: logo.src, sizes: "64x64", type: "image/png" },
    ],
    shortcut: [{ url: logo.src, sizes: "64x64", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
