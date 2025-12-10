import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { HowItWorks } from "@/components/how-it-works"
import { Industries } from "@/components/industries"
import { Benefits } from "@/components/benefits"
import { Vision } from "@/components/vision"
import { FinalCTA } from "@/components/final-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Industries />
        <Benefits />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
