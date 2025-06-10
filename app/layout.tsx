import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "SEO-Install - Serwis wentylacji i klimatyzacji"
const description = "Polski serwis wentylacji i klimatyzacji z wieloletnim doświadczeniem. Najlepsi w swoim fachu."

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || 'https://seo-install.pl'),
    title: title,
    description: description,
    keywords: [
        "SEO-Install",
        "wentylacja",
        "klimatyzacja",
        "serwis",
        "instalacja",
        "usługi",
    ],
    openGraph: {
        title: title,
        type: 'website',
        description: description,
        url: process.env.NEXT_PUBLIC_DOMAIN || 'https://seo-install.pl',
        siteName: title,
        images: [`${process.env.NEXT_PUBLIC_DOMAIN || 'https://seo-install.pl'}/thumbnail.png`]
    },
    twitter: {
        site: process.env.NEXT_PUBLIC_DOMAIN || 'https://seo-install.pl',
        title: title,
        description: description,
        images: [`${process.env.NEXT_PUBLIC_DOMAIN || 'https://seo-install.pl'}/thumbnail.png`],
        card: 'summary_large_image'
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth scroll-pt-28">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-pretty`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
