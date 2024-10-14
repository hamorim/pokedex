import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Pokedex";
const APP_DEFAULT_TITLE = "Pokedex";
const APP_TITLE_TEMPLATE = "%s - Guiding light on your path to Pokemon mastery";
const APP_DESCRIPTION = "Guiding light on your path to Pokemon mastery";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#333",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <Providers>
          <div className="min-w-[100dvw] h-screen bg-muted/20">
            <Header />
            <main className="p-6 max-w-md md:max-w-7xl mx-auto">{children}</main>
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
