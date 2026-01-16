import type { Metadata } from "next"
import NemaHero from "@/components/nema/hero"
import NemaStory from "@/components/nema/story"
import NemaHelps from "@/components/nema/helps"
import NemaWhy from "@/components/nema/why"
import NemaJoin from "@/components/nema/join"
import NemaFooter from "@/components/nema/footer"
import NemaBackground from "@/components/nema/background"
import { ScrollingGradient } from "@/components/scrolling-gradient"

export const metadata: Metadata = {
  title: "NEMA | Tardigrade's Favorite Food",
  description:
    "Discover $NEMA - the token that feeds and strengthens TRDG through a perfect predator-prey relationship in the crypto ecosystem.",
  icons: {
    icon: [
      {
        url: "/images/trdg-logo.png",
        href: "/images/trdg-logo.png",
      },
    ],
    apple: [
      {
        url: "/images/trdg-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tardigrades.finance/nematodes",
    title: "NEMA | Tardigrade's Favorite Food",
    description:
      "Discover $NEMA - the token that feeds and strengthens TRDG through a perfect predator-prey relationship in the crypto ecosystem.",
    siteName: "NEMA Token",
    images: [
      {
        url: "/images/trdg-logo.png",
        width: 1200,
        height: 630,
        alt: "NEMA - Tardigrade's Favorite Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEMA | Tardigrade's Favorite Food",
    description:
      "Discover $NEMA - the token that feeds and strengthens TRDG through a perfect predator-prey relationship in the crypto ecosystem.",
    images: ["/images/trdg-logo.png"],
    creator: "@TRDGtoken",
  },
}

export default function NematodesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black text-white">
      {/* Single scrolling gradient background */}
      <ScrollingGradient colorScheme="nema" />

      {/* Animated particles background - keeping this for additional visual interest */}
      <NemaBackground />

      <NemaHero />
      <NemaStory />
      <NemaHelps />
      <NemaWhy />
      <NemaJoin />
      <NemaFooter />
    </main>
  )
}
