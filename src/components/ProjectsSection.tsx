import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type ProjectFilter = 'All' | 'Machine Learning' | 'Data & SQL';

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === 'credit-card-fraud-detection') {
    return (
      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-xl bg-[#181816] p-6 sm:h-80 sm:p-10">
        {/* Subtle technical grid */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 300"
          className="h-full w-full max-w-[760px]"
          fill="none"
        >
          <defs>
            <pattern id="fraud-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" stroke="#2B2B28" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="800" height="300" fill="url(#fraud-grid)" />

          {/* Decision Boundary Curve */}
          <path
            d="M 40 245 C 190 235, 290 175, 420 145 C 550 115, 650 85, 760 45"
            stroke="#F4F4F1"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* Legitimate Transaction Cluster */}
          {[
            [110, 215],
            [155, 232],
            [195, 200],
            [240, 224],
            [275, 195],
            [325, 210],
            [365, 188],
            [410, 205],
            [460, 178],
            [510, 190],
          ].map(([cx, cy], idx) => (
            <circle
              key={idx}
              cx={cx}
              cy={cy}
              r="5"
              fill="#7A7A73"
              stroke="#181816"
              strokeWidth="1.5"
            />
          ))}

          {/* Flagged Anomaly Nodes */}
          {[
            [310, 88],
            [445, 72],
            [595, 58],
            [670, 36],
          ].map(([cx, cy], idx) => (
            <g key={idx}>
              <circle cx={cx} cy={cy} r="14" stroke="#E5A93B" strokeOpacity="0.45" strokeWidth="1.5" />
              <circle cx={cx} cy={cy} r="6" fill="#E5A93B" />
            </g>
          ))}

          {/* Pipeline Labels inside Diagram */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#A8A8A0">
            <text x="48" y="34">
              FEATURE VECTOR · AMOUNT / VELOCITY / MERCHANT ENTROPY
            </text>
            <text x="48" y="278">
              CLASSIFICATION BOUNDARY · PYTHON SUPERVISED PIPELINE
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (slug === 'student-performance-analysis') {
    return (
      <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl bg-[#EAEAE5] p-6">
        <svg
          aria-hidden="true"
          viewBox="0 0 460 210"
          className="h-full w-full max-w-[420px]"
          fill="none"
        >
          {/* Relational Table Blocks */}
          <rect x="20" y="24" width="160" height="72" rx="8" fill="#FFFFFF" stroke="#CFCFC8" />
          <text x="34" y="48" fontFamily="Oswald, sans-serif" fontSize="13" fill="#141414">
            STUDENTS_TBL
          </text>
          <text x="34" y="68" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#62625E">
            student_id · cohort
          </text>
          <text x="34" y="83" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#62625E">
            attendance_pct
          </text>

          <rect x="20" y="118" width="160" height="72" rx="8" fill="#FFFFFF" stroke="#CFCFC8" />
          <text x="34" y="142" fontFamily="Oswald, sans-serif" fontSize="13" fill="#141414">
            ASSESSMENTS_TBL
          </text>
          <text x="34" y="162" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#62625E">
            subject_code · score
          </text>
          <text x="34" y="177" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#62625E">
            semester_term
          </text>

          {/* Join Connectors */}
          <path d="M 180 60 L 235 60 L 235 105 L 265 105" stroke="#141414" strokeWidth="1.5" />
          <path d="M 180 154 L 235 154 L 235 105" stroke="#141414" strokeWidth="1.5" />

          {/* Analytical Bar Output */}
          <rect x="265" y="34" width="175" height="146" rx="8" fill="#141414" />
          <text x="282" y="58" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#A8A8A0">
            SQL COHORT OUTPUT
          </text>
          {[
            { y: 78, w: 120 },
            { y: 102, w: 96 },
            { y: 126, w: 136 },
            { y: 150, w: 82 },
          ].map((bar, i) => (
            <rect key={i} x="282" y={bar.y} width={bar.w} height="12" rx="3" fill="#F4F4F1" />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl bg-[#EAEAE5] p-6">
      <svg
        aria-hidden="true"
        viewBox="0 0 460 210"
        className="h-full w-full max-w-[420px]"
        fill="none"
      >
        {/* 4 Pipeline Nodes */}
        {[
          { x: 24, label: '01 INGEST', sub: 'Raw CSV' },
          { x: 132, label: '02 CLEAN', sub: 'Impute / Scale' },
          { x: 240, label: '03 TRAIN', sub: 'Google Colab' },
          { x: 348, label: '04 PREDICT', sub: 'Inference' },
        ].map((node, idx) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y="62"
              width="88"
              height="84"
              rx="8"
              fill={idx === 3 ? '#141414' : '#FFFFFF'}
              stroke={idx === 3 ? '#141414' : '#CFCFC8'}
            />
            <text
              x={node.x + 12}
              y="95"
              fontFamily="Oswald, sans-serif"
              fontSize="12"
              fill={idx === 3 ? '#F4F4F1' : '#141414'}
            >
              {node.label}
            </text>
            <text
              x={node.x + 12}
              y="118"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fill={idx === 3 ? '#B8B8B0' : '#62625E'}
            >
              {node.sub}
            </text>
            {idx < 3 && (
              <path
                d={`M ${node.x + 88} 104 L ${node.x + 108} 104`}
                stroke="#141414"
                strokeWidth="1.5"
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('All');

  const visibleProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const featuredProject = visibleProjects[0];
  const secondaryProjects = visibleProjects.slice(1);

  return (
    <section id="projects" className="border-b border-[#E2E2DE] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Header Row matching reference PORTFOLIO section */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[#141414] sm:text-5xl">
              Portfolio
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#575753]">
              Academic and applied engineering projects spanning fraud classification, relational
              SQL analytics, and machine learning prediction pipelines.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="inline-flex w-fit items-center gap-1 rounded-lg border border-[#DFDFDA] bg-[#ECECE8] p-1"
          >
            {(['All', 'Machine Learning', 'Data & SQL'] as ProjectFilter[]).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={filter === tab}
                onClick={() => setFilter(tab)}
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

        {/* Featured Lead Card */}
        {featuredProject && (
          <article className="mt-10">
            <button
              type="button"
              onClick={() => onSelectProject(featuredProject)}
              className="group block w-full rounded-2xl border border-[#DFDFDA] bg-white p-4 text-left cursor-pointer transition-colors duration-150 hover:border-[#141414] sm:p-5"
            >
              <ProjectVisual slug={featuredProject.slug} />

              <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#141414] sm:text-2xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#575753]">{featuredProject.summary}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <span className="text-xs font-medium text-[#62625E]">
                    {featuredProject.stack.join(' · ')} · {featuredProject.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#141414] px-4 py-2 text-xs font-semibold text-[#F4F4F1] whitespace-nowrap transition-transform duration-150 group-hover:translate-x-0.5">
                    <span>Explore</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </button>
          </article>
        )}

        {/* Secondary 2-Column Project Cards */}
        {secondaryProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {secondaryProjects.map((project) => (
              <article key={project.id}>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="group flex h-full w-full flex-col justify-between rounded-2xl border border-[#DFDFDA] bg-white p-4 text-left cursor-pointer transition-colors duration-150 hover:border-[#141414] sm:p-5"
                >
                  <div>
                    <ProjectVisual slug={project.slug} />
                    <div className="mt-5">
                      <div className="text-xs font-medium text-[#62625E]">
                        {project.stack.join(' · ')} · {project.year}
                      </div>
                      <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-tight text-[#141414]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#575753]">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#ECECE8] pt-4 text-xs font-semibold uppercase tracking-wider text-[#141414]">
                    <span>Inspect Architecture &amp; Interactive Lab</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
