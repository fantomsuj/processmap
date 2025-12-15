"use client"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { solutionFeatures } from "@/lib/content"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section id="solution">
      <div ref={ref}>
        <SectionHeading
          title="Code-to-Process Engine"
          description="Automatically reconstruct BPMN-style workflows from your existing codebase"
        />
        <div className="mx-auto max-w-4xl space-y-6 pt-12">
          {solutionFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground"
              >
                <feature.icon className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
