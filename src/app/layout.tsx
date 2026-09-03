import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import logo from "./tree_logo.png";
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
  title: "Gill Software Solutions, LLC",
  description: "Portfolio website for Mark Gill, a senior full stack developer focused on React, Node.js, mobile apps, and production software delivery.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
