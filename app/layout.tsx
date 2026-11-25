import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Shreejee Nexus",
  description: "Research-led insights. Connected growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body className="bg-mist font-body text-peacock antialiased">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}