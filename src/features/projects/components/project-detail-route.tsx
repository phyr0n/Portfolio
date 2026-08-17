import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';
import { MiniHeading } from '@/components/ui/miniheading';
import { Markdown } from '@/components/ui/markdown';
import { PageContainer } from '@/components/layout/page-container';
import { getProjectById, projects } from '@/features/projects/data/projects';
import { ProjectMarquee } from './project-marquee';
import { ProjectMediaCarousel } from './project-media-carousel';
import { ProjectStatusBadge } from './project-status-badge';

type ProjectDetailRouteProps = {
  projectId: string;
};

export const ProjectDetailRoute = ({ projectId }: ProjectDetailRouteProps) => {
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <PageContainer className="max-w-3xl! py-24">
        <MiniHeading>Not found</MiniHeading>
        <h1 className="mt-3 font-display text-3xl font-semibold text-text">
          No project matches “{projectId}”.
        </h1>
        <Link to={paths.projects.getHref()} className="mt-6 inline-block text-sm text-accent hover:underline">
          ← Back to projects
        </Link>
      </PageContainer>
    );
  }

  const isCancelled = project.status === 'cancelled';
  const index = projects.findIndex((p) => p.id === project.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const hasMedia = project.media && project.media.length > 0;
  const hasSkills = project.skills && project.skills.length > 0;
  const hasLinks = project.links && project.links.length > 0;
  const hasAside = hasSkills || hasLinks;

  return (
    <article>
      <PageContainer className="pt-8">
        <Link to={paths.projects.getHref()} className="text-xs tracking-[0.15em] text-text-muted uppercase hover:text-accent">
          ← Back to projects
        </Link>
      </PageContainer>

      {hasMedia ? (
        <PageContainer className="mt-6">
          <ProjectMediaCarousel items={project.media!} title={project.title} />
          {project.copyrightNotice && (
            <p className="mt-2 text-xs text-text-muted">{project.copyrightNotice}</p>
          )}
        </PageContainer>
      ) : (
        <>
          <ProjectMarquee
            marquee={project.marquee}
            title={project.title}
            className="mt-6 aspect-21/9 w-full"
          />
          {project.copyrightNotice && (
            <PageContainer className="mt-2">
              <p className="text-xs text-text-muted">{project.copyrightNotice}</p>
            </PageContainer>
          )}
        </>
      )}

      <PageContainer>
        <header className="flex flex-col gap-6 border-b border-border py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-text-muted">
              {project.company} <span className="text-border">·</span> <span className="capitalize">{project.category}</span>
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-text sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ProjectStatusBadge status={project.status} />
            <dl className="flex gap-6 text-sm">
              <div>
                <dt className="text-xs tracking-[0.1em] text-text-muted uppercase">Role</dt>
                <dd className="mt-1 text-text">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.1em] text-text-muted uppercase">Year</dt>
                <dd className="mt-1 text-text">{project.year}</dd>
              </div>
            </dl>
          </div>
        </header>

        {isCancelled && (
          <div className="mt-8 border-l-2 border-accent bg-bg-elevated py-4 pl-5">
            <p className="text-sm text-text">
              This project was cancelled before release. The sections below
              cover what was built and why it didn't make it to launch.
            </p>
          </div>
        )}

        <div className={`gap-12 py-12 ${hasAside ? 'grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]' : ''}`}>
          <div className="space-y-10">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-text">
                  {section.heading}
                </h2>
                <Markdown className="mt-3">{section.body}</Markdown>
              </section>
            ))}
          </div>

          {hasAside && (
            <aside className="space-y-6">
              {hasSkills && (
                <div className="h-fit border border-border p-6">
                  <p className="text-xs tracking-[0.15em] text-text-muted uppercase">Skills</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.skills!.map((skill) => (
                      <li key={skill} className="border border-border px-2 py-1 text-xs text-text">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasLinks && (
                <div className="h-fit border border-border p-6">
                  <p className="text-xs tracking-[0.15em] text-text-muted uppercase">Links</p>
                  <ul className="mt-4 space-y-3">
                    {project.links!.map((link) => (
                      <li key={link.href + link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-text hover:text-accent"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          )}
        </div>

        <nav className="grid grid-cols-1 gap-px border-t border-border sm:grid-cols-2" aria-label="More projects">
          <Link
            to={paths.projectDetail.getHref(previous.id)}
            className="group flex flex-col gap-1 py-8 pr-6 hover:text-accent"
          >
            <span className="text-xs tracking-[0.15em] text-text-muted uppercase group-hover:text-accent">
              ← Previous
            </span>
            <span className="font-display text-lg text-text group-hover:text-accent">{previous.title}</span>
          </Link>
          <Link
            to={paths.projectDetail.getHref(next.id)}
            className="group flex flex-col items-start gap-1 py-8 pl-0 sm:items-end sm:pl-6 sm:text-right hover:text-accent"
          >
            <span className="text-xs tracking-[0.15em] text-text-muted uppercase group-hover:text-accent">
              Next →
            </span>
            <span className="font-display text-lg text-text group-hover:text-accent">{next.title}</span>
          </Link>
        </nav>
      </PageContainer>
    </article>
  );
};
