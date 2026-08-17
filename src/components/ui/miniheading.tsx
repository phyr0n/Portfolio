import type { PropsWithChildren } from 'react';

export const MiniHeading = ({ children }: PropsWithChildren) => {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
      {children}
    </p>
  );
};
