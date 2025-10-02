import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { ThemeProvider } from "next-themes";
import { ActionSectionProvider } from "@/components/context/active-section-provider";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans", fonts)}>
        <ThemeProvider attribute="class">
          <ActionSectionProvider>{children}</ActionSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
