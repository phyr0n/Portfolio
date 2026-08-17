import { MiniHeading } from '@/components/ui/miniheading';
import { PageContainer } from '@/components/layout/page-container';
import { projects } from '@/features/projects/data/projects';
import type { Project, ProjectCategory } from '@/features/projects/types/project';
import { ProjectsRow } from './projects-row';

const groups: { category: ProjectCategory; heading: string; description: string }[] = [
  {
    category: 'professional',
    heading: 'Professional',
    description: 'Work built as part of a studio team, in a paid or contracted capacity.',
  },
  {
    category: 'personal',
    heading: 'Personal',
    description: 'Side projects, game jams, and things built outside of work.',
  },
];

export const ProjectsRoute = () => {
  return (
    <section className="py-16 sm:py-24">
      <PageContainer>
        <MiniHeading>Projects</MiniHeading>
        <h1 className="mt-3 font-display text-4xl font-semibold text-text sm:text-5xl">
          Selected work
        </h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          This page contains a selection of projects I have worked on in both a personal and a professional capacity. 
          Some details have been omitted in professional projects due to non-disclosure agreements (NDAs). 
        </p>
      </PageContainer>

      {groups.map(({ category, heading, description }) => {
        const categoryProjects: Project[] = projects.filter((project) => project.category === category);
        if (categoryProjects.length === 0) return null;

        return (
          <div key={category} className="mt-16 first:mt-12">
            <PageContainer>
              <h2 className="font-display text-2xl font-semibold text-text">{heading}</h2>
              <p className="mt-2 max-w-xl text-sm text-text-muted">{description}</p>
            </PageContainer>
            <div className="mt-8">
              <ProjectsRow projects={categoryProjects} />
            </div>
          </div>
        );
      })}
    </section>
  );
};
