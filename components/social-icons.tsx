import type React from "react"
const links = [
  { href: "https://instagram.com/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://facebook.com/", label: "Facebook", Icon: FacebookIcon },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: LinkedinIcon },
]

export function SocialIcons() {
  return (
    <nav aria-label="Social media" className="flex items-center justify-center gap-5">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors"
          aria-label={label}
          title={label}
        >
          <Icon className="size-5" aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.53 17.52 2 12 2S2 6.53 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.62 3.5-3.62.7 0 1.79.12 2.26.23v2.49h-1.27c-1.25 0-1.64.78-1.64 1.58v1.92h2.78l-.45 2.9h-2.33V22c4.78-.81 8.44-4.95 8.44-9.94Z" />
    </svg>
  )
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5s1.98.9 1.98 2ZM1.5 8h3V22h-3V8Zm6 0h2.88v1.92h.04C11.3 8.86 12.66 8 14.61 8 18.1 8 19 10.3 19 13.66V22h-3v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.82V22h-3V8Z" />
    </svg>
  )
}
