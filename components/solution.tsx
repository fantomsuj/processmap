"use client"

import { Database, RefreshCw, Workflow, Eye } from 'lucide-react'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Database,
      title: "Ingests your existing codebase",
      description: "Including legacy and mainframe systems — we work with what you have today",
    },
    {
      icon: Workflow,
      title: "Automatically reconstructs BPMN-style workflows",
      description: "With actors, activities, and systems mapped to how your business actually runs",
    },
    {
      icon: RefreshCw,
      title: "Keeps models and code continuously in sync",
      description: "As releases ship, your process model stays current with reality",
    },
    {
      icon: Eye,
      title: "Exposes a visual, shareable map",
      description: "For engineering, operations, and leadership to understand and improve together",
    },
  ]

  return (
    <section ref={ref} id="solution" className="border-b border-border/40 bg-background py-20 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Code-to-Process Engine
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">
            Automatically reconstruct BPMN-style workflows from your existing codebase
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-6">
          {features.map((feature, i) => (
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
    </section>
  )
}
