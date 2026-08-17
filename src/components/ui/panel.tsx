import type { PropsWithChildren, ReactNode } from 'react';

type PanelProps = PropsWithChildren<{
  label?: string;
  className?: string;
  bodyClassName?: string;
  action?: ReactNode;
}>;

export const Panel = ({ label, action, className = '', bodyClassName = '', children }: PanelProps) => {
  return (
    <div className={`border border-border ${className}`}>
      {(label || action) && (
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          {label && (
            <span className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase">
              {label}
            </span>
          )}
          {action}
        </div>
      )}
      <div className={`p-6 sm:p-8 ${bodyClassName}`}>{children}</div>
    </div>
  );
};
