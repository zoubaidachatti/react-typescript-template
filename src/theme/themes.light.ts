import {
  ColorsConfig,
  ForestGreenColorsConfig,
  MidnightPurpleColorsConfig,
  OceanBlueColorsConfig,
  RoyalGoldColorsConfig,
  SunsetRedColorsConfig,
} from '@/config/constants';
import { ThemeOptions } from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';

export const DefaultTheme: ThemeOptions = {
  palette: ColorsConfig,
  breakpoints,
  typography,
};
export const OceanBlueTheme: ThemeOptions = {
  palette: OceanBlueColorsConfig,
  breakpoints,
  typography,
};
export const MidnightPurpleTheme: ThemeOptions = {
  palette: MidnightPurpleColorsConfig,
  breakpoints,
  typography,
};
export const ForestGreenTheme: ThemeOptions = {
  palette: ForestGreenColorsConfig,
  breakpoints,
  typography,
};
export const SunsetRedTheme: ThemeOptions = {
  palette: SunsetRedColorsConfig,
  breakpoints,
  typography,
};
export const RoyalGoldTheme: ThemeOptions = {
  palette: RoyalGoldColorsConfig,
  breakpoints,
  typography,
};
