import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "TRDG | The Universe's Most Resilient Token",
  description:
    "Discover $TRDG - the deflationary token inspired by nature's most indestructible creature. Join the Extremophiles community today!",
  icons: {
    icon: [
      {
        url: "/images/MISSING_TRDG Favicon-pzqoOo1Ph2QIrFEmzcMDy7ol2meQo9.png",
        href: "/images/MISSING_TRDG Favicon-pzqoOo1Ph2QIrFEmzcMDy7ol2meQo9.png",
      },
    ],
    apple: [
      {
        url: "/images/MISSING_TRDG Favicon-pzqoOo1Ph2QIrFEmzcMDy7ol2meQo9.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tardigrades.finance/",
    title: "TRDG | The Universe's Most Resilient Token",
    description:
      "Discover $TRDG - the deflationary token inspired by nature's most indestructible creature. Join the Extremophiles community today!",
    siteName: "TRDG Finance",
    images: [
      {
        url: "/images/MISSING_TRDG TRDGtoken Tardigrades-yDHv25jiXUI8c4EJk521QzI6Elfx6r.png",
        width: 1200,
        height: 630,
        alt: "TRDG - Tardigrades Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRDG | The Universe's Most Resilient Token",
    description:
      "Discover $TRDG - the deflationary token inspired by nature's most indestructible creature. Join the Extremophiles community today!",
    images: [
      "/images/MISSING_TRDG TRDGtoken Tardigrades-yDHv25jiXUI8c4EJk521QzI6Elfx6r.png",
    ],
    creator: "@TRDGtoken",
  },
    generator: 'v0.app'
}

// Make sure we're not adding any manual head tags here either
// The existing code should be fine, but let's ensure it's properly configured:

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/images/MISSING_TRDG Favicon-pzqoOo1Ph2QIrFEmzcMDy7ol2meQo9.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
