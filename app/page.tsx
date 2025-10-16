"use client";

import { BrandLogo } from "@/components/brand-logo";
import { NotifyMe } from "@/components/notify-me";
import { SocialIcons } from "@/components/social-icons";
import { KashmirPeek } from "@/components/kashmir-peek";

export default function Page() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklch, var(--color-primary) 6%, transparent), transparent 40%), radial-gradient(48rem 48rem at 50% -10%, color-mix(in oklch, var(--color-primary) 7%, transparent), transparent), radial-gradient(28rem 28rem at 110% 110%, color-mix(in oklch, var(--color-accent) 6%, transparent), transparent), radial-gradient(24rem 24rem at -10% 120%, color-mix(in oklch, var(--color-primary) 5%, transparent), transparent)",
        }}
      />

      {/* Subtle dots pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklch, var(--color-muted-foreground) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto flex min-h-dvh max-w-2xl flex-col items-center px-6 py-8 md:py-12">
        <header className="flex w-full items-center justify-center">
          <BrandLogo />
        </header>

        <section className="flex flex-1 w-full items-center">
          <div className="w-full text-center space-y-5 md:space-y-6">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              We&apos;re still
            </p>
            <h1 className="text-pretty font-semibold leading-tight">
              {/* Emphasize blue headline, keep minimal subline */}
              <span className="block text-balance text-3xl md:text-5xl text-primary font-extrabold">
                Cooking Our Website.
              </span>
            </h1>
            <p className="text-pretty text-sm md:text-base text-muted-foreground">
              We are going to launch our website Very Soon. Stay Tune.
            </p>
            <div className="pt-2">
              <NotifyMe />
            </div>
            {/* Keep the inviting Kashmir teaser */}
            <div className="pt-6">
              <KashmirPeek />
            </div>
          </div>
        </section>

        <footer className="w-full pb-4 md:pb-6">
          <div className="flex items-center justify-center">
            <SocialIcons />
          </div>
        </footer>
      </div>
    </main>
  );
}
