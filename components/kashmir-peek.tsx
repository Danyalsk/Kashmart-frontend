"use client"

export function KashmirPeek() {
  return (
    <div className="mx-auto max-w-md">
      <p className="text-xs text-muted-foreground mb-3 tracking-wide">A little sneak peek of Kashmir</p>
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <Picture src="/dal-lake-houseboats-at-sunset--srinagar.jpg" alt="Dal Lake houseboats at sunset, Srinagar" />
        <Picture src="/kashmiri-pashmina-shawl-pattern-closeup.jpg" alt="Kashmiri pashmina shawl pattern" />
        <Picture src="/walnut-wood-carving-from-kashmir-detail.jpg" alt="Kashmiri walnut wood carving detail" />
      </div>
    </div>
  )
}

function Picture({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
      {/* Important for CORS-safe canvas if ever needed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        crossOrigin="anonymous"
        className="block h-24 w-32 object-cover md:h-24 md:w-32"
      />
    </figure>
  )
}
