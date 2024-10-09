import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import Header from "@/components/header";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Guiding light on your path to Pokemon mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <div className="flex min-h-screen w-full flex-col">
          <Header/>
          <main className="bg-muted/40 p-6 h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
