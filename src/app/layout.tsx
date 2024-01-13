import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Stealth";
const description = "Stealth Dashboard - Select Agreements, Notices and Other Documents";
const DOMAIN = 'https://stealth-documents.netlify.app/';

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "stealth, documents, agreements",
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: `${DOMAIN}images/logo/192.png`,
    apple: `${DOMAIN}images/logo/192.png`,
  },
  openGraph: {
    type: "website",
    url: DOMAIN,
    title,
    description,
    siteName: title,
    images: [
      {
        url: `${DOMAIN}images/logo/192.png`,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: title,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:text-sm bg-gray-50`}>{children}</body>
    </html>
  );
}
