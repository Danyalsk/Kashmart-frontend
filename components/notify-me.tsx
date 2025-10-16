"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NotifyMe() {
  const [email, setEmail] = React.useState("")
  const { toast } = useToast()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast({
      title: "Thanks for your interest!",
      description: "We’ll notify you when Kashmart launches.",
    })
    setEmail("")
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
      aria-label="Notify me when Kashmart launches"
    >
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <Input
        id="email"
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 rounded-full border-border/80"
      />
      <Button
        type="submit"
        className="h-11 rounded-full border border-black/10 bg-foreground text-background shadow-sm transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20"
      >
        <EmailIcon className="mr-2 size-4" aria-hidden="true" />
        Notify Me
      </Button>
    </form>
  )
}

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m22 6-10 7L2 6" />
    </svg>
  )
}
