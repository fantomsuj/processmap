"use client"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { howItWorksSteps } from "@/lib/content"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section id="how-it-works" muted>
      <div ref={ref}>
        <SectionHeading title="How it works" description="Three steps to clarity" />

        <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-3">
          {howItWorksSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground"
              >
                <step.icon className="h-7 w-7" />
              </motion.div>
              {step.hasConnector && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="absolute left-14 top-7 hidden h-0.5 w-[calc(100%-3.5rem)] origin-left bg-border md:block"
                />
              )}
              <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
