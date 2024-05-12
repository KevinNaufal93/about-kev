import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Naufal Permana",
  description: "Powered by NextJs and Bali beans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/code.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
