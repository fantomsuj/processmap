"use client"

import clsx from "clsx"
import type { ReactNode } from "react"

type SectionHeadingProps = {
  title: string
  description?: ReactNode
  align?: "center" | "left"
  kicker?: string
  className?: string
}

export function SectionHeading({
  title,
  description,
  align = "center",
  kicker,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">{kicker}</p>
      ) : null}
      <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {description ? (
        <p className="text-pretty text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
