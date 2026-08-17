import type { PropsWithChildren } from 'react';
import { ThemeProvider } from './theme-provider';

/**
 * Put application-wide providers in this provider (i.e. error boundaries, theme providers, etc.).
 */
export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
  <>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </>
  )
};
