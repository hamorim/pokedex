"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider as JotaiProvider } from "jotai";
import { TooltipProvider } from '@/components/ui/tooltip';

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <JotaiProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </JotaiProvider>
    </NextThemesProvider>
  );
}
