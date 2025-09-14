'use client';

import { FC, ReactNode, createContext, useContext } from 'react';
import { IThemeContext } from '../types';
import { getTextColor } from '@utils/colors';

const ThemeContext = createContext<IThemeContext>({
  accentColor: '#000000',
  backgroundColor: '#ffffff',
  textColor: '#000000',
  menuBackgroundColor: '#000000',
  menuTextColor: '#ffffff',
  secondBackgroundColor: '#60ADDF',
  sectionBackgroundColor: '#EDEDED',
  titleTextColor: '#60AEE0',
  secondMenuBackgroundColor: '#3F83A6',
});
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: FC<{ theme: IThemeContext; children: ReactNode }> = ({ theme, children }) => {
  if (!theme) return null;

  return (
    <ThemeContext.Provider value={theme}>
      <style>{`
        :root {
          --ww-accent-color: ${theme.accentColor};
          --ww-text-on-accent-color: ${getTextColor(theme.accentColor)};
          --ww-background-color: ${theme.backgroundColor};
          --ww-background-inverted-color: ${theme.textColor};
          --ww-text-color: ${theme.textColor};
          --ww-menu-bg-color: ${theme.menuBackgroundColor};
          --ww-menu-text-color: ${theme.menuTextColor};
          --ww-second-bg-Color: ${theme.secondBackgroundColor};
          --ww-section-bg-Color: ${theme.sectionBackgroundColor};
          --ww-title-text-bg-Color: ${theme.titleTextColor};
          --ww-second-menu-bg-Color: ${theme.secondMenuBackgroundColor};
        }
      `}</style>

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
