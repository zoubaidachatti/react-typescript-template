import { AppThemeEnum } from '@/config/enums';
import { createTheme } from '@mui/material';
import ComponentsOverrides from './overrides';
import {
  DefaultDarkTheme,
  ForestGreenDarkTheme,
  MidnightPurpleDarkTheme,
  OceanBlueDarkTheme,
  RoyalGoldDarkTheme,
  SunsetRedDarkTheme,
} from './themes.dark';
import {
  DefaultTheme,
  ForestGreenTheme,
  MidnightPurpleTheme,
  OceanBlueTheme,
  RoyalGoldTheme,
  SunsetRedTheme,
} from './themes.light';

const generateTheme = (appTheme: AppThemeEnum) => {
  switch (appTheme) {
    // Light themes
    case AppThemeEnum.Default: {
      const theme = createTheme(DefaultTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.OceanBlue: {
      const theme = createTheme(OceanBlueTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.MidnightPurple: {
      const theme = createTheme(MidnightPurpleTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.ForestGreen: {
      const theme = createTheme(ForestGreenTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.SunsetRed: {
      const theme = createTheme(SunsetRedTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.RoyalGold: {
      const theme = createTheme(RoyalGoldTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    // Dark themes
    case AppThemeEnum.DefaultDark: {
      const theme = createTheme(DefaultDarkTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.OceanBlueDark: {
      const theme = createTheme(OceanBlueDarkTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.MidnightPurpleDark: {
      const theme = createTheme(MidnightPurpleDarkTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.ForestGreenDark: {
      const theme = createTheme(ForestGreenDarkTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.SunsetRedDark: {
      const theme = createTheme(SunsetRedDarkTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    case AppThemeEnum.RoyalGoldDark: {
      const theme = createTheme(RoyalGoldDarkTheme);
      theme.components = ComponentsOverrides(theme);
      return theme;
    }
    // Default theme
    default: {
      const defaultTheme = createTheme(DefaultTheme);
      defaultTheme.components = ComponentsOverrides(defaultTheme);
      return defaultTheme;
    }
  }
};

export default generateTheme;
