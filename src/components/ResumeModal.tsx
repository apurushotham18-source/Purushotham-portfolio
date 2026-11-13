import { useEffect } from 'react';
import { Download, X } from 'lucide-react';
import {
  AREAS_OF_INTEREST,
  CORE_CONCEPTS,
  PROFILE,
  PROJECTS,
} from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#DFDFDA] bg-white p-6 shadow-xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E7E7E3] pb-6">
          <div>
            <h3
              id="resume-modal-title"
              className="font-display text-2xl font-bold uppercase tracking-tight text-[#141414] sm:text-3xl"
            >
              {PROFILE.fullName}
            </h3>
            <p className="mt-1 text-xs font-medium text-[#575753]">
              {PROFILE.location} · {PROFILE.phone} · {PROFILE.email}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumePdfPath}
              download="A_Purushotham_Naidu_Resume.pdf"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#141414] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F4F4F1] whitespace-nowrap transition-colors hover:bg-[#2A2A27]"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DFDFDA] text-[#141414] cursor-pointer transition-colors hover:bg-[#141414] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-6 text-sm text-[#3F3F3C]">
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#141414]">
              Career Objective
            </h4>
            <p className="mt-1.5 leading-relaxed">{PROFILE.careerObjective}</p>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#141414]">
              Education
            </h4>
            <p className="mt-1.5 font-semibold text-[#141414]">{PROFILE.university}</p>
            <p className="text-[#575753]">
              {PROFILE.degree} ({PROFILE.specialization})
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#141414]">
              Technical Skills
            </h4>
            <ul className="mt-2 space-y-1.5">
              <li>
                <strong className="text-[#141414]">Programming Languages:</strong> Java, Python, SQL
              </li>
              <li>
                <strong className="text-[#141414]">Core Concepts:</strong>{' '}
                {CORE_CONCEPTS.join(', ')}
              </li>
              <li>
                <strong className="text-[#141414]">Databases:</strong> MySQL
              </li>
              <li>
                <strong className="text-[#141414]">Tools &amp; Platforms:</strong> Git, GitHub,
                Google Colab, VS Code, Linux, Tableau
              </li>
              <li>
                <strong className="text-[#141414]">Areas of Interest:</strong>{' '}
                {AREAS_OF_INTEREST.join(', ')}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#141414]">
              Projects
            </h4>
            <div className="mt-2 space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <p className="font-semibold text-[#141414]">{proj.title}</p>
                  <p className="text-[#575753]">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-[#E7E7E3] pt-4 sm:grid-cols-2">
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#141414]">
                Soft Skills
              </h4>
              <p className="mt-1 text-[#575753]">{PROFILE.softSkills.join(' · ')}</p>
            </div>
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#141414]">
                Languages
              </h4>
              <p className="mt-1 text-[#575753]">{PROFILE.languages.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
