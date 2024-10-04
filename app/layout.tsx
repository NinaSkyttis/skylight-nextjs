import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Banner } from "./components/banner";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
  variable: "--poppins",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skylight",
  description: "A demo for Skylight by Nina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased min-h-screen`}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
