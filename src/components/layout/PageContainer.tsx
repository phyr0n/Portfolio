import type { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{ className?: string }>;

export default function PageContainer({ className = '', children }: ContainerProps) {
  return <div className={`mx-auto max-w-[100rem] px-6 ${className}`}>
    {children}
  </div>;
}
