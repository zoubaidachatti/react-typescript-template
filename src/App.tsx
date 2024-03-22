import { useAppSelector } from '@/redux/hooks';
import Router from '@/routes/Router';
import GlobalStyles from '@/theme/globalStyles';
import generateTheme from '@/theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';

function App() {
  const appConfig = useAppSelector((state) => state.appReducer);
  const theme = useMemo(
    () => generateTheme(appConfig.theme, appConfig.mode),
    [appConfig.theme, appConfig.mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
