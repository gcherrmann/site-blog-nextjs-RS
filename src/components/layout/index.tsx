import { Inter } from "next/font/google";
import React from "react";
import Header from "../header";
import Footer from "../footer";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="flex flex-1 flex-col mb-12">{children}</main>

      <Footer />
    </div>
  );
}
