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

export type AppTheme = {
  name: string;
  lightTheme: ThemeOptions;
  darkTheme: ThemeOptions;
};

export const themes: AppTheme[] = [
  { name: 'Default', lightTheme: DefaultTheme, darkTheme: DefaultDarkTheme },
  { name: 'ForestGreen', lightTheme: ForestGreenTheme, darkTheme: ForestGreenDarkTheme },
  {
    name: 'MidnightPurple',
    lightTheme: MidnightPurpleTheme,
    darkTheme: MidnightPurpleDarkTheme,
  },
  { name: 'OceanBlue', lightTheme: OceanBlueTheme, darkTheme: OceanBlueDarkTheme },
  { name: 'RoyalGold', lightTheme: RoyalGoldTheme, darkTheme: RoyalGoldDarkTheme },
  { name: 'SunsetRed', lightTheme: SunsetRedTheme, darkTheme: SunsetRedDarkTheme },
];
