import { useEffect, useId, useState, type MouseEvent, type ReactNode } from 'react';
import IconButton from './IconButton';
import { CloseIcon, MenuIcon } from './icons';

type Breakpoint = 'sm' | 'md' | 'lg';

type HamburgerMenuProps = {
  children: ReactNode;
  breakpoint?: Breakpoint;
  label?: string;
  buttonClassName?: string;
  panelClassName?: string;
};

const hideAt: Record<Breakpoint, string> = {
  sm: 'sm:hidden',
  md: 'md:hidden',
  lg: 'lg:hidden',
};

// Tailwind's default breakpoint widths.
const breakpointQueries: Record<Breakpoint, string> = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
};

export default function HamburgerMenu({ children, breakpoint = 'sm', label = 'Primary', buttonClassName = '', panelClassName = "border-y border-border bg-bg",
}: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };
    const wideQuery = window.matchMedia(breakpointQueries[breakpoint]);
    wideQuery.addEventListener('change', onBreakpoint);

    return () => {
      wideQuery.removeEventListener('change', onBreakpoint);
    };
  }, [open, breakpoint]);

  const onPanelClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('a')) {
      setOpen(false);
    }
  };

  return (
    <>
      <IconButton onClick={() => setOpen((isOpen) => !isOpen)} aria-expanded={open} aria-controls={panelId} aria-label={open ? 'Close menu' : 'Open menu'} className={`${buttonClassName} ${hideAt[breakpoint]}`}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {open && (
        <nav id={panelId} aria-label={label} onClick={onPanelClick} className={`absolute inset-x-0 top-full ${panelClassName} ${hideAt[breakpoint]}`}>
          {children}
        </nav>
      )}
    </>
  );
}
