import { useState } from 'react';
import { ArrowRight, FileText, User } from 'lucide-react';
import { CORE_PILLARS, HERO_HIGHLIGHTS, PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="border-b border-[#E2E2DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* 3-Column Editorial Hero Split inspired by reference */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Intro & Headline */}
          <div className="flex flex-col justify-between lg:col-span-4 lg:py-4">
            <div>
              <p className="font-serif text-xl italic text-[#3F3F3C] sm:text-2xl">
                {PROFILE.greeting}
              </p>

              <h1 className="mt-3 font-display text-[clamp(2.65rem,4.4vw,4rem)] font-bold uppercase leading-[0.94] tracking-tight text-[#141414] [text-wrap:balance]">
                AI &amp; ML{' '}
                <span className="block font-serif text-[0.82em] font-normal italic normal-case tracking-normal text-[#262624]">
                  &amp; Software
                </span>
                ENGINEER
              </h1>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#4F4F4B]">
                Computer Science &amp; Engineering student at JAIN University, Bengaluru—building
                machine learning models, fraud detection pipelines, and SQL-driven data systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex min-h-[46px] items-center gap-3 rounded-full bg-[#141414] py-2 pl-6 pr-2 text-xs font-semibold uppercase tracking-wider text-[#F4F4F1] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#2A2A27]"
              >
                <span>Contact Me</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F4F1] text-[#141414] transition-transform duration-150 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#141414] underline decoration-[#B8B8B0] underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:decoration-[#141414]"
              >
                <FileText className="h-4 w-4 text-[#52524E]" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Center Column: Arch Studio Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto h-[420px] w-full max-w-[440px] overflow-hidden rounded-b-[220px] rounded-t-2xl border border-[#DFDFDA] bg-white shadow-sm sm:h-[480px] lg:h-full lg:min-h-[480px]">
              {!imgError ? (
                <img
                  src={PROFILE.portraitPath}
                  alt="Portrait of A. Purushotham Naidu in formal suit"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[#EAEAE5] px-6 text-center text-[#52524E]">
                  <User className="h-12 w-12 text-[#85857E]" />
                  <p className="mt-3 font-display text-lg uppercase tracking-wide text-[#141414]">
                    {PROFILE.fullName}
                  </p>
                  <p className="mt-1 text-xs">{PROFILE.university}</p>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-b-[220px] rounded-t-2xl ring-1 ring-inset ring-black/5"
              />
            </div>
          </div>

          {/* Right Column: Vertical Facts Rail */}
          <div className="grid grid-cols-2 gap-6 border-t border-[#E2E2DE] pt-6 sm:grid-cols-4 lg:col-span-3 lg:flex lg:flex-col lg:justify-center lg:gap-7 lg:border-t-0 lg:pt-0 lg:text-right">
            {HERO_HIGHLIGHTS.map((item) => (
              <div key={item.label} className="lg:border-b lg:border-[#E7E7E3] lg:pb-5 lg:last:border-b-0 lg:last:pb-0">
                <div className="font-display text-2xl font-bold tracking-tight text-[#141414] tabular-nums sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-medium text-[#62625E]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Width 4-Column Core Pillars Strip */}
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#E2E2DE] pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.index}
              className={`flex flex-col justify-between ${
                idx !== 0 ? 'lg:border-l lg:border-[#E2E2DE] lg:pl-7' : ''
              } ${idx !== CORE_PILLARS.length - 1 ? 'lg:pr-7' : ''}`}
            >
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs text-[#73736E] tabular-nums">
                    {pillar.index}.
                  </span>
                  <h2 className="font-display text-base font-semibold uppercase tracking-wide text-[#141414]">
                    {pillar.title}
                  </h2>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#575753]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
