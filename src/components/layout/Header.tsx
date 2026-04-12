import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, PRODUCT_NAV_LINKS, SITE_CONFIG } from "@/constants/config";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setProductsOpen(false);
    if (href.startsWith("#")) {
      if (!isHome) {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(160_30%_5%/0.92)] backdrop-blur-md border-b border-[hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="flex items-center gap-3 group"
        >
          <img
            src={logoImg}
            alt="Honey-B2024 Logo"
            className="size-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-['Outfit'] text-lg font-700 text-[hsl(var(--text-bright))] tracking-tight">
            {SITE_CONFIG.name.replace(" Ltd.", "")}
            <span className="text-[hsl(var(--honey))] ml-0.5">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[hsl(var(--text-default))] transition-colors duration-200 hover:text-[hsl(var(--text-bright))] hover:bg-[hsl(var(--surface-2))]"
            >
              {link.label}
            </a>
          ))}

          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-[hsl(var(--text-default))] transition-colors duration-200 hover:text-[hsl(var(--text-bright))] hover:bg-[hsl(var(--surface-2))]"
            >
              Products
              <ChevronDown className={`size-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] shadow-xl backdrop-blur-lg"
                >
                  {PRODUCT_NAV_LINKS.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      onClick={() => {
                        setProductsOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[hsl(var(--text-default))] transition-colors hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--honey))]"
                    >
                      {p.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="flex size-11 items-center justify-center rounded-lg text-[hsl(var(--text-default))] hover:bg-[hsl(var(--surface-2))] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-[hsl(var(--border))] bg-[hsl(160_30%_5%/0.97)] backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-[hsl(var(--text-default))] transition-colors hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text-bright))]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 border-t border-[hsl(var(--border))] pt-2">
                <span className="px-4 text-[10px] font-600 uppercase text-[hsl(var(--text-muted))]">
                  Products
                </span>
                {PRODUCT_NAV_LINKS.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    onClick={() => {
                      setMobileOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[hsl(var(--text-default))] transition-colors hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--honey))]"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}


