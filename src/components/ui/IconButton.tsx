import type { ButtonHTMLAttributes } from 'react';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Required: an icon-only button has no visible text to name it. */
  'aria-label': string;
};

/** The site's square bordered icon button. Pass the icon as children. */
export default function IconButton({ className = '', type = 'button', ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      className={`flex h-9 w-9 items-center justify-center border border-border text-text transition-colors hover:border-accent hover:text-accent ${className}`}
      {...props}
    />
  );
}
