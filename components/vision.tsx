"use client"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionHeading
            title="The operational digital twin of your business"
            description="We're building the operational \"digital twin\" of your business — always up-to-date, derived from the code that actually runs it."
          />
        </motion.div>
      </div>
    </Section>
  )
}
