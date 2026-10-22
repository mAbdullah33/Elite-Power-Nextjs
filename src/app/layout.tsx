import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elite Power (Pvt.) Ltd. — Electrical EPC, Switchgear & Automation",
    template: "%s · Elite Power (Pvt.) Ltd.",
  },
  description:
    "Elite Power (Pvt.) Ltd. is an Electrical, Instrumentation and Control system-oriented company specialising in EPC turnkey E&I projects, LV switchgear manufacturing and SCADA development nationwide.",
  keywords: [
    "Elite Power",
    "Electrical EPC Pakistan",
    "LV Switchgear",
    "SCADA development",
    "Oil depot metering",
    "ATG system",
    "Cathodic protection",
    "PLC DCS SCADA",
    "ATEX certified",
    "IMS SAP integrated",
  ],
  authors: [{ name: "Elite Power (Pvt.) Ltd." }],
  creator: "Elite Power (Pvt.) Ltd.",
  publisher: "Elite Power (Pvt.) Ltd.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Elite Power (Pvt.) Ltd.",
    description:
      "Electrical EPC, LV switchgear manufacturing and SCADA development under one roof. ZERO LTI company · IMS · SAP · ATEX certified.",
    url: "https://www.elitepower.com.pk",
    siteName: "Elite Power (Pvt.) Ltd.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Power (Pvt.) Ltd.",
    description: "Electrical EPC, LV switchgear & SCADA development under one roof.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
