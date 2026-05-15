import type { Metadata } from "next";
import { JetBrains_Mono, Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
