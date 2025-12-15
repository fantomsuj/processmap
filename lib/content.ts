import {
  AlertTriangle,
  Building2,
  Cable,
  Database,
  Eye,
  FileCode,
  GitBranch,
  Heart,
  Landmark,
  Map,
  Plane,
  RefreshCw,
  Rocket,
  Shield,
  TrendingDown,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

export const problems = [
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

export const solutionFeatures = [
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

export const howItWorksSteps = [
  {
    icon: Cable,
    title: "Connect your systems",
    description: "We securely ingest code and metadata from your existing repositories and platforms",
    hasConnector: true,
  },
  {
    icon: GitBranch,
    title: "Extract the real process",
    description: "Our engine analyzes control flow, data paths, and integrations to build an accurate BPMN-style model",
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

export const industriesServed = [
  { icon: Landmark, name: "Banking & Financial Services" },
  { icon: Heart, name: "Insurance & Healthcare" },
  { icon: Plane, name: "Aviation & Logistics" },
  { icon: Building2, name: "Public Sector" },
]

export const benefitsList = [
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
