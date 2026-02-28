import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";
import logoImg from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-[hsl(var(--border))]">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--honey)/0.3)] to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Honey-B2024 Logo"
                className="size-12 rounded-full object-cover"
              />
              <h3 className="font-['Outfit'] text-xl font-700 text-[hsl(var(--text-bright))]">
                {SITE_CONFIG.name.replace(" Ltd.", "")}
                <span className="text-[hsl(var(--honey))]">.</span>
              </h3>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[hsl(var(--text-muted))]">
              Engineering interconnected AI ecosystems and advanced document
              intelligence pipelines for the complex demands of UK public sector
              and B2B enterprises.
            </p>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-['Outfit'] text-sm font-600 uppercase tracking-wide text-[hsl(var(--honey))]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-[hsl(var(--text-default))] transition-colors hover:text-[hsl(var(--honey))]"
                >
                  <Mail className="size-4 shrink-0 text-[hsl(var(--honey-dim))]" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[hsl(var(--text-default))] transition-colors hover:text-[hsl(var(--honey))]"
                >
                  <Linkedin className="size-4 shrink-0 text-[hsl(var(--honey-dim))]" />
                  LinkedIn
                  <ExternalLink className="size-3 opacity-40" />
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[hsl(var(--text-muted))]">
                <MapPin className="size-4 shrink-0 text-[hsl(var(--honey-dim))]" />
                {SITE_CONFIG.location}
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-['Outfit'] text-sm font-600 uppercase tracking-wide text-[hsl(var(--honey))]">
              Products
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/bidsmith" className="text-sm text-[hsl(var(--text-default))] transition-colors hover:text-[hsl(var(--honey))]">
                  Bidsmith ASF
                </a>
              </li>
              <li>
                <a href="/doccute" className="text-sm text-[hsl(var(--text-default))] transition-colors hover:text-[hsl(var(--honey))]">
                  Doccute
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--border))] pt-8 sm:flex-row">
          <p className="text-xs text-[hsl(var(--text-muted))]">
            {SITE_CONFIG.copyright}
          </p>
          <p className="text-xs text-[hsl(var(--text-muted))]">
            {SITE_CONFIG.registration}
          </p>
        </div>
      </div>
    </footer>
  );
}
