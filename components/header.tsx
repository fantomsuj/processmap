"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 max-w-screen-xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary"
          >
            <span className="font-mono text-sm font-bold text-primary-foreground">PM</span>
          </motion.div>
          <span className="text-lg font-semibold">ProcessMap</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#solution"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Solution
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="#industries"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Industries
          </Link>
        </nav>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="text-sm">Request early access</Button>
        </motion.div>
      </div>
    </motion.header>
  )
}
