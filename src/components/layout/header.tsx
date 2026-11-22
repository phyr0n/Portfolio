import { NavLink } from 'react-router-dom';
import { paths } from '@/config/paths';
import { HamburgerMenu } from '@/components/ui/hamburger-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { PageContainer } from './page-container';

const navItems = [
  { label: 'Home', href: paths.home.getHref() },
  { label: 'About', href: paths.about.getHref() },
  { label: 'Projects', href: paths.projects.getHref() },
  { label: 'Contact', href: paths.contact.getHref() },
];

const NavItems = ({ variant }: { variant: 'desktop' | 'mobile' }) =>
{
  const desktopNavItem = "flex items-center gap-1 text-sm";
  const mobileNavItem = "flex flex-col py-2 text-base";
  const defaultClassName = "block transition-colors duration-150";
  const desktopHighlightAttributes = "border-b-2 px-4 py-2";
  const mobileHighlightAttributes = "border-l-2 px-4 py-3";
  const visibleHighlightAttributes = "border-accent text-accent";
  const invisibleHighlightAttributes = "border-transparent text-text-muted hover:text-text";

  return (
    <ul className={variant === 'desktop' ? desktopNavItem : mobileNavItem}>
      {navItems.map((item) => (
        <li key={item.href}>
          <NavLink to={item.href} end={item.href === paths.home.getHref()}
            className={({ isActive }) =>
              [
                defaultClassName,
                variant === 'desktop' ? desktopHighlightAttributes : mobileHighlightAttributes,
                isActive ? visibleHighlightAttributes : invisibleHighlightAttributes,
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
};

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <PageContainer className="flex items-center justify-between py-3 sm:py-4">
        <NavLink
          to={paths.home.getHref()}
          className="font-display text-lg font-semibold text-text"
        >
          Adam Tait
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav aria-label="Primary" className="hidden sm:flex sm:items-center">
            <NavItems variant="desktop" />
          </nav>

          <ThemeToggle />

          <HamburgerMenu>
            <PageContainer>
              <NavItems variant="mobile" />
            </PageContainer>
          </HamburgerMenu>
        </div>
      </PageContainer>
    </header>
  );
};
