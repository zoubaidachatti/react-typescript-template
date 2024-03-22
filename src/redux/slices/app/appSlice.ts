import { STORAGE_KEYS } from '@/config/constants';
import { AppModeEnum, AppThemeEnum } from '@/config/enums';
import { persistData, getPersistData } from '@/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  mode: AppModeEnum;
  theme: AppThemeEnum;
}

const initialState: AppState = {
  mode: getPersistData(STORAGE_KEYS.modeKey) as AppModeEnum,
  theme: getPersistData(STORAGE_KEYS.themeKey) as AppThemeEnum,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.mode = state.mode === AppModeEnum.Dark ? AppModeEnum.Light : AppModeEnum.Dark;
      persistData(STORAGE_KEYS.modeKey, state.mode);
    },
    setTheme: (state, action: PayloadAction<{ theme: AppThemeEnum }>) => {
      const { theme } = action.payload;

      if (state.mode === AppModeEnum.Light) {
        switch (theme) {
          case AppThemeEnum.Default:
          case AppThemeEnum.DefaultDark:
            state.theme = AppThemeEnum.Default;
            break;
          case AppThemeEnum.OceanBlue:
          case AppThemeEnum.OceanBlueDark:
            state.theme = AppThemeEnum.OceanBlue;
            break;
          case AppThemeEnum.MidnightPurple:
          case AppThemeEnum.MidnightPurpleDark:
            state.theme = AppThemeEnum.MidnightPurple;
            break;
          case AppThemeEnum.ForestGreen:
          case AppThemeEnum.ForestGreenDark:
            state.theme = AppThemeEnum.ForestGreen;
            break;
          case AppThemeEnum.SunsetRed:
          case AppThemeEnum.SunsetRedDark:
            state.theme = AppThemeEnum.SunsetRed;
            break;
          case AppThemeEnum.RoyalGold:
          case AppThemeEnum.RoyalGoldDark:
            state.theme = AppThemeEnum.RoyalGold;
            break;
          default:
            break;
        }
      } else {
        switch (theme) {
          case AppThemeEnum.Default:
          case AppThemeEnum.DefaultDark:
            state.theme = AppThemeEnum.DefaultDark;
            break;
          case AppThemeEnum.OceanBlue:
          case AppThemeEnum.OceanBlueDark:
            state.theme = AppThemeEnum.OceanBlueDark;
            break;
          case AppThemeEnum.MidnightPurple:
          case AppThemeEnum.MidnightPurpleDark:
            state.theme = AppThemeEnum.MidnightPurpleDark;
            break;
          case AppThemeEnum.ForestGreen:
          case AppThemeEnum.ForestGreenDark:
            state.theme = AppThemeEnum.ForestGreenDark;
            break;
          case AppThemeEnum.SunsetRed:
          case AppThemeEnum.SunsetRedDark:
            state.theme = AppThemeEnum.SunsetRedDark;
            break;
          case AppThemeEnum.RoyalGold:
          case AppThemeEnum.RoyalGoldDark: {
            state.theme = AppThemeEnum.RoyalGoldDark;
            break;
          }
          default:
            break;
        }
      }
      persistData(STORAGE_KEYS.themeKey, state.theme);
    },
  },
});

export const { switchMode, setTheme } = appSlice.actions;
export default appSlice.reducer;
