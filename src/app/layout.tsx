import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/Sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex">
          <Sidenav />
          <main className="w-[92%] min-h-screen bg-white max-h-screen overflow-scroll p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
