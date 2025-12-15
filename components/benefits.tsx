"use client"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { benefitsList } from "@/lib/content"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section muted>
      <div ref={ref}>
        <SectionHeading
          title="Key benefits"
          description="See what's really happening in your systems"
        />

        <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-3">
          {benefitsList.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)" }}
              className="rounded-lg border border-border bg-card p-8 transition-shadow"
            >
              <benefit.icon className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
