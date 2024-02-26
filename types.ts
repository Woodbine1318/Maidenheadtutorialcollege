export interface IThemeContext {
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface ThemedSSComponent {
  theme: IThemeContext;
}
