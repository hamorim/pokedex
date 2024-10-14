import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/layout/providers";
import Header from "@/components/layout/header";
import { METADATA, VIEWPORT } from "@/app/metadata";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = METADATA;
export const viewport = VIEWPORT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <Providers>
          <div className="min-w-[100dvw] h-full min-h-screen bg-muted/20">
            <Header />
            <main className="p-6 max-w-md md:max-w-7xl mx-auto">{children}</main>
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
