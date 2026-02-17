import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface Props {
  children: ReactNode;
}

// пример базовой темы
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    background: { default: '#f5f5f5' },
  },
});

const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </MuiThemeProvider>
);

export default ThemeProvider;