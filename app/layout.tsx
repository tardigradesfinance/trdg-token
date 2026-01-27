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
    metadataBase: new URL('https://tardigradesfinance.com'),
    title: {
        default: "$TRDG Token | The Strongest Creature in Crypto | Tardigrades Finance",
        template: "%s | $TRDG Token"
    },
    description: "Blockchain Tardigrades! $TRDG is a symbol of the strongest creature in the universe. Listed on BSC and ETH networks since 2021. LP burned for eternity, contract renounced. The only meme coin that survives everything. #BeTheFuture",
    keywords: [
        "TRDG", "Tardigrades", "Tardigrades Finance", "BSC token", "ETH token",
        "meme coin", "crypto", "DeFi", "deflationary token", "reflection token",
        "PancakeSwap", "Uniswap", "BNB", "Ethereum", "cryptocurrency",
        "2021 token", "survivor token", "burn token", "rewards token"
    ],
    authors: [{ name: "Tardigrades Finance Team" }],
    creator: "jShiz",
    publisher: "Tardigrades Finance",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://tardigradesfinance.com",
        siteName: "$TRDG Token - Tardigrades Finance",
        title: "$TRDG Token | The Strongest Creature in Crypto",
        description: "Blockchain Tardigrades! $TRDG is the most resilient token in the universe. LP burned for eternity. Contract renounced. Surviving since 2021. #BeTheFuture",
        images: [
            {
                url: "/images/trdg-social-share.png",
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
        images: ["/images/trdg-social-share.png"]
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
        canonical: "https://tardigradesfinance.com",
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
                <link rel="canonical" href="https://tardigradesfinance.com" />
                <meta name="google-site-verification" content="" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Tardigrades Finance",
                            "alternateName": "$TRDG",
                            "url": "https://tardigradesfinance.com",
                            "logo": "https://tardigradesfinance.com/images/trdg-logo.png",
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
                            "url": "https://tardigradesfinance.com",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://tardigradesfinance.com/?s={search_term_string}",
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
