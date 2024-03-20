import {
  DarkModeColorsConfig,
  ForestGreenDarkColorsConfig,
  MidnightPurpleDarkColorsConfig,
  OceanBlueDarkColorsConfig,
  RoyalGoldDarkColorsConfig,
  SunsetRedDarkColorsConfig,
} from '@/config/constants';
import { ThemeOptions } from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';

export const DefaultDarkTheme: ThemeOptions = {
  palette: DarkModeColorsConfig,
  breakpoints,
  typography,
};

export const OceanBlueDarkTheme: ThemeOptions = {
  palette: OceanBlueDarkColorsConfig,
  breakpoints,
  typography,
};

export const MidnightPurpleDarkTheme: ThemeOptions = {
  palette: MidnightPurpleDarkColorsConfig,
  breakpoints,
  typography,
};

export const ForestGreenDarkTheme: ThemeOptions = {
  palette: ForestGreenDarkColorsConfig,
  breakpoints,
  typography,
};

export const SunsetRedDarkTheme: ThemeOptions = {
  palette: SunsetRedDarkColorsConfig,
  breakpoints,
  typography,
};

export const RoyalGoldDarkTheme: ThemeOptions = {
  palette: RoyalGoldDarkColorsConfig,
  breakpoints,
  typography,
};
