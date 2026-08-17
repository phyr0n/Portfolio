import { paths } from '@/config/paths';
import { ButtonLink } from '@/components/ui/button';
import { PageContainer } from '@/components/layout/page-container';

export const HeroSection = () => {
  return (
    <PageContainer className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <h1 className="font-display text-5xl leading-[1.05] font-semibold text-text sm:text-7xl">
        Adam Tait
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
        Intermediate Programmer at Tanglewood Games. Based in Newcastle upon Tyne, England.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink to={paths.projects.getHref()} variant="primary">
          View projects
        </ButtonLink>
        <ButtonLink to={paths.contact.getHref()} variant="secondary">
          Get in touch
        </ButtonLink>
      </div>
    </PageContainer>
  );
};
