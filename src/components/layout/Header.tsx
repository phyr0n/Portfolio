import { NavLink } from 'react-router-dom';
import { paths } from '@/config/paths';
import HamburgerMenu from '@/components/ui/HamburgerMenu';
import ThemeToggle from '@/components/ui/ThemeToggle';
import PageContainer from './PageContainer';

const navItems = [
  { label: 'Home', href: paths.home.getHref() },
  { label: 'About', href: paths.about.getHref() },
  { label: 'Projects', href: paths.projects.getHref() },
  { label: 'Contact', href: paths.contact.getHref() },
];

// Represents the TailwindCSS classes for highlighted navigation items depending on the platform.
const highlightedLinkClasses = {
  desktop: 'border-b-2 px-4 py-2',
  mobile: 'border-l-2 px-4 py-3',
}

// Represents the TailwindCSS classes for navigation items depending on the platform.
const navItemClasses = {
  desktop: 'flex items-center gap-1 text-sm',
  mobile: 'flex flex-col py-2 text-base',
}

function NavItems({ variant }: { variant: 'desktop' | 'mobile' }) {
  return (
    <ul className={navItemClasses[variant]}>
      {navItems.map((item) => (
        <li key={item.href}>
          <NavLink to={item.href} end={item.href === paths.home.getHref()} className={`block border-transparent text-text-muted transition-colors duration-150 hover:text-text aria-[current=page]:border-accent aria-[current=page]:text-accent ${highlightedLinkClasses[variant]}`}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <PageContainer className="flex items-center justify-between py-3 sm:py-4">
        <NavLink to={paths.home.getHref()} className="font-display text-lg font-semibold text-text">
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
}
