"use client"

import { useState, useTransition } from "react"
import { toast } from "sonner"
import { submitSignup } from "@/app/actions/signup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"

type Props = {
  source?: string
  showName?: boolean
  showInterests?: boolean
  submitLabel?: string
  successMessage?: string
  className?: string
}

export function SignupForm({
  source = "website",
  showName = false,
  showInterests = false,
  submitLabel = "Sign up",
  successMessage = "You're on the list. Welcome.",
  className,
}: Props) {
  const [pending, startTransition] = useTransition()
  const [done, setDone] = useState(false)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitSignup({
        email: formData.get("email"),
        name: formData.get("name") || undefined,
        source,
        interests: formData.get("interests") || undefined,
      })
      if (result.ok) {
        setDone(true)
        toast.success(successMessage)
      } else {
        toast.error(result.error)
      }
    })
  }

  if (done) {
    return (
      <div
        className={`rounded-lg border border-primary/30 bg-primary/5 p-6 text-center ${className ?? ""}`}
        role="status"
      >
        <p className="font-serif text-xl text-primary">{successMessage}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll be in touch with new flutes, ceremonies, and event news.
        </p>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className={`grid gap-4 ${className ?? ""}`} noValidate>
      {showName && (
        <div className="grid gap-2">
          <Label htmlFor="signup-name">Name</Label>
          <Input id="signup-name" name="name" type="text" placeholder="Your name" autoComplete="name" />
        </div>
      )}
      <div className="grid gap-2">
        <Label htmlFor="signup-email">Email</Label>
        <Input
          id="signup-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      {showInterests && (
        <div className="grid gap-2">
          <Label htmlFor="signup-interests">What draws you here?</Label>
          <Input
            id="signup-interests"
            name="interests"
            type="text"
            placeholder="e.g. flutes, breathwork, ceremony"
            maxLength={200}
          />
        </div>
      )}
      <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
        {pending ? (
          <>
            <Spinner className="size-4" /> Sending…
          </>
        ) : (
          submitLabel
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        No spam. Just flute drops, ceremony invites, and event news. Unsubscribe anytime.
      </p>
    </form>
  )
}
