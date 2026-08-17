import { useRef } from 'react';

import { PageContainer, BleedLeft } from '@/components/layout/page-container';
import type { Project } from '@/features/projects/types/project';
import { ProjectCard } from './project-card';

type ProjectsRowProps = {
  projects: Project[];
};

export const ProjectsRow = ({ projects }: ProjectsRowProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (projects.length === 0) {
    return (
      <PageContainer>
        <p className="text-sm text-text-muted">
          No projects yet — add entries to `src/features/projects/data/projects.ts`.
        </p>
      </PageContainer>
    );
  }

  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div>
      <BleedLeft>
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pr-6 pb-4 [scrollbar-width:thin]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </BleedLeft>

      <PageContainer className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByAmount(-360)}
          aria-label="Scroll projects left"
          className="flex h-9 w-9 items-center justify-center border border-border text-text transition-colors hover:border-accent hover:text-accent"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5 8 12l7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(360)}
          aria-label="Scroll projects right"
          className="flex h-9 w-9 items-center justify-center border border-border text-text transition-colors hover:border-accent hover:text-accent"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
      </PageContainer>
    </div>
  );
};
