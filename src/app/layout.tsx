import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorTrail from "@/components/CursorTrail";

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-instrument",
  display: "swap",
});

const interTight = Inter_Tight({ 
  subsets: ["latin"], 
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S. Kershaw & Sons | Chartered Surveyors & Property Consultants",
  description: "Established 1845. Expert building consultancy, property investment, and real estate management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${interTight.variable} bg-background text-foreground antialiased`}>
        <CursorTrail />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
