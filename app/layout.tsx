import type { Metadata } from "next"
import { Orbitron, Space_Mono } from "next/font/google"
import "./globals.css"

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
        default: "$TRDG Token | The Strongest Creature in Crypto | Tardigrades Finance",
        template: "%s | $TRDG Token"
    },
    description: "Blockchain Tardigrades! $TRDG is a symbol of the strongest creature in the universe. Listed on BSC and ETH networks since 2021. LP burned for eternity, contract renounced. The only meme coin that survives everything. #BeTheFuture",
    keywords: [
        // Core Brand
        "TRDG", "TRDG token", "Tardigrades", "Tardigrades Finance", "tardigrade crypto", "tardigrade memecoin",
        "tardigrade token", "tardigrade cryptocurrency", "water bear token", "water bear crypto", "moss piglet crypto",

        // Resilience Theme
        "resilient crypto", "resilient token", "survivor token", "indestructible cryptocurrency",
        "bear market resilient token", "crash-proof memecoin", "crypto survivor", "extremophile blockchain",
        "cryptobiosis token", "microscopic organism crypto", "biological resilience token",

        // Technical Features
        "deflationary token", "reflection token", "burned liquidity crypto", "renounced contract token",
        "LP burned token", "contract renounced crypto", "2021 token", "2021 token listing",
        "deflationary token BSC", "reflection token Ethereum", "dual-chain token", "multi-chain memecoin",

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
        title: "$TRDG Token | The Strongest Creature in Crypto",
        description: "Blockchain Tardigrades! $TRDG is the most resilient token in the universe. LP burned for eternity. Contract renounced. Surviving since 2021. #BeTheFuture",
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
        title: "$TRDG Token | The Strongest Creature in Crypto",
        description: "Blockchain Tardigrades! The most resilient token in the universe. LP burned for eternity. Surviving since 2021. #BeTheFuture 💧🐻",
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
                            "description": "Blockchain Tardigrades! The most resilient decentralized token in the universe.",
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
            </body>
        </html>
    )
}
