import { MiniHeading } from '@/components/ui/miniheading';
import { PageContainer } from '@/components/layout/page-container';

const focusAreas = [
  {
    label: 'C++',
    body: 'Fast, efficient, and memory-safe code for high-performance applications such as video games.',
  },
  {
    label: 'C#',
    body: 'User-friendly desktop applications and web APIs within the .NET Core ecosystem.',
  },
  {
    label: 'Python',
    body: 'Tools that enhance existing applications with artificial intelligence, data analysis and visualisations.',
  },
];

export const FocusSection = () => {
  return (
    <PageContainer className="py-16">
      <MiniHeading>Focus</MiniHeading>
      <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
        What I work on
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {focusAreas.map((area) => (
          <div key={area.label} className="border-t border-accent pt-4">
            <p className="text-sm font-medium text-text">{area.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {area.body}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
