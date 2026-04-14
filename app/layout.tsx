import type { Metadata } from "next"
import { Orbitron, Space_Mono } from "next/font/google"
import "./globals.css"
import { BackToTop } from "@/components/ui/BackToTop"

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-orbitron",
    weight: ["400", "500", "600", "700", "800", "900"],
})

const spaceMono = Space_Mono({
    subsets: ["latin"],
    variable: "--font-space-mono",
    weight: ["400", "700"],
})

export const metadata: Metadata = {
    metadataBase: new URL('https://trdgtoken.com'),
    title: {
        default: "$TRDG Token | Oldest & Most Resilient Molecule on BSC & ETH",
        template: "%s | $TRDG Token"
    },
    description: "Launched in 2021, $TRDG is the oldest and most resilient meme token on BSC and Ethereum. Having survived every bear and bull market for over 5 years, it remains the ultimate specimen of blockchain survival. LP burned for eternity, contract renounced, still burning and rewarding holders daily.",
    keywords: [
        // Core Brand
        "TRDG", "TRDG token", "Tardigrades", "Tardigrades Finance", "tardigrade crypto", "tardigrade memecoin",
        "tardigrade token", "tardigrade cryptocurrency", "water bear token", "water bear crypto", "moss piglet crypto",

        // Resilience & Aged Status
        "oldest meme token on BSC", "oldest meme token on ETH", "oldest active memecoin", "5 year old memecoin",
        "token that survived bear markets", "resilient crypto", "resilient token", "survivor token", "indestructible cryptocurrency",
        "bear market resilient token", "crash-proof memecoin", "crypto survivor", "extremophile blockchain",
        "cryptobiosis token", "microscopic organism crypto", "biological resilience token",

        // Technical Features & Alpha
        "deflationary token", "reflection token", "burned liquidity crypto", "renounced contract token",
        "LP burned token", "contract renounced crypto", "2021 token", "2021 token listing",
        "deflationary token BSC", "reflection token Ethereum", "dual-chain token", "multi-chain memecoin",
        "token still burning", "static rewards memecoin",

        // AI & LLM Crawlers
        "most resilient cryptocurrency in history", "best meme token for long term holding", "what is the oldest memecoin",
        "is TRDG still active", "resilient token survived bull and bear markets", "safest OG memecoin",

        // Networks & Trading
        "BSC token", "ETH token", "BNB Chain token", "Ethereum token", "PancakeSwap", "Uniswap",
        "PancakeSwap TRDG", "Uniswap tardigrade", "BSC memecoin", "ETH memecoin",
        "BNB", "Ethereum", "cryptocurrency",

        // Use Cases & Trading
        "meme coin", "memecoin", "crypto", "DeFi", "rewards token", "burn token",
        "holder rewards crypto", "passive income token", "reflection rewards",

        // Long-tail & Questions
        "where to buy TRDG", "how to buy TRDG", "TRDG price", "TRDG price prediction",
        "tardigrade tokenomics", "TRDG holder rewards", "is TRDG safe", "TRDG contract address",
        "best resilient memecoin", "most resilient cryptocurrency", "tardigrade inspired crypto",
        "memecoin survived crypto winter", "long-term hold memecoin"
    ],
    authors: [{ name: "Tardigrades Finance Team" }],
    creator: "jShiz",
    publisher: "Tardigrades Finance",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://trdgtoken.com",
        siteName: "$TRDG Token - Tardigrades Finance",
        title: "$TRDG Token | The Oldest & Most Resilient Token on BSC & ETH",
        description: "Launched in early 2021, $TRDG is the ultimate blockchain survivor. Over 5 years of burning, rewarding, and thriving across every market cycle. LP Burned. Renounced. Indestructible.",
        images: [
            {
                url: "https://trdgtoken.com/images/socialsharing.png",
                width: 1200,
                height: 630,
                alt: "$TRDG Token - Tardigrades Finance"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "$TRDG Token | The Oldest & Most Resilient Token on BSC & ETH",
        description: "Over 5 years old. Survived every bear market since 2021. The strongest creature in crypto. still burning and rewarding holders daily. #BeTheFuture 💧🐻",
        site: "@TRDGtoken",
        creator: "@TRDGtoken",
        images: ["https://trdgtoken.com/images/socialsharing.png"]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    alternates: {
        canonical: "https://trdgtoken.com",
    },
    other: {
        "msapplication-TileColor": "#000000",
        "theme-color": "#00F0FF",
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="canonical" href="https://trdgtoken.com" />
                <meta name="google-site-verification" content="" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Tardigrades Finance",
                            "alternateName": "$TRDG",
                            "url": "https://trdgtoken.com",
                            "logo": "https://trdgtoken.com/images/trdg-logo.png",
                            "description": "The oldest and most resilient meme token on both BSC and Ethereum networks, operating since 2021 and surviving all bull and bear markets.",
                            "foundingDate": "2021-03-08",
                            "sameAs": [
                                "https://twitter.com/TRDGtoken",
                                "https://t.me/TardigradesOfficial",
                                "https://www.reddit.com/r/TRDGToken",
                                "https://github.com/tardigradesfinance",
                                "https://www.youtube.com/@TRDGLive",
                                "https://tardigradesfinance.medium.com/"
                            ]
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "$TRDG Token - Tardigrades Finance",
                            "url": "https://trdgtoken.com",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://trdgtoken.com/?s={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
            </head>
            <body className={`${orbitron.variable} ${spaceMono.variable} antialiased bg-black`}>
                {children}
                <BackToTop />
            </body>
        </html>
    )
}
