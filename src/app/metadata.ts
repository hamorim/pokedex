import type { Viewport, Metadata } from "next";

const APP_NAME = "Pokedex";
const APP_DEFAULT_TITLE = "Pokedex";
const APP_TITLE_TEMPLATE = "%s - Guiding light on your path to Pokemon mastery";
const APP_DESCRIPTION = "Guiding light on your path to Pokemon mastery";

export const METADATA: Metadata = {
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

export const VIEWPORT: Viewport = {
  themeColor: "#333",
};
