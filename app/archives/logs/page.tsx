'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { ArchiveLogs } from "@/components/sections/ArchiveLogs"
import { StandardHero } from "@/components/layout/StandardHero"

export default function LogsPage() {
    return (
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>ARCHIVE <span className="text-trdg-cyan">LOGS</span></>}
                subtitle="Chronological history of the unkillable token since 2021"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <ArchiveLogs showTitle={false} />
                </div>
            </div>
            <Footer />
        </main>
    )
}
