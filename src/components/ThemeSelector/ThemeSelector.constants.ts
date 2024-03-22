import {
  DefaultDarkTheme,
  ForestGreenDarkTheme,
  MidnightPurpleDarkTheme,
  OceanBlueDarkTheme,
  RoyalGoldDarkTheme,
  SunsetRedDarkTheme,
} from '@/theme/themes.dark';
import {
  DefaultTheme,
  ForestGreenTheme,
  MidnightPurpleTheme,
  OceanBlueTheme,
  RoyalGoldTheme,
  SunsetRedTheme,
} from '@/theme//themes.light';
import { ThemeOptions } from '@mui/material';
import { AppThemeEnum } from '@/config/enums';

export type AppTheme = {
  darkThemeName: AppThemeEnum;
  lightThemeName: AppThemeEnum;
  lightTheme: ThemeOptions;
  darkTheme: ThemeOptions;
};

export const themes: AppTheme[] = [
  {
    lightThemeName: AppThemeEnum.Default,
    darkThemeName: AppThemeEnum.DefaultDark,
    lightTheme: DefaultTheme,
    darkTheme: DefaultDarkTheme,
  },
  {
    lightThemeName: AppThemeEnum.ForestGreen,
    darkThemeName: AppThemeEnum.ForestGreenDark,
    lightTheme: ForestGreenTheme,
    darkTheme: ForestGreenDarkTheme,
  },
  {
    lightThemeName: AppThemeEnum.MidnightPurple,
    darkThemeName: AppThemeEnum.MidnightPurpleDark,
    lightTheme: MidnightPurpleTheme,
    darkTheme: MidnightPurpleDarkTheme,
  },
  {
    lightThemeName: AppThemeEnum.OceanBlue,
    darkThemeName: AppThemeEnum.OceanBlueDark,
    lightTheme: OceanBlueTheme,
    darkTheme: OceanBlueDarkTheme,
  },
  {
    lightThemeName: AppThemeEnum.RoyalGold,
    darkThemeName: AppThemeEnum.RoyalGoldDark,
    lightTheme: RoyalGoldTheme,
    darkTheme: RoyalGoldDarkTheme,
  },
  {
    lightThemeName: AppThemeEnum.SunsetRed,
    darkThemeName: AppThemeEnum.SunsetRedDark,
    lightTheme: SunsetRedTheme,
    darkTheme: SunsetRedDarkTheme,
  },
];
