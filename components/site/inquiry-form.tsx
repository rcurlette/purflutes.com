"use client"

import { useState, useTransition } from "react"
import { toast } from "sonner"
import { submitInquiry } from "@/app/actions/inquiry"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"

type Props = {
  fluteSlug?: string
  fluteName?: string
}

export function InquiryForm({ fluteSlug, fluteName }: Props) {
  const [pending, startTransition] = useTransition()
  const [done, setDone] = useState(false)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitInquiry({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone") || undefined,
        message: formData.get("message"),
        fluteSlug,
        fluteName,
      })
      if (result.ok) {
        setDone(true)
        toast.success("Inquiry sent. Robert will be in touch soon.")
      } else {
        toast.error(result.error)
      }
    })
  }

  if (done) {
    return (
      <div
        className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center"
        role="status"
      >
        <p className="font-serif text-2xl text-primary">Thank you.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Robert reads every message personally and typically responds within 1–2 days.
          Watch for a note from <span className="text-foreground">robert.curlette@gmail.com</span>.
        </p>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-2">
        <Label htmlFor="inq-name">Your name</Label>
        <Input id="inq-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <Label htmlFor="inq-email">Email</Label>
          <Input id="inq-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="inq-phone">
            Phone <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input id="inq-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="inq-message">Your message</Label>
        <Textarea
          id="inq-message"
          name="message"
          required
          rows={6}
          placeholder={
            fluteName
              ? `I'd love to know more about the ${fluteName}…`
              : "Tell us what you're looking for — a key, a use, a feeling…"
          }
        />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={pending} size="lg">
          {pending ? (
            <>
              <Spinner className="size-4" /> Sending…
            </>
          ) : (
            "Send inquiry"
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          {fluteName ? `About: ${fluteName}` : "We'll never share your info."}
        </p>
      </div>
    </form>
  )
}
