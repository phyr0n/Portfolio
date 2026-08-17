import { NavLink } from 'react-router-dom';
import { paths } from '@/config/paths';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { PageContainer } from './page-container';

const navItems = [
  { label: 'Home', href: paths.home.getHref() },
  { label: 'About', href: paths.about.getHref() },
  { label: 'Projects', href: paths.projects.getHref() },
  { label: 'Contact', href: paths.contact.getHref() },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <PageContainer className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <NavLink
          to={paths.home.getHref()}
          className="font-display text-lg font-semibold text-text"
        >
          Adam Tait
        </NavLink>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <nav aria-label="Primary" className="flex items-center overflow-x-auto">
            <ul className="flex items-center gap-1 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === paths.home.getHref()}
                    className={({ isActive }) =>
                      [
                        'block border-b-2 px-4 py-2 transition-colors duration-150',
                        isActive
                          ? 'border-accent text-accent'
                          : 'border-transparent text-text-muted hover:text-text',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </PageContainer>
    </header>
  );
};
