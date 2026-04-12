import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FileCheck, Clock, Server, Leaf } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const STATS: Stat[] = [
  {
    icon: <FileCheck className="size-5" />,
    value: 100,
    suffix: "+",
    label: "Bids Processed",
  },
  {
    icon: <Clock className="size-5" />,
    value: 99.9,
    suffix: "%",
    label: "Platform Uptime",
    decimals: 1,
  },
  {
    icon: <Server className="size-5" />,
    value: 100,
    suffix: "%",
    label: "UK-Based Infrastructure",
  },
  {
    icon: <Leaf className="size-5" />,
    value: 0,
    suffix: "",
    prefix: "Net ",
    label: "Carbon Commitment",
  },
];

function useCountUp(
  target: number,
  inView: boolean,
  duration = 2000,
  decimals = 0
) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * target;
      setCount(parseFloat(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, decimals]);

  return count;
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: Stat;
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(stat.value, inView, 2200, stat.decimals ?? 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.12 * index }}
      className="group relative flex flex-col items-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1)/0.7)] px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[hsl(var(--honey)/0.25)] hover:bg-[hsl(var(--surface-1))]"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[hsl(var(--honey)/0.03)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-[hsl(var(--honey)/0.08)] text-[hsl(var(--honey))] transition-colors duration-300 group-hover:bg-[hsl(var(--honey)/0.14)]">
          {stat.icon}
        </div>
        <p className="font-['Outfit'] text-3xl font-800 text-[hsl(var(--text-bright))] sm:text-4xl">
          <span className="text-gradient-honey">
            {stat.prefix ?? ""}
            {stat.decimals ? count.toFixed(stat.decimals) : Math.round(count)}
            {stat.suffix}
          </span>
        </p>
        <p className="mt-2 text-sm font-500 text-[hsl(var(--text-muted))]">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28">
      <div className="absolute inset-0 honeycomb-pattern" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
