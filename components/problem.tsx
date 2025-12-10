"use client"

import { AlertTriangle, FileCode, Users, Zap } from 'lucide-react'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: FileCode,
      title: "Abandoned diagrams",
      description: "BPMN diagrams are created once, then abandoned after launch",
    },
    {
      icon: Users,
      title: "Tribal knowledge",
      description: "Years of enhancements and fixes live only in code and tribal knowledge",
    },
    {
      icon: AlertTriangle,
      title: "No visibility",
      description: "No one has an accurate, end-to-end view of cross-team processes",
    },
    {
      icon: Zap,
      title: "Flying blind",
      description: "Modernization, AI, and automation projects are flying blind",
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
            Your business runs on processes nobody can see
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">Right now, the code is the only truth</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <problem.icon className="mb-4 h-8 w-8 text-muted-foreground" />
              <h3 className="mb-2 text-base font-semibold text-card-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
