import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  BarChart3,
  ShieldCheck,
  Brain,
  Target,
  FileSearch,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Layers,
  Database,
  Cpu,
  GitMerge,
  Workflow,
  Lock,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import bidsmithImg from "@/assets/bidsmith-visual.jpg";

/* ── Feature data ── */
const CORE_FEATURES = [
  {
    icon: <BarChart3 className="size-5" />,
    title: "Predictive Bid Scoring",
    description:
      "ML-driven win-probability engine analyses historical award data, buyer behaviour patterns, and competitive landscapes to score each opportunity before you commit resources.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "PPN 06/20 Compliance Routing",
    description:
      "Automated compliance layer maps every response against PPN 06/20 and the Social Value Model, flagging gaps and auto-generating compliant narrative sections.",
  },
  {
    icon: <Brain className="size-5" />,
    title: "Institutional Memory Engine",
    description:
      "Stores, indexes, and retrieves every past bid, winning response, and evaluator feedback to build an evolving knowledge base unique to your organisation.",
  },
  {
    icon: <Target className="size-5" />,
    title: "Opportunity Intelligence",
    description:
      "Real-time monitoring of Contracts Finder, Find a Tender, and framework pipelines with smart matching to your capability profile and win history.",
  },
  {
    icon: <FileSearch className="size-5" />,
    title: "Tender Document Analysis",
    description:
      "Automated extraction of evaluation criteria, mandatory requirements, word limits, and scoring weightings from ITTs and RFPs within seconds.",
  },
  {
    icon: <Users className="size-5" />,
    title: "Collaborative Workspaces",
    description:
      "Role-based bid rooms with real-time co-authoring, version control, section assignments, and approval workflows for distributed bid teams.",
  },
];

const ARCHITECTURE_LAYERS = [
  {
    icon: <Database className="size-5" />,
    label: "Data Layer",
    items: ["Contracts Finder API", "Find a Tender", "Historical Bid Store", "Vector Embeddings"],
    colour: "from-emerald-500/20 to-emerald-700/5",
  },
  {
    icon: <Cpu className="size-5" />,
    label: "Intelligence Layer",
    items: ["Win-Probability Model", "Compliance Engine", "NLP Extraction", "Semantic Search"],
    colour: "from-emerald-600/15 to-emerald-800/5",
  },
  {
    icon: <Workflow className="size-5" />,
    label: "Orchestration Layer",
    items: ["Pipeline Scheduler", "Approval Workflow", "Notification Engine", "Audit Trail"],
    colour: "from-emerald-700/12 to-emerald-900/5",
  },
  {
    icon: <Lock className="size-5" />,
    label: "Security Layer",
    items: ["UK Data Residency", "Role-Based Access", "Encryption at Rest", "SOC 2 Controls"],
    colour: "from-emerald-800/10 to-emerald-950/5",
  },
];

const USE_CASES = [
  {
    icon: <Building2 className="size-5" />,
    sector: "Local Government",
    title: "Council Digital Transformation Bids",
    scenario:
      "A regional IT consultancy uses Bidsmith to monitor all council-level digital transformation tenders. The compliance engine auto-generates Social Value narratives tied to local employment metrics, while predictive scoring prioritises bids with >65% win probability.",
    metrics: ["40% faster bid turnaround", "3× more bids submitted per quarter", "28% improvement in win rate"],
  },
  {
    icon: <ShieldCheck className="size-5" />,
    sector: "Healthcare / NHS",
    title: "NHS Framework Agreement Responses",
    scenario:
      "An established healthcare solutions provider leverages institutional memory to reuse clinically validated case studies across NHS framework lots. Automated compliance routing ensures every response meets CQC and NHSE requirements.",
    metrics: ["60% reduction in compliance review time", "100% PPN 06/20 adherence", "£2M+ additional contract value"],
  },
  {
    icon: <TrendingUp className="size-5" />,
    sector: "Defence & Security",
    title: "MOD Supply Chain Procurement",
    scenario:
      "A defence SME uses opportunity intelligence to track MOD and Crown Commercial Service frameworks. Bidsmith's tender analysis extracts security-clearance requirements and mandatory technical standards, pre-populating response templates.",
    metrics: ["90% extraction accuracy on ITT requirements", "50% reduction in bid preparation cost", "First-pass compliant submissions"],
  },
];

export default function BidsmithPage() {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BidsmithHero />
        <FeaturesSection />
        <ArchitectureSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}

/* ════════════════════════════════════════════════
   Hero
   ════════════════════════════════════════════════ */
function BidsmithHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={bidsmithImg} alt="" className="size-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(160_30%_5%/0.65)] via-[hsl(160_30%_5%/0.8)] to-[hsl(160_30%_5%)]" />
        <div className="absolute inset-0 hex-grid-bg opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-32 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-1)/0.6)] px-4 py-2 text-xs font-500 text-[hsl(var(--text-default))] backdrop-blur-sm transition-colors hover:border-[hsl(var(--honey)/0.3)] hover:text-[hsl(var(--honey))]"
          >
            <ArrowLeft className="size-3.5" />
            Back to Honey-B2024
          </Link>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-4 py-1.5"
            >
              <Building2 className="size-3.5 text-[hsl(var(--honey))]" />
              <span className="text-xs font-medium text-[hsl(var(--honey))]">
                Bid Intelligence OS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-['Outfit'] text-4xl font-800 leading-[1.08] text-[hsl(var(--text-bright))] sm:text-5xl lg:text-6xl xl:text-[4.25rem] text-balance"
            >
              <span className="text-gradient-honey">BIDSMITH</span> ASF
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 font-['Outfit'] text-xl font-500 text-[hsl(var(--text-default))] sm:text-2xl"
            >
              The UK Public Sector Bid Intelligence Operating System.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[hsl(var(--text-muted))] text-pretty"
            >
              Bidsmith is not a generic AI writer. It is a highly localised Bid Intelligence OS
              engineered specifically for UK public procurement — integrating predictive scoring,
              strict compliance routing (including PPN 06/20 and the Social Value Model), and
              institutional memory to transform bidding into a data-driven competitive advantage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <span className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--honey)/0.3)] bg-[hsl(var(--honey)/0.06)] px-5 py-3 text-sm font-600 text-[hsl(var(--honey))]">
                Coming Soon — bidsmith.co.uk
              </span>
            </motion.div>
          </div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden space-y-4 lg:col-span-4 lg:block"
          >
            {[
              { value: "PPN 06/20", label: "Compliance Built-In" },
              { value: "RAG + ML", label: "Predictive Scoring" },
              { value: "UK-Only", label: "Data Residency" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glow-border glow-amber-subtle rounded-xl bg-[hsl(var(--surface-1)/0.8)] px-5 py-4 backdrop-blur-sm"
              >
                <p className="font-['Outfit'] text-lg font-700 text-[hsl(var(--honey))]">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase text-[hsl(var(--text-muted))]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ════════════════════════════════════════════════
   Features Breakdown
   ════════════════════════════════════════════════ */
function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 honeycomb-pattern" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-3 py-1 text-[11px] font-600 uppercase text-[hsl(var(--honey))]">
            Feature Breakdown
          </span>
          <h2 className="mt-5 font-['Outfit'] text-3xl font-700 text-[hsl(var(--text-bright))] sm:text-4xl lg:text-[2.75rem] text-balance">
            Purpose-Built for{" "}
            <span className="text-gradient-honey">UK Public Procurement</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[hsl(var(--text-muted))]">
            Every capability is designed around the realities of bidding for UK public sector
            contracts — not retrofitted from a generic writing tool.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] p-6 transition-all duration-300 hover:border-[hsl(var(--honey)/0.25)] hover:bg-[hsl(var(--surface-2))]"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[hsl(var(--honey)/0.02)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex size-11 items-center justify-center rounded-lg bg-[hsl(var(--honey)/0.08)] text-[hsl(var(--honey))] transition-colors duration-300 group-hover:bg-[hsl(var(--honey)/0.12)]">
                  {feat.icon}
                </div>
                <h3 className="mt-4 font-['Outfit'] text-base font-600 text-[hsl(var(--text-bright))]">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--text-muted))]">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   Architecture Diagram
   ════════════════════════════════════════════════ */
function ArchitectureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-3 py-1 text-[11px] font-600 uppercase text-[hsl(var(--honey))]">
            Technical Architecture
          </span>
          <h2 className="mt-5 font-['Outfit'] text-3xl font-700 text-[hsl(var(--text-bright))] sm:text-4xl text-balance">
            Four-Layer <span className="text-gradient-honey">Intelligence</span> Stack
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[hsl(var(--text-muted))]">
            Bidsmith's architecture separates concerns into four distinct layers, each optimised for
            its specific function while maintaining secure, auditable data flow.
          </p>
        </motion.div>

        {/* Layered architecture diagram */}
        <div className="mt-16 space-y-4">
          {ARCHITECTURE_LAYERS.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group relative overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] transition-all duration-300 hover:border-[hsl(var(--honey)/0.2)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${layer.colour} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 lg:p-8">
                {/* Layer label */}
                <div className="flex shrink-0 items-center gap-3 sm:w-48">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[hsl(var(--honey)/0.08)] text-[hsl(var(--honey))]">
                    {layer.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-600 uppercase text-[hsl(var(--text-muted))]">
                      Layer {i + 1}
                    </span>
                    <h3 className="font-['Outfit'] text-sm font-600 text-[hsl(var(--text-bright))]">
                      {layer.label}
                    </h3>
                  </div>
                </div>

                {/* Connector */}
                <div className="hidden h-8 w-px bg-[hsl(var(--border))] sm:block" />

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] px-3 py-1.5 text-xs font-500 text-[hsl(var(--text-default))] transition-colors duration-200 group-hover:border-[hsl(var(--honey)/0.15)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connection arrow between layers */}
              {i < ARCHITECTURE_LAYERS.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))]">
                  <GitMerge className="size-3.5 text-[hsl(var(--honey-dim))]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   Use Cases
   ════════════════════════════════════════════════ */
function UseCasesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 honeycomb-pattern" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-3 py-1 text-[11px] font-600 uppercase text-[hsl(var(--honey))]">
            Use Cases
          </span>
          <h2 className="mt-5 font-['Outfit'] text-3xl font-700 text-[hsl(var(--text-bright))] sm:text-4xl text-balance">
            Real-World <span className="text-gradient-honey">Scenarios</span>
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-6">
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] transition-all duration-300 hover:border-[hsl(var(--honey)/0.2)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--honey)/0.2)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="grid gap-6 p-6 lg:grid-cols-12 lg:p-8">
                {/* Left: info */}
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[hsl(var(--honey)/0.08)] text-[hsl(var(--honey))]">
                      {uc.icon}
                    </div>
                    <span className="rounded-full bg-[hsl(var(--surface-2))] px-3 py-1 text-[11px] font-600 uppercase text-[hsl(var(--text-muted))]">
                      {uc.sector}
                    </span>
                  </div>
                  <h3 className="font-['Outfit'] text-lg font-600 text-[hsl(var(--text-bright))]">
                    {uc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--text-muted))] text-pretty">
                    {uc.scenario}
                  </p>
                </div>

                {/* Right: metrics */}
                <div className="flex flex-col justify-center gap-2 lg:col-span-4 lg:border-l lg:border-[hsl(var(--border))] lg:pl-6">
                  <span className="text-[10px] font-600 uppercase text-[hsl(var(--honey-dim))]">
                    Key Outcomes
                  </span>
                  {uc.metrics.map((m) => (
                    <span
                      key={m}
                      className="flex items-center gap-2 text-sm text-[hsl(var(--text-default))]"
                    >
                      <CheckCircle className="size-3.5 shrink-0 text-[hsl(var(--honey))]" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   Bottom CTA
   ════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-[hsl(var(--honey)/0.15)] bg-gradient-to-br from-[hsl(var(--surface-1))] to-[hsl(var(--surface-2))] p-8 text-center lg:p-16"
        >
          <div className="absolute inset-0 hex-grid-bg opacity-20" />
          <div className="relative">
            <h2 className="font-['Outfit'] text-2xl font-700 text-[hsl(var(--text-bright))] sm:text-3xl lg:text-4xl">
              Ready to Transform Your <span className="text-gradient-honey">Bidding Strategy</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[hsl(var(--text-muted))]">
              Bidsmith ASF is currently in development. Register your interest to get early access
              and shape the future of UK public sector bid intelligence.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@honeyb2024.co.uk?subject=Bidsmith%20Early%20Access"
                className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--honey))] px-6 py-3.5 text-sm font-600 text-[hsl(160_30%_5%)] transition-all duration-200 hover:bg-[hsl(var(--honey-glow))] hover:shadow-[0_0_32px_hsl(152_65%_42%/0.3)]"
              >
                Register Early Interest
                <ArrowRight className="size-4" />
              </a>
              <Link
                to="/doccute"
                className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] px-6 py-3.5 text-sm font-600 text-[hsl(var(--text-default))] transition-all duration-200 hover:border-[hsl(var(--honey)/0.3)] hover:text-[hsl(var(--honey))]"
              >
                Explore Doccute
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
