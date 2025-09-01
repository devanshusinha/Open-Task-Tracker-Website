import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opentasktracker.org"),
  title: {
    default: "Open Task Tracker",
    template: "%s · Open Task Tracker",
  },
  description:
    "A beautiful, 100% local, open-source task tracker for individuals.",
  keywords: [
    "Open Task Tracker",
    "task manager",
    "to-do app",
    "open source",
    "local first",
    "privacy",
    "productivity",
    "offline",
    "mac app",
  ],
  authors: [{ name: "Devanshu Sinha", url: "https://devanshusinha.com" }],
  creator: "Devanshu Sinha",
  publisher: "Open Task Tracker",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://opentasktracker.org/",
    title: "Open Task Tracker",
    description:
      "A beautiful, 100% local, open-source task tracker for individuals.",
    siteName: "Open Task Tracker",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Open Task Tracker – local, open-source task manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@devanshusinha_",
    creator: "@devanshusinha_",
    title: "Open Task Tracker",
    description:
      "A beautiful, 100% local, open-source task tracker for individuals.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "productivity",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
