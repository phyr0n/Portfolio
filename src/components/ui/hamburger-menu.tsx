import { useEffect, useId, useState, type MouseEvent, type ReactNode } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg';

type HamburgerMenuProps = {
  /** Panel content, e.g. a list of nav links. */
  children: ReactNode;
  /** Width at and above which the menu is hidden. */
  breakpoint?: Breakpoint;
  /** Accessible name for the panel's <nav>. */
  label?: string;
  buttonClassName?: string;
  panelClassName?: string;
};

// Written out in full so Tailwind can find them — class names built at
// runtime (e.g. `${bp}:hidden`) would never get CSS generated.
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

/** Shared 16px line-icon frame; children are the icon's paths. */
const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const MenuIcon = () => (
  <Icon>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

const CloseIcon = () => (
  <Icon>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const HamburgerMenu = ({ children, breakpoint = 'sm', label = 'Primary',
  buttonClassName = "flex h-9 w-9 items-center justify-center border border-border text-text transition-colors hover:border-accent hover:text-accent",
  panelClassName = "border-y border-border bg-bg",
}: HamburgerMenuProps) => {
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
      <button 
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className={`${buttonClassName} ${hideAt[breakpoint]}`}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <nav
          id={panelId}
          aria-label={label}
          onClick={onPanelClick}
          className={`absolute inset-x-0 top-full ${panelClassName} ${hideAt[breakpoint]}`}
        >
          {children}
        </nav>
      )}
    </>
  );
};
