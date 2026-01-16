import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "https://codfhq0cgwt6b0gl.public.blob.vercel-storage.com/nema-favicon-Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9.png",
        href: "https://codfhq0cgwt6b0gl.public.blob.vercel-storage.com/nema-favicon-Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9.png",
      },
    ],
    apple: [
      {
        url: "https://codfhq0cgwt6b0gl.public.blob.vercel-storage.com/nema-favicon-Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9Yd9Iy9.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function NematodesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
