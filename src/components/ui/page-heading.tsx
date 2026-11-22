import type { PropsWithChildren } from 'react';

/** The large title at the top of a page, e.g. "About Me". */
export const PageHeading = ({ children }: PropsWithChildren) => (
  <h1 className="font-display text-4xl font-semibold text-text sm:text-5xl">{children}</h1>
);
