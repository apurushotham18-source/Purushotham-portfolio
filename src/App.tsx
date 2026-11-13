/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AboutEducation from './components/AboutEducation';
import ContactFooter from './components/ContactFooter';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import ProjectsSection from './components/ProjectsSection';
import ResumeModal from './components/ResumeModal';
import SkillsToolkit from './components/SkillsToolkit';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F4F1] text-[#141414]">
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      <main>
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <SkillsToolkit />
        <AboutEducation />
        <ProjectsSection onSelectProject={setSelectedProject} />
      </main>

      <ContactFooter />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
