import { HeroSection } from './hero-section';
import { FocusSection } from './focus-section';
import { FeaturedProjectsSection } from './featured-projects-section';

export const HomeRoute = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
    </>
  );
};
