import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ModernMenu from "@/components/ModernMenu";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S. Kershaw & Sons | Luxury Real Estate Since 1845",
  description: "Experience a legacy of excellence in luxury real estate. Curating the world's most exceptional properties for discerning clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} bg-background text-foreground antialiased`}>
        <CustomCursor />
        <ModernMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
