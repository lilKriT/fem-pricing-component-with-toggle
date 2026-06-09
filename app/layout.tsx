import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monsterratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
  style: "normal",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Pricing Component with Toggle | FEM / lilKriT",
  description: "Created by lilKriT using Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monsterratSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
