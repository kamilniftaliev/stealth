import type { Metadata } from "next";

const title = "Stealth";
const description =
  "Stealth Dashboard - Select Agreements, Notices and Other Documents";
const DOMAIN = new URL(process.env.URL as string);

export const metadata: Metadata = {
  title,
  description,
  keywords: "stealth, documents, agreements",
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: `${DOMAIN}images/logo/192.png`,
    apple: `${DOMAIN}images/logo/192.png`,
  },
  metadataBase: DOMAIN,
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
