import { MiniHeading } from '@/components/ui/miniheading';
import { ButtonLink } from '@/components/ui/button';
import { PageContainer } from '@/components/layout/page-container';
import { paths } from '@/config/paths';
import { ProjectsRow, projects } from '@/features/projects';

export const FeaturedProjectsSection = () => {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-16">
      <PageContainer className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <MiniHeading>Featured</MiniHeading>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Recent work
          </h2>
        </div>
        <ButtonLink to={paths.projects.getHref()} variant="secondary">
          All projects
        </ButtonLink>
      </PageContainer>

      <div className="mt-10">
        <ProjectsRow projects={featured} />
      </div>
    </section>
  );
};
