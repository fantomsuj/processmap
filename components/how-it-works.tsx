"use client"

import { Cable, GitBranch, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Cable,
      title: "Connect your systems",
      description: "We securely ingest code and metadata from your existing repositories and platforms",
      hasConnector: true,
    },
    {
      icon: GitBranch,
      title: "Extract the real process",
      description:
        "Our engine analyzes control flow, data paths, and integrations to build an accurate BPMN-style model",
      hasConnector: true,
    },
    {
      icon: Rocket,
      title: "Optimize & modernize",
      description:
        "Teams use the live model to remove unnecessary steps, plan modernization, and design new systems with confidence",
      hasConnector: false,
    },
  ]

  return (
    <section ref={ref} id="how-it-works" className="border-b border-border/40 bg-muted/30 py-20 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">Three steps to clarity</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
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
    </section>
  )
}
