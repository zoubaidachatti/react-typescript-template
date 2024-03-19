import { AppModeEnum, AppThemeEnum } from '@/config/enums';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  mode: AppModeEnum;
  theme: AppThemeEnum;
}

const initialState: AppState = {
  mode: AppModeEnum.Light,
  theme: AppThemeEnum.Default,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.mode = state.mode === AppModeEnum.Dark ? AppModeEnum.Light : AppModeEnum.Dark;
    },
    setTheme: (state, action: PayloadAction<{ theme: AppThemeEnum }>) => {
      const { theme } = action.payload;
      if (state.mode === AppModeEnum.Light) {
        switch (theme) {
          case AppThemeEnum.Default:
            state.theme = AppThemeEnum.Default;
            break;
          case AppThemeEnum.OceanBlue:
            state.theme = AppThemeEnum.OceanBlue;
            break;
          case AppThemeEnum.MidnightPurple:
            state.theme = AppThemeEnum.MidnightPurple;
            break;
          case AppThemeEnum.ForestGreen:
            state.theme = AppThemeEnum.ForestGreen;
            break;
          case AppThemeEnum.SunsetRed:
            state.theme = AppThemeEnum.SunsetRed;
            break;
          case AppThemeEnum.RoyalGold:
            state.theme = AppThemeEnum.RoyalGold;
            break;
          default:
            break;
        }
      } else {
        switch (theme) {
          case AppThemeEnum.DefaultDark:
            state.theme = AppThemeEnum.DefaultDark;
            break;
          case AppThemeEnum.OceanBlueDark:
            state.theme = AppThemeEnum.OceanBlueDark;
            break;
          case AppThemeEnum.MidnightPurpleDark:
            state.theme = AppThemeEnum.MidnightPurpleDark;
            break;
          case AppThemeEnum.ForestGreenDark:
            state.theme = AppThemeEnum.ForestGreenDark;
            break;
          case AppThemeEnum.SunsetRedDark:
            state.theme = AppThemeEnum.SunsetRedDark;
            break;
          case AppThemeEnum.RoyalGoldDark:
            state.theme = AppThemeEnum.RoyalGoldDark;
            break;
          default:
            break;
        }
      }
    },
  },
});

export const { switchMode } = appSlice.actions;
export default appSlice.reducer;
