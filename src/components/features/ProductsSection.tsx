import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, FileText, BarChart3, ShieldCheck, FileOutput, PenTool } from "lucide-react";
import bidsmithImg from "@/assets/bidsmith-visual.jpg";
import doccuteImg from "@/assets/doccute-visual.jpg";

const PRODUCTS = [
  {
    id: "bidsmith",
    icon: <Building2 className="size-5" />,
    badge: "Bid Intelligence OS",
    name: "BIDSMITH ASF",
    tagline: "The UK Public Sector Bid Intelligence Operating System.",
    description:
      "Bidsmith is not a generic AI writer. It is a highly localised Bid Intelligence OS engineered specifically for UK public procurement. Integrating predictive scoring, strict compliance routing (including PPN 06/20 and the Social Value Model), and institutional memory, Bidsmith transforms bidding from a resource-intensive administrative task into a data-driven competitive advantage.",
    image: bidsmithImg,
    cta: "Explore Bidsmith ASF",
    ctaLink: "/bidsmith",
    features: [
      { icon: <BarChart3 className="size-4" />, label: "Predictive Scoring" },
      { icon: <ShieldCheck className="size-4" />, label: "PPN 06/20 Compliance" },
      { icon: <Building2 className="size-4" />, label: "Social Value Model" },
    ],
  },
  {
    id: "doccute",
    icon: <FileText className="size-5" />,
    badge: "Document Intelligence",
    name: "DOCCUTE",
    tagline: "The Advanced Document Intelligence Pipeline.",
    description:
      "Doccute is the technical powerhouse driving our robust data ingestion. It provides scalable API solutions for complex enterprise document workflows. Core capabilities include high-fidelity PDF-to-Text extraction, intelligent semantic chunking optimised for LLM RAG (Retrieval-Augmented Generation) architectures, automated Text-to-PDF generation, and secure digital signature integrations.",
    image: doccuteImg,
    cta: "Explore Doccute",
    ctaLink: "/doccute",
    features: [
      { icon: <FileOutput className="size-4" />, label: "PDF-to-Text Extraction" },
      { icon: <FileText className="size-4" />, label: "Semantic Chunking for RAG" },
      { icon: <PenTool className="size-4" />, label: "Digital Signatures" },
    ],
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="technologies"
      ref={ref}
      className="relative py-24 lg:py-32"
    >
      {/* Section header */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-3 py-1 text-[11px] font-600 uppercase text-[hsl(var(--honey))]">
            Core Technologies
          </span>
          <h2 className="mt-5 font-['Outfit'] text-3xl font-700 text-[hsl(var(--text-bright))] sm:text-4xl lg:text-[2.75rem] text-balance">
            Proprietary{" "}
            <span className="text-gradient-honey">DeepTech</span> Solutions
          </h2>
        </motion.div>

        {/* Products */}
        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  inView,
}: {
  product: (typeof PRODUCTS)[number];
  index: number;
  inView: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))]"
    >
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--honey)/0.3)] to-transparent" />

      <div
        className={`grid lg:grid-cols-12 ${
          isEven ? "" : "direction-rtl"
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden lg:col-span-5 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="size-full min-h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-${
              isEven ? "r" : "l"
            } from-transparent to-[hsl(var(--surface-1))] opacity-60`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface-1))] via-transparent to-transparent opacity-40 lg:hidden" />
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center p-8 lg:col-span-7 lg:p-12 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-md bg-[hsl(var(--honey)/0.1)] text-[hsl(var(--honey))]">
              {product.icon}
            </div>
            <span className="text-xs font-600 uppercase text-[hsl(var(--text-muted))]">
              {product.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-4 font-['Outfit'] text-2xl font-700 text-[hsl(var(--text-bright))] sm:text-3xl">
            {product.name}
          </h3>
          <p className="mt-1 font-['Outfit'] text-base font-500 text-[hsl(var(--honey))]">
            {product.tagline}
          </p>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--text-muted))] text-pretty">
            {product.description}
          </p>

          {/* Feature pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {product.features.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] px-3 py-1.5 text-xs font-500 text-[hsl(var(--text-default))]"
              >
                <span className="text-[hsl(var(--honey-dim))]">{f.icon}</span>
                {f.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              to={product.ctaLink}
              className="group/btn inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--honey))] px-5 py-2.5 text-sm font-600 text-[hsl(160_30%_5%)] transition-all duration-200 hover:bg-[hsl(var(--honey-glow))] hover:shadow-[0_0_24px_hsl(152_65%_42%/0.25)]"
            >
              {product.cta}
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
