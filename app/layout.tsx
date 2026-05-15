import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cardellino.tech"),
  title: "Dominic Cardellino — Senior DevOps & SRE Freelancer",
  description:
    "Senior DevOps & SRE engineer for tech startups. End-to-end infrastructure ownership — CI/CD, Kubernetes, platform engineering. No agencies, no junior handoffs.",
  openGraph: {
    title: "Dominic Cardellino — Senior DevOps & SRE Freelancer",
    description:
      "Senior DevOps & SRE engineer for tech startups. End-to-end infrastructure ownership — CI/CD, Kubernetes, platform engineering. No agencies, no junior handoffs.",
    url: "https://cardellino.tech",
    siteName: "cardellino.tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dominic Cardellino — Senior DevOps & SRE Freelancer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominic Cardellino — Senior DevOps & SRE Freelancer",
    description:
      "Senior DevOps & SRE engineer for tech startups. End-to-end infrastructure ownership — CI/CD, Kubernetes, platform engineering.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
