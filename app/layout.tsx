import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sphire — Project & Construction Management",
  description:
    "Sphire delivers expert project management and construction management services — from concept to completion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0e0e0e] text-[#f0f0f0]">
        {children}
      </body>
    </html>
  );
}
