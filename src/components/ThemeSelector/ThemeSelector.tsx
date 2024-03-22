import DarkModeIcon from '@/assets/icons/dark-mode.svg?react';
import LightModeIcon from '@/assets/icons/light-mode.svg?react';
import ThemeIcon from '@/assets/icons/theme.svg?react';
import { themes } from '@/components/ThemeSelector/ThemeSelector.constants';
import { SvgContainer } from '@/components/ThemeSelector/ThemeSelector.styles';
import { AppModeEnum, AppThemeEnum } from '@/config/enums';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setTheme, switchMode } from '@/redux/slices/app/appSlice';
import { Collapse, SimplePaletteColorOptions, Stack, Tooltip } from '@mui/material';
import { useState } from 'react';

export default function ThemeSelector() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);

  const appMode = useAppSelector((state) => state.appReducer.mode);
  const appTheme = useAppSelector((state) => state.appReducer.theme);

  const dispatch = useAppDispatch();

  const selectTheme = (theme: AppThemeEnum) => {
    setToggleTheme(false);
    dispatch(setTheme({ theme }));
  };
  const switchAppMode = () => {
    dispatch(switchMode());
    dispatch(setTheme({ theme: appTheme }));
  };

  return (
    <Stack direction="row" marginLeft={'auto'} alignItems={'center'} spacing={1}>
      <Tooltip
        title={appMode === AppModeEnum.Dark ? AppModeEnum.Light : AppModeEnum.Dark}
        onClick={switchAppMode}
      >
        <SvgContainer>
          {appMode === AppModeEnum.Dark ? <LightModeIcon /> : <DarkModeIcon />}
        </SvgContainer>
      </Tooltip>
      <SvgContainer>
        <ThemeIcon
          style={{ display: toggleTheme ? 'none' : 'block' }}
          onClick={() => setToggleTheme(true)}
        />
      </SvgContainer>

      <Collapse in={toggleTheme} orientation="horizontal">
        <Stack direction={'column'} spacing={1}>
          <Stack direction="row" spacing={1}>
            {themes.map((theme, key) => (
              <Tooltip
                key={key}
                title={theme.lightThemeName}
                onClick={() => {
                  selectTheme(theme.lightThemeName);
                }}
              >
                <Stack
                  height={'40px'}
                  width={'40px'}
                  borderRadius={'5px'}
                  bgcolor={(theme.lightTheme.palette?.primary as SimplePaletteColorOptions).main}
                />
              </Tooltip>
            ))}
          </Stack>
        </Stack>
      </Collapse>
    </Stack>
  );
}
