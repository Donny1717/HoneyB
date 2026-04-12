import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import PhilosophySection from "@/components/features/PhilosophySection";
import ProductsSection from "@/components/features/ProductsSection";
import SecuritySection from "@/components/features/SecuritySection";
import StatsSection from "@/components/features/StatsSection";
import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <PhilosophySection />
        <StatsSection />
        <SectionDivider />
        <ProductsSection />
        <SectionDivider />
        <SecuritySection />
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />
    </div>
  );
}
