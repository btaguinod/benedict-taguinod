import type { Metadata, Viewport } from "next"
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site"

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Benedict Taguinod",
  email: `mailto:${EMAIL}`,
  url: SITE_URL,
  jobTitle: "Lead Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Conectado",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "UC Berkeley",
    },
  ],
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  knowsAbout: [
    "Go",
    "Terraform",
    "Kubernetes",
    "TypeScript",
    "React",
    "Next.js",
  ],
}

export const viewport: Viewport = {
  themeColor: "#FCECD8",
  colorScheme: "light",
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
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
