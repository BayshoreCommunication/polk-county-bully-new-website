import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
const gemstone = localFont({
  src: "../public/fonts/Gemstone.ttf",
  variable: "--font-gemstone",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Polk County Bully",
  description: "Polk County Bully Website",
  metadataBase: new URL("https://bayai-chatbot-website.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gemstone.variable} ${poppins.variable}`}>
      <Navbar />
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
