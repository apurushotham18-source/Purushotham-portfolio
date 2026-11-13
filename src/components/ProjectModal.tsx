import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

function FraudInteractiveLab() {
  const [amount, setAmount] = useState(450);
  const [velocity, setVelocity] = useState(2);
  const [foreignMerchant, setForeignMerchant] = useState(false);

  const score = Math.min(
    100,
    Math.round(
      (amount / 5000) * 45 + (velocity / 10) * 35 + (foreignMerchant ? 25 : 0)
    )
  );
  const classification =
    score >= 60 ? 'Flagged for Review' : score >= 35 ? 'Elevated Check' : 'Normal Pattern';

  return (
    <div className="rounded-xl border border-[#DFDFDA] bg-[#F9F9F7] p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#141414]">
          Interactive Feature Weight Explorer
        </h4>
        <span className="text-xs text-[#62625E]">Conceptual classification behavior</span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="flex justify-between text-xs font-medium text-[#52524E]">
            <span>Transaction Amount</span>
            <span className="font-mono tabular-nums text-[#141414]">${amount}</span>
          </span>
          <input
            type="range"
            min={20}
            max={5000}
            step={20}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-2 w-full accent-[#141414]"
          />
        </label>

        <label className="block">
          <span className="flex justify-between text-xs font-medium text-[#52524E]">
            <span>Hourly Tx Velocity</span>
            <span className="font-mono tabular-nums text-[#141414]">{velocity} tx/hr</span>
          </span>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={velocity}
            onChange={(e) => setVelocity(Number(e.target.value))}
            className="mt-2 w-full accent-[#141414]"
          />
        </label>

        <div className="flex items-end">
          <button
            type="button"
            onClick={() => setForeignMerchant((v) => !v)}
            className={`min-h-[40px] w-full rounded-lg border px-3 py-2 text-xs font-medium cursor-pointer transition-colors ${
              foreignMerchant
                ? 'border-[#141414] bg-[#141414] text-[#F4F4F1]'
                : 'border-[#CFCFC8] bg-white text-[#141414]'
            }`}
          >
            {foreignMerchant ? 'Cross-Border Merchant: Yes' : 'Cross-Border Merchant: No'}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[#E2E2DE] pt-3 text-sm">
        <span className="text-[#575753]">
          Computed Risk Index:{' '}
          <strong className="font-mono tabular-nums text-[#141414]">{score} / 100</strong>
        </span>
        <span className="font-semibold text-[#141414]">{classification}</span>
      </div>
    </div>
  );
}

function SqlQueryLab() {
  const [selectedQuery, setSelectedQuery] = useState<'cohort' | 'attendance' | 'top'>('cohort');

  const queries = {
    cohort: {
      label: 'Cohort Average',
      sql: `SELECT s.cohort, ROUND(AVG(a.score), 2) AS avg_score\nFROM students s\nJOIN assessments a ON s.student_id = a.student_id\nGROUP BY s.cohort\nORDER BY avg_score DESC;`,
      note: 'Aggregates multi-subject performance grouped by academic cohort.',
    },
    attendance: {
      label: 'Attendance Impact',
      sql: `SELECT CASE WHEN s.attendance_pct >= 85 THEN '85%+'\n            ELSE 'Below 85%' END AS attendance_band,\n       ROUND(AVG(a.score), 2) AS mean_grade\nFROM students s\nJOIN assessments a ON s.student_id = a.student_id\nGROUP BY attendance_band;`,
      note: 'Compares mean assessment outcomes across attendance thresholds.',
    },
    top: {
      label: 'Subject Variance',
      sql: `SELECT subject_code,\n       MIN(score) AS min_score,\n       MAX(score) AS max_score,\n       ROUND(STDDEV(score), 2) AS spread\nFROM assessments\nGROUP BY subject_code;`,
      note: 'Identifies subjects with widest score dispersion for targeted support.',
    },
  };

  return (
    <div className="rounded-xl border border-[#DFDFDA] bg-[#F9F9F7] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#141414]">
          Relational SQL Query Explorer
        </h4>
        <div className="inline-flex gap-1 rounded-lg border border-[#DFDFDA] bg-white p-1">
          {(['cohort', 'attendance', 'top'] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedQuery(key)}
              className={`rounded px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors ${
                selectedQuery === key
                  ? 'bg-[#141414] text-[#F4F4F1]'
                  : 'text-[#575753] hover:text-[#141414]'
              }`}
            >
              {queries[key].label}
            </button>
          ))}
        </div>
      </div>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-[#141414] p-4 font-mono text-xs leading-relaxed text-[#F4F4F1]">
        {queries[selectedQuery].sql}
      </pre>
      <p className="mt-2.5 text-xs text-[#575753]">{queries[selectedQuery].note}</p>
    </div>
  );
}

function PredictionPipelineLab() {
  const [hours, setHours] = useState(6);
  const [priorScore, setPriorScore] = useState(74);

  const predicted = Math.min(100, Math.max(0, Math.round(0.45 * priorScore + 3.8 * hours + 12)));

  return (
    <div className="rounded-xl border border-[#DFDFDA] bg-[#F9F9F7] p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#141414]">
          Interactive Prediction Input Sandbox
        </h4>
        <span className="text-xs text-[#62625E]">Linear regression concept demo</span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="flex justify-between text-xs font-medium text-[#52524E]">
            <span>Weekly Study / Feature Hours</span>
            <span className="font-mono tabular-nums text-[#141414]">{hours} hrs</span>
          </span>
          <input
            type="range"
            min={1}
            max={12}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="mt-2 w-full accent-[#141414]"
          />
        </label>

        <label className="block">
          <span className="flex justify-between text-xs font-medium text-[#52524E]">
            <span>Baseline Feature Index</span>
            <span className="font-mono tabular-nums text-[#141414]">{priorScore}</span>
          </span>
          <input
            type="range"
            min={40}
            max={95}
            value={priorScore}
            onChange={(e) => setPriorScore(Number(e.target.value))}
            className="mt-2 w-full accent-[#141414]"
          />
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[#E2E2DE] pt-3 text-sm">
        <span className="text-[#575753]">Predicted Target Output</span>
        <strong className="font-mono text-base tabular-nums text-[#141414]">
          {predicted} / 100
        </strong>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#DFDFDA] bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-medium text-[#62625E]">
              {project.category} · {project.stack.join(' · ')} · {project.year}
            </div>
            <h3
              id="project-modal-title"
              className="mt-1.5 font-display text-2xl font-bold uppercase tracking-tight text-[#141414] sm:text-3xl"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DFDFDA] text-[#141414] cursor-pointer transition-colors hover:bg-[#141414] hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-[#4F4F4B]">{project.objective}</p>

        {/* Methodology Steps */}
        <div className="mt-6 border-t border-[#E7E7E3] pt-5">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#141414]">
            System Pipeline &amp; Workflow
          </h4>
          <ol className="mt-3 space-y-2.5">
            {project.methodology.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#4F4F4B]">
                <span className="font-mono text-xs font-medium text-[#73736E] tabular-nums pt-0.5">
                  0{i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tailored Interactive Sandbox */}
        <div className="mt-6">
          {project.slug === 'credit-card-fraud-detection' && <FraudInteractiveLab />}
          {project.slug === 'student-performance-analysis' && <SqlQueryLab />}
          {project.slug === 'machine-learning-prediction-system' && <PredictionPipelineLab />}
        </div>
      </div>
    </div>
  );
}
