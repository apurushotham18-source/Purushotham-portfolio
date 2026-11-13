import { useState } from 'react';
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  LineChart,
  NotebookPen,
  Terminal,
  Cpu,
} from 'lucide-react';
import {
  AREAS_OF_INTEREST,
  CORE_CONCEPTS,
  PROFILE,
  TOOLKIT_GRID,
  ToolkitItem,
} from '../data/portfolioData';

type FilterCategory = 'All' | 'Languages & DB' | 'Tools & Platforms';

const ICON_MAP: Record<string, typeof Code2> = {
  python: Cpu,
  java: Braces,
  'sql-mysql': Database,
  tableau: LineChart,
  'git-github': GitBranch,
  colab: NotebookPen,
  vscode: Code2,
  linux: Terminal,
};

export default function SkillsToolkit() {
  const [filter, setFilter] = useState<FilterCategory>('All');
  const [selectedItem, setSelectedItem] = useState<ToolkitItem>(TOOLKIT_GRID[0]);

  const filteredGrid =
    filter === 'All'
      ? TOOLKIT_GRID
      : TOOLKIT_GRID.filter((item) => item.category === filter);

  return (
    <section id="toolkit" className="border-b border-[#E2E2DE] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[#141414] sm:text-4xl">
              Technical Toolkit
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[#575753]">
              Core programming languages, relational databases, and development platforms applied
              across coursework and projects.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter technical toolkit"
            className="inline-flex w-fit items-center gap-1 rounded-lg border border-[#DFDFDA] bg-[#ECECE8] p-1"
          >
            {(['All', 'Languages & DB', 'Tools & Platforms'] as FilterCategory[]).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={filter === tab}
                onClick={() => {
                  setFilter(tab);
                  const nextList =
                    tab === 'All'
                      ? TOOLKIT_GRID
                      : TOOLKIT_GRID.filter((item) => item.category === tab);
                  if (nextList.length > 0 && !nextList.some((i) => i.id === selectedItem.id)) {
                    setSelectedItem(nextList[0]);
                  }
                }}
                className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 ${
                  filter === tab
                    ? 'bg-white text-[#141414] shadow-xs'
                    : 'text-[#575753] hover:text-[#141414]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4x2 Reference-Inspired Monochrome Grid */}
        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border border-[#DFDFDA] bg-white sm:grid-cols-4">
          {filteredGrid.map((item) => {
            const Icon = ICON_MAP[item.id] ?? Code2;
            const isSelected = selectedItem.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className={`group flex min-h-[104px] flex-col items-start justify-between border-b border-r border-[#EAEAE5] p-5 text-left cursor-pointer transition-colors duration-150 ${
                  isSelected
                    ? 'bg-[#141414] text-[#F4F4F1]'
                    : 'bg-white text-[#141414] hover:bg-[#F9F9F7]'
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${
                    isSelected ? 'text-[#F4F4F1]' : 'text-[#6E6E68] group-hover:text-[#141414]'
                  }`}
                />
                <div className="mt-4">
                  <div className="text-sm font-semibold tracking-tight">{item.name}</div>
                  <div
                    className={`mt-0.5 text-xs ${
                      isSelected ? 'text-[#C8C8C2]' : 'text-[#6E6E68]'
                    }`}
                  >
                    {item.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Detail Bar */}
        <div className="mt-4 flex flex-col justify-between gap-2 border-b border-[#E2E2DE] pb-8 text-sm sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2 text-[#141414]">
            <span className="font-semibold">{selectedItem.name}</span>
            <span aria-hidden="true" className="text-[#9A9A93]">
              ·
            </span>
            <span className="text-[#575753]">{selectedItem.subtitle}</span>
          </div>
          <p className="text-[#52524E]">{selectedItem.detail}</p>
        </div>

        {/* Unboxed Typographic Metadata Rows: Core Concepts, Areas of Interest & Soft Skills */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#141414]">
              Core Concepts
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#4F4F4B]">
              {CORE_CONCEPTS.join(' · ')}
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#141414]">
              Areas of Interest
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#4F4F4B]">
              {AREAS_OF_INTEREST.join(' · ')}
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#141414]">
              Professional Strengths
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#4F4F4B]">
              {PROFILE.softSkills.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
