import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E2DE] bg-[#F4F4F1]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold uppercase tracking-tight text-[#141414] whitespace-nowrap shrink-0"
        >
          {PROFILE.shortName}
        </a>

        {/* Zone 2: 4 Single-line Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52524E]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#141414] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#141414] after:transition-all after:duration-150 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenResume}
            className="relative py-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 hover:text-[#141414] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#141414] after:transition-all after:duration-150 hover:after:w-full"
          >
            Resume
          </button>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#141414] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4F4F1] whitespace-nowrap shrink-0 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#2A2A27]"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4D4CE] bg-white/70 text-[#141414] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E2E2DE] bg-[#F4F4F1] px-5 py-5 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center border-b border-[#E7E7E3] text-base font-medium text-[#141414]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="flex min-h-[44px] items-center border-b border-[#E7E7E3] text-left text-base font-medium text-[#141414]"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#141414] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4F4F1]"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
