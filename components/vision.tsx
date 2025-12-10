"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="border-b border-border/40 bg-background py-20 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The operational digital twin of your business
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            We're building the operational "digital twin" of your business — always up-to-date, derived from the code
            that actually runs it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
