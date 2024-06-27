import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/component/Nav";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "travel website",
  description: "travel for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className=" relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
