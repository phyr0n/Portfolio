import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-24">
      <p className="text-sm text-text-muted">404</p>
      <h1 className="font-display text-5xl font-semibold text-text sm:text-6xl">
        Off the map.
      </h1>
      <p className="max-w-lg text-text-muted">
        Time to head back!
      </p>
      <Link
        to={paths.home.getHref()}
        className="border border-accent px-5 py-3 text-sm text-accent transition-colors hover:bg-accent hover:text-accent-contrast"
      >
        Return home
      </Link>
    </div>
  );
};
