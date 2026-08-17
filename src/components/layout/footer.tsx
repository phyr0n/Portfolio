import { PageContainer } from './page-container';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <PageContainer className="flex flex-col gap-3 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-4">
          <span>© {year}</span>
        </span>
      </PageContainer>
    </footer>
  );
};
