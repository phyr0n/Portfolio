import PageContainer from './PageContainer';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <PageContainer className="flex flex-col gap-3 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-4">
          <span>Copyright © Adam Tait {year}</span>
        </span>
      </PageContainer>
    </footer>
  );
}
