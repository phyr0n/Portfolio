import type { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{ className?: string }>;

export const PageContainer = ({ className = '', children }: ContainerProps) => {
  return <div className={`mx-auto max-w-[100rem] px-6 ${className}`}>{children}</div>;
};

export const BleedLeft = ({ className = '', children }: ContainerProps) => {
  return (
    <div className={`pl-6 sm:pl-[max(1.5rem,calc((100vw-100rem)/2+1.5rem))] ${className}`}>
      {children}
    </div>
  );
};
