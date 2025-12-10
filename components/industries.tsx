"use client"

import { Building2, Heart, Plane, Landmark } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const industries = [
    { icon: Landmark, name: "Banking & Financial Services" },
    { icon: Heart, name: "Insurance & Healthcare" },
    { icon: Plane, name: "Aviation & Logistics" },
    { icon: Building2, name: "Public Sector" },
  ]

  return (
    <section ref={ref} id="industries" className="border-b border-border/40 bg-background py-20 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for enterprises with deep systems
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">
            Especially valuable where core systems are 20–50 years old and too risky to touch
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
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
    </section>
  )
}
