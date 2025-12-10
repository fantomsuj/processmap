"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background py-20 md:py-32">
      <div className="container relative z-10 max-w-screen-xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Turn legacy code into a living business process map
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl"
          >
            We reverse-engineer your existing codebase into an up-to-date BPMN-style model, so everyone can see how the
            business really works — and safely modernize it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Request early access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Talk to us about your legacy systems
            </Button>
          </motion.div>
        </div>

        {/* Visual representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Before: Messy Code */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 text-sm font-medium text-muted-foreground">Before</div>
              <div className="space-y-3 font-mono text-xs">
                <div className="text-muted-foreground">{"// Legacy mainframe code"}</div>
                <div className="text-foreground">{'IF CUSTOMER-STATUS = "A"'}</div>
                <div className="pl-4 text-foreground">{"  PERFORM VALIDATION-CHECK"}</div>
                <div className="pl-4 text-foreground">{'  IF ERROR-FLAG = "Y"'}</div>
                <div className="pl-8 text-foreground">{"    CALL SUB-ROUTINE-X"}</div>
                <div className="pl-4 text-foreground">{"  ELSE"}</div>
                <div className="pl-8 text-foreground">{"    MOVE DATA TO BUFFER"}</div>
                <div className="text-muted-foreground">{"// 50+ years of changes..."}</div>
                <div className="text-foreground">{"PERFORM UPDATE-LEGACY-DB"}</div>
              </div>
            </motion.div>

            {/* After: Clean Process */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 text-sm font-medium text-accent">After</div>
              <div className="space-y-4">
                {[
                  { num: 1, text: "Customer Status Check" },
                  { num: 2, text: "Validation Process" },
                  { num: 3, text: "Error Handling Route" },
                  { num: 4, text: "Database Update" },
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className={i > 0 ? "ml-4 border-l-2 border-accent/30 pl-6" : ""}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                        {step.num}
                      </div>
                      <div className="text-sm">{step.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
