import { PaletteOptions } from '@mui/material';

const textPrimary = 'rgba(0, 0, 0, 0.87)';
const divider = 'rgba(0, 0, 0, 0.12)';

export const ColorsConfig: PaletteOptions = {
  primary: {
    main: '#1976d2',
    light: '#63a4ff',
    dark: '#004ba0',
  },
  secondary: {
    main: '#dc004e',
    light: '#ff5c8d',
    dark: '#9a0036',
    contrastText: '#fff',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: textPrimary,
  },
  info: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
    contrastText: '#fff',
  },
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: textPrimary,
  },
  grey: {
    50: '#ffff',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#000',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  text: {
    primary: textPrimary,
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  divider: divider,
  background: {
    paper: '#fff',
    default: '#f8f9fa',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    selectedOpacity: 0.14,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: divider,
    disabledOpacity: 0.38,
    focus: divider,
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export const DarkModeColorsConfig: PaletteOptions = {
  primary: ColorsConfig.primary,
  secondary: ColorsConfig.secondary,
  error: ColorsConfig.error,
  warning: ColorsConfig.warning,
  info: ColorsConfig.info,
  success: ColorsConfig.success,
  grey: {
    900: '#ffff',
    800: '#f5f5f5',
    700: '#eeeeee',
    600: '#e0e0e0',
    500: '#bdbdbd',
    400: '#9e9e9e',
    300: '#757575',
    200: '#616161',
    100: '#424242',
    50: '#000',
    A700: '#d5d5d5',
    A400: '#aaaaaa',
    A200: '#303030',
    A100: '#616161',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  divider: ColorsConfig.divider,
  background: {
    paper: '#424242',
    default: '#303030',
  },
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

export const OceanBlueColorsConfig: PaletteOptions = {
  ...ColorsConfig,
  primary: {
    main: '#0077BE',
    light: '#4DA7E3',
    dark: '#005C8E',
  },
};

export const OceanBlueDarkColorsConfig: PaletteOptions = {
  ...DarkModeColorsConfig,
  primary: {
    main: '#003B5C',
    light: '#195587',
    dark: '#001F2F',
  },
};

export const MidnightPurpleColorsConfig: PaletteOptions = {
  ...ColorsConfig,
  primary: {
    main: '#6A0DAD',
    light: '#A14CC2',
    dark: '#520880',
  },
};

export const MidnightPurpleDarkColorsConfig: PaletteOptions = {
  ...DarkModeColorsConfig,
  primary: {
    main: '#380456',
    light: '#5F1A7D',
    dark: '#1A002C',
  },
};

export const ForestGreenColorsConfig: PaletteOptions = {
  ...ColorsConfig,
  primary: {
    main: '#228B22',
    light: '#3CAE3A',
    dark: '#006400',
  },
};

export const ForestGreenDarkColorsConfig: PaletteOptions = {
  ...DarkModeColorsConfig,
  primary: {
    main: '#004000',
    light: '#0B6C0B',
    dark: '#002100',
  },
};

export const SunsetRedColorsConfig: PaletteOptions = {
  ...ColorsConfig,
  primary: {
    main: '#FF4500',
    light: '#FF7F50',
    dark: '#CD3700',
  },
};

export const SunsetRedDarkColorsConfig: PaletteOptions = {
  ...DarkModeColorsConfig,
  primary: {
    main: '#8B0000',
    light: '#B22222',
    dark: '#800000',
  },
};

export const RoyalGoldColorsConfig: PaletteOptions = {
  ...ColorsConfig,
  primary: {
    main: '#FFD700',
    light: '#FFEC8B',
    dark: '#DAA520',
  },
};

export const RoyalGoldDarkColorsConfig: PaletteOptions = {
  ...DarkModeColorsConfig,
  primary: {
    main: '#B8860B',
    light: '#D2B48C',
    dark: '#8B4513',
  },
};
