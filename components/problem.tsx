"use client"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { problems } from "@/lib/content"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section muted>
      <div ref={ref}>
        <SectionHeading
          title="Your business runs on processes nobody can see"
          description="Right now, the code is the only truth"
        />
        <div className="mx-auto grid max-w-5xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
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
    </Section>
  )
}
