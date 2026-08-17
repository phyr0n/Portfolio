import type { ProjectStatus } from '@/features/projects/types/project';

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
  className?: string;
};

const statusCopy: Record<Exclude<ProjectStatus, 'released'>, string> = {
  'in-development': 'In development',
  cancelled: 'Cancelled',
};

export const ProjectStatusBadge = ({ status, className = '' }: ProjectStatusBadgeProps) => {
  if (status === 'released') return null;

  const isCancelled = status === 'cancelled';

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[10px] tracking-[0.15em] uppercase',
        isCancelled ? 'border-accent text-accent' : 'border-border text-text-muted',
        className,
      ].join(' ')}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isCancelled ? 'bg-accent' : 'bg-text-muted'}`}
        aria-hidden="true"
      />
      {statusCopy[status]}
    </span>
  );
};
