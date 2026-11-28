import { useTheme } from '@/app/theme-provider';
import IconButton from './IconButton';
import { MoonIcon, SunIcon } from './icons';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <IconButton onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={isDark}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
