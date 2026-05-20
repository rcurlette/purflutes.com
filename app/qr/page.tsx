import type { Metadata } from "next"
import QRCode from "qrcode"

export const metadata: Metadata = {
  title: "Booth QR Code",
  description: "Printable QR code for the PUR Flutes at TRYP EXPO Berlin 2026.",
  robots: { index: false, follow: false },
}

const TARGET_URL = "https://purflutes.com/tryp"

async function getQrDataUrl() {
  return QRCode.toDataURL(TARGET_URL, {
    errorCorrectionLevel: "H",
    margin: 2,
    width: 1200,
    color: {
      dark: "#1a1a2e",
      light: "#f5efe1",
    },
  })
}

export default async function QrPage() {
  const dataUrl = await getQrDataUrl()

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="rounded-lg border border-border/60 bg-card p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Booth display</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
          Scan. Sit. Sound.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          This QR code points to <span className="font-mono text-foreground/80">{TARGET_URL}</span>.
          Print it large for the booth, or display it from a phone or tablet — anyone who scans lands
          on the TRYP welcome page where they can leave their email and grab the event guide.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 rounded-lg border border-primary/30 bg-primary/5 p-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dataUrl}
            alt={`QR code linking to ${TARGET_URL}`}
            width={420}
            height={420}
            className="h-auto w-full max-w-[420px] rounded-md"
          />
          <p className="text-center font-serif text-2xl italic text-foreground/90">
            Tune out the noise. Tune into the soul.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            purflutes.com/tryp
          </p>
        </div>

        <div className="mt-10 grid gap-4 text-sm sm:grid-cols-2">
          <div className="rounded-md border border-border/60 bg-secondary/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Print tip</p>
            <p className="mt-2 text-foreground/80">
              Right-click the QR image and &ldquo;Save image as…&rdquo; — it&apos;s 1200×1200 px,
              good for posters up to A2.
            </p>
          </div>
          <div className="rounded-md border border-border/60 bg-secondary/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Want a custom URL?</p>
            <p className="mt-2 text-foreground/80">
              Edit <span className="font-mono text-foreground">app/qr/page.tsx</span> and change
              <span className="font-mono text-foreground"> TARGET_URL</span> to repoint this code anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
