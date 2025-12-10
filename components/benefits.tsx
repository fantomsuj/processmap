"use client"

import { Map, Shield, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Map,
      title: "Operational truth",
      description: "One shared map of how work actually flows across teams and systems",
    },
    {
      icon: Shield,
      title: "De-risk modernization",
      description: "Plan migrations, refactors, and replacements with a clear picture of dependencies",
    },
    {
      icon: TrendingDown,
      title: "Find hidden waste",
      description: "Spot redundant processes, dead-end flows, and outdated steps costing time and money",
    },
  ]

  return (
    <section ref={ref} className="border-b border-border/40 bg-muted/30 py-20 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Key benefits
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">See what's really happening in your systems</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {benefits.map((benefit, i) => (
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
    </section>
  )
}
