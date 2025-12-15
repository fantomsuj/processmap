"use client"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { industriesServed } from "@/lib/content"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section id="industries">
      <div ref={ref}>
        <SectionHeading
          title="Built for enterprises with deep systems"
          description="Especially valuable where core systems are 20–50 years old and too risky to touch"
        />

        <div className="mx-auto grid max-w-4xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {industriesServed.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center"
            >
              <industry.icon className="mb-3 h-10 w-10 text-accent" />
              <h3 className="text-sm font-medium text-card-foreground">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
