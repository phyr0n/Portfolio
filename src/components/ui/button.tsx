import type { ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'secondary';

const variantClasses: Record<Variant, string> = {
  primary:
    'border border-accent bg-accent text-accent-contrast hover:bg-transparent hover:text-accent',
  secondary:
    'border border-border text-text hover:border-accent hover:text-accent',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm tracking-wide transition-colors duration-150';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};

type ButtonLinkProps = LinkProps & {
  variant?: Variant;
};
export const ButtonLink = ({ variant = 'primary', className = '', ...props }: ButtonLinkProps) => {
  return (
    <Link className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />
  );
};
