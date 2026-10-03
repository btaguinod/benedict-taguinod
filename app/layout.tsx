import type { Metadata, Viewport } from "next"
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google"

import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  axes: ["opsz", "SOFT", "WONK"],
})

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://benedict-taguinod.com"),
  title: "Benedict Taguinod — web + cloud engineer",
  description:
    "Berkeley EECS graduate. Ex-HPE cloud developer (Go, Terraform, Kubernetes). Lead engineer at Conectado, building tech-powered pathways to economic mobility.",
  openGraph: {
    title: "Benedict Taguinod — web + cloud engineer",
    description:
      "Berkeley EECS graduate. Ex-HPE cloud developer (Go, Terraform, Kubernetes). Lead engineer at Conectado.",
    url: "https://benedict-taguinod.com",
    siteName: "Benedict Taguinod",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benedict Taguinod — web + cloud engineer",
    description:
      "Berkeley EECS graduate. Ex-HPE cloud developer (Go, Terraform, Kubernetes). Lead engineer at Conectado.",
  },
}

export const viewport: Viewport = {
  themeColor: "#090b19",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        jetbrainsMono.variable,
        "font-sans",
        dmSans.variable,
        fraunces.variable
      )}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "matchMedia('(prefers-reduced-motion: no-preference)').matches && document.documentElement.classList.add('js')",
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
