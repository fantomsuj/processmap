"use client"

import type { ReactNode } from "react"
import clsx from "clsx"

type SectionProps = {
  id?: string
  muted?: boolean
  bordered?: boolean
  children: ReactNode
  className?: string
}

export function Section({ id, muted = false, bordered = true, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-20 md:py-24",
        muted ? "bg-muted/30" : "bg-background",
        bordered && "border-b border-border/40",
        className,
      )}
    >
      <div className="container max-w-screen-xl px-4 md:px-6">{children}</div>
    </section>
  )
}
