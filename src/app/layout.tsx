import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeue-Medium.woff2",
  variable: "--font-helvetica",
  weight: "500",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400"],
  subsets: ["latin"],
});

const retroByte = localFont({
  src: "./fonts/RetroByte.woff2",
  variable: "--font-retrobyte",
  weight: "500",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.png" },
  title: "BuilderOS — An operating system for builders",
  description:
    "A collection of agent skills that give product builders a repeatable system for ideating, designing, and building software products with AI.",
  openGraph: {
    title: "BuilderOS — An operating system for builders",
    description:
      "A collection of agent skills that give product builders a repeatable system for ideating, designing, and building software products with AI.",
    siteName: "BuilderOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@chris_bgp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${helveticaNeue.variable} ${ibmPlexMono.variable} ${retroByte.variable}`}
    >
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
