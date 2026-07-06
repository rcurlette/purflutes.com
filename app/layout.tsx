import type { Metadata, Viewport } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://purflutes.com"),
  title: {
    default: "PUR Flutes — Handcrafted Native American Style Flutes",
    template: "%s · PUR Flutes",
  },
  description:
    "Sound is medicine. PUR Flutes are handcrafted Native American style flutes for meditation, breathwork, ceremony, and soul. Hand-carved in the Bulgarian Rhodope mountains by Radenko Velinov and Robert.",
  keywords: [
    "Native American flute",
    "handcrafted flute",
    "sound healing",
    "meditation flute",
    "breathwork",
    "ceremonial flute",
    "PUR Flutes",
    "Berlin",
    "Bulgaria",
    "Rhodope mountains",
  ],
  openGraph: {
    title: "PUR Flutes — Handcrafted Native American Style Flutes",
    description:
      "Tune out the noise. Tune into the soul. Handcrafted flutes for meditation, ceremony, and sound healing.",
    url: "https://purflutes.com",
    siteName: "PUR Flutes",
    images: [{ url: "/banner.png", width: 1920, height: 800 }],
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#faf6ef",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geist.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
        <Toaster richColors position="top-center" />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
