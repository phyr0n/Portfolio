import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';

export default function UnknownPageRoute() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-24">
      <h1 className="font-display text-5xl font-semibold text-text sm:text-6xl">
        Wrong turn!
      </h1>
      <p className="max-w-lg text-text-muted">
        This page does not exist. Click the button below to return home.
      </p>
      <Link to={paths.home.getHref()} className="border border-accent px-5 py-3 text-sm text-accent transition-colors hover:bg-accent hover:text-accent-contrast">
        Return home
      </Link>
    </div>
  );
}
