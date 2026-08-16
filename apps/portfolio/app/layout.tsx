import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-heading', axes: ['opsz', 'SOFT', 'WONK'] });

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", jetbrainsMono.variable, "font-sans", dmSans.variable, fraunces.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
