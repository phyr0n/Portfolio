import type { PropsWithChildren } from 'react';

/** The large title at the top of a page, e.g. "About Me". */
export default function PageHeading({ children }: PropsWithChildren) {
  return <h1 className="font-display text-4xl font-semibold text-text sm:text-5xl">{children}</h1>;
}
