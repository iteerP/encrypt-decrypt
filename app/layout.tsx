import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encrypt Decrypt",
  description: "Master the Art of Cryptography, One Puzzle at a Time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Game background */}
        <Image
          src={"/background.webp"}
          alt="game background"
          className="absolute -z-[1] object-cover md:object-center lg:object-[0%_40%]"
          fill
          priority
        />
        {children}
      </body>
    </html>
  );
}
