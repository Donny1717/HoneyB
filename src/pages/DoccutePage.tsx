import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  FileOutput,
  PenTool,
  Layers,
  Cpu,
  Zap,
  FileSearch,
  ArrowLeft,
  ArrowRight,
  Database,
  Lock,
  Workflow,
  GitMerge,
  CheckCircle,
  Code2,
  Cloud,
  Building2,
  Scale,
  Landmark,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import doccuteImg from "@/assets/doccute-visual.jpg";

/* ── Feature data ── */
const CORE_FEATURES = [
  {
    icon: <FileOutput className="size-5" />,
    title: "High-Fidelity PDF Extraction",
    description:
      "Advanced OCR and layout-aware parsing preserves tables, headers, footnotes, and multi-column structures from even the most complex government documents with 99%+ accuracy.",
  },
  {
    icon: <Layers className="size-5" />,
    title: "Semantic Chunking for RAG",
    description:
      "Intelligent segmentation splits documents into meaning-preserving chunks optimised for Retrieval-Augmented Generation architectures, maintaining contextual coherence across boundaries.",
  },
  {
    icon: <FileText className="size-5" />,
    title: "Automated PDF Generation",
    description:
      "Programmatic Text-to-PDF pipeline with brand-compliant templates, dynamic data binding, and pixel-perfect output for automated report and document creation at enterprise scale.",
  },
  {
    icon: <PenTool className="size-5" />,
    title: "Digital Signature Integration",
    description:
      "Secure digital signature workflows supporting eIDAS and UK Electronic Communications Act compliance, with tamper-evident seals and full certificate chain validation.",
  },
  {
    icon: <Code2 className="size-5" />,
    title: "RESTful API-First Design",
    description:
      "Every capability exposed as a scalable, versioned REST API endpoint with comprehensive OpenAPI documentation, rate limiting, and webhook support for seamless integration.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Batch Processing Engine",
    description:
      "Asynchronous job queue handles thousands of documents per hour with priority scheduling, progress callbacks, and automatic retry logic for enterprise-grade throughput.",
  },
];

const ARCHITECTURE_LAYERS = [
  {
    icon: <Cloud className="size-5" />,
    label: "Ingestion Layer",
    items: ["File Upload API", "URL Fetcher", "Email Parser", "Webhook Receiver"],
    colour: "from-amber-500/20 to-amber-700/5",
  },
  {
    icon: <Cpu className="size-5" />,
    label: "Processing Layer",
    items: ["OCR Engine", "Layout Analyser", "Table Extractor", "Metadata Enrichment"],
    colour: "from-amber-600/15 to-amber-800/5",
  },
  {
    icon: <Layers className="size-5" />,
    label: "Intelligence Layer",
    items: ["Semantic Chunker", "Embedding Generator", "Entity Recognition", "Classification Model"],
    colour: "from-amber-700/12 to-amber-900/5",
  },
  {
    icon: <Database className="size-5" />,
    label: "Output Layer",
    items: ["Vector Store", "PDF Generator", "Signature Service", "Export API"],
    colour: "from-amber-800/10 to-amber-950/5",
  },
];

const USE_CASES = [
  {
    icon: <Landmark className="size-5" />,
    sector: "Legal & Compliance",
    title: "Contract Intelligence Pipeline",
    scenario:
      "A London law firm ingests thousands of legacy contracts through Doccute, extracting key clauses, renewal dates, and liability terms. Semantic chunks feed into their RAG-powered contract Q&A system, enabling associates to query the entire contract corpus in natural language.",
    metrics: ["95% clause extraction accuracy", "80% reduction in manual review", "Instant cross-contract search"],
  },
  {
    icon: <Building2 className="size-5" />,
    sector: "Government & Public Sector",
    title: "FOI & Document Redaction Workflows",
    scenario:
      "A government agency uses Doccute to process Freedom of Information requests. The pipeline automatically extracts text, identifies sensitive PII through entity recognition, and generates redacted PDF outputs with audit-compliant logging of every modification.",
    metrics: ["10× faster FOI turnaround", "100% audit trail coverage", "Automated PII detection"],
  },
  {
    icon: <Scale className="size-5" />,
    sector: "Financial Services",
    title: "Regulatory Report Processing",
    scenario:
      "An FCA-regulated firm uses Doccute to ingest quarterly regulatory filings, extract structured data from complex PDF tables, and generate standardised data feeds for their compliance monitoring dashboard — eliminating manual data entry entirely.",
    metrics: ["99.2% table extraction accuracy", "Zero manual data entry", "Real-time compliance feeds"],
  },
];

export default function DoccutePage() {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DoccuteHero />
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
function DoccuteHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={doccuteImg} alt="" className="size-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_25%_6%/0.65)] via-[hsl(222_25%_6%/0.8)] to-[hsl(222_25%_6%)]" />
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
              <FileText className="size-3.5 text-[hsl(var(--honey))]" />
              <span className="text-xs font-medium text-[hsl(var(--honey))]">
                Document Intelligence Pipeline
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-['Outfit'] text-4xl font-800 leading-[1.08] text-[hsl(var(--text-bright))] sm:text-5xl lg:text-6xl xl:text-[4.25rem] text-balance"
            >
              <span className="text-gradient-honey">DOCCUTE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 font-['Outfit'] text-xl font-500 text-[hsl(var(--text-default))] sm:text-2xl"
            >
              The Advanced Document Intelligence Pipeline.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[hsl(var(--text-muted))] text-pretty"
            >
              Doccute is the technical powerhouse driving robust data ingestion. Scalable API
              solutions for complex enterprise document workflows — from high-fidelity PDF extraction
              and semantic chunking for LLM RAG architectures, through to automated PDF generation
              and secure digital signature integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <span className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--honey)/0.3)] bg-[hsl(var(--honey)/0.06)] px-5 py-3 text-sm font-600 text-[hsl(var(--honey))]">
                Coming Soon — doccute.com
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
              { value: "API-First", label: "RESTful Architecture" },
              { value: "RAG Ready", label: "Semantic Chunking" },
              { value: "99%+", label: "Extraction Accuracy" },
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
            Core Capabilities
          </span>
          <h2 className="mt-5 font-['Outfit'] text-3xl font-700 text-[hsl(var(--text-bright))] sm:text-4xl lg:text-[2.75rem] text-balance">
            Enterprise-Grade{" "}
            <span className="text-gradient-honey">Document Intelligence</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[hsl(var(--text-muted))]">
            Six core capabilities designed for maximum throughput, accuracy, and seamless
            integration into existing enterprise infrastructure.
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
            Four-Stage <span className="text-gradient-honey">Processing</span> Pipeline
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[hsl(var(--text-muted))]">
            Documents flow through four optimised stages — from raw ingestion through intelligent
            processing to structured, queryable output ready for downstream consumption.
          </p>
        </motion.div>

        {/* Pipeline diagram */}
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
                {/* Stage label */}
                <div className="flex shrink-0 items-center gap-3 sm:w-52">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[hsl(var(--honey)/0.08)] text-[hsl(var(--honey))]">
                    {layer.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-600 uppercase text-[hsl(var(--text-muted))]">
                      Stage {i + 1}
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

              {/* Connection arrow */}
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
            Industry <span className="text-gradient-honey">Applications</span>
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
              Power Your <span className="text-gradient-honey">Document Workflows</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[hsl(var(--text-muted))]">
              Doccute is currently in development. Get in touch to discuss enterprise API access
              and shape the next generation of document intelligence infrastructure.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@honeyb2024.co.uk?subject=Doccute%20API%20Access"
                className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--honey))] px-6 py-3.5 text-sm font-600 text-[hsl(222_25%_6%)] transition-all duration-200 hover:bg-[hsl(var(--honey-glow))] hover:shadow-[0_0_32px_hsl(38_85%_45%/0.3)]"
              >
                Request API Access
                <ArrowRight className="size-4" />
              </a>
              <Link
                to="/bidsmith"
                className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] px-6 py-3.5 text-sm font-600 text-[hsl(var(--text-default))] transition-all duration-200 hover:border-[hsl(var(--honey)/0.3)] hover:text-[hsl(var(--honey))]"
              >
                Explore Bidsmith ASF
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
