import { Link } from 'react-router-dom';

import { paths } from '@/config/paths';
import type { Project } from '@/features/projects/types/project';
import { ProjectMarquee } from './project-marquee';
import { ProjectStatusBadge } from './project-status-badge';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  const isCancelled = project.status === 'cancelled';

  return (
    <Link
      to={paths.projectDetail.getHref(project.id)}
      className={`group flex w-[300px] shrink-0 snap-start flex-col border border-border transition-colors duration-150 hover:border-text sm:w-[340px] ${className}`}
    >
      <ProjectMarquee marquee={project.marquee} title={project.title} className="aspect-4/3" />

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase">
          {project.company} · {project.category}
        </p>

        <h3 className="mt-2 font-display text-xl font-semibold text-text">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {project.summary}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-xs text-text-muted">
            {project.role} · {project.year}
          </span>
          <ProjectStatusBadge status={project.status} />
        </div>
      </div>
    </Link>
  );
};
