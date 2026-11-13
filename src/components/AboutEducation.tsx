import { GraduationCap, Languages, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function AboutEducation() {
  return (
    <section id="about" className="border-b border-[#E2E2DE] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Bold Condensed Display Title */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-[#141414] [text-wrap:balance] sm:text-4xl">
              Applying Analytical Thinking to Practical Challenges
            </h2>
          </div>

          {/* Right Column: Editorial Prose & Academic Credentials */}
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-snug text-[#141414] sm:text-2xl">
              {PROFILE.careerObjective}
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-[#52524E]">
              Currently pursuing a Bachelor of Technology in Computer Science and Engineering with
              a specialization in Artificial Intelligence and Machine Learning at JAIN University,
              Bengaluru. My focus bridges solid software engineering principles—Data Structures,
              Algorithms, Object-Oriented Programming, and DBMS—with practical Python and SQL
              workflows for pattern recognition, anomaly detection, and predictive modeling.
            </p>

            {/* Education & Background Strip */}
            <div
              id="education"
              className="mt-10 grid grid-cols-1 gap-6 border-t border-[#E2E2DE] pt-8 sm:grid-cols-3"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#62625E]">
                  <GraduationCap className="h-4 w-4 text-[#141414]" />
                  <span>Education</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#141414]">{PROFILE.university}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#575753]">
                  {PROFILE.degree} ({PROFILE.specialization})
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#62625E]">
                  <MapPin className="h-4 w-4 text-[#141414]" />
                  <span>Location</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#141414]">{PROFILE.location}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#575753]">
                  Open to internships, academic collaborations &amp; AI/ML projects
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#62625E]">
                  <Languages className="h-4 w-4 text-[#141414]" />
                  <span>Languages</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#141414]">
                  {PROFILE.languages.join(' · ')}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#575753]">
                  Fluent written and spoken communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
