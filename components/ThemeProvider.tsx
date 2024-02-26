'use client';

import { FC, ReactNode, createContext, useContext } from 'react';
import { IThemeContext } from '../types';

const ThemeContext = createContext<IThemeContext>({
  accentColor: '#000000',
  backgroundColor: '#ffffff',
  textColor: '#000000',
});
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: FC<{ theme: IThemeContext; children: ReactNode }> = ({ theme, children }) => {
  if (!theme) return null;

  return (
    <ThemeContext.Provider value={theme}>
      <style jsx global>{`
        :root {
          --ww-accent-color: ${theme.accentColor};
          --ww-background-color: ${theme.backgroundColor};
          --ww-background-inverted-color: ${theme.textColor};
          --ww-text-color: ${theme.accentColor};
        }
      `}</style>

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
