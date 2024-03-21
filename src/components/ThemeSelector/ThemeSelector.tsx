import { AppTheme, themes } from '@/components/ThemeSelector/ThemeSelector.constants';
import { Collapse, Stack, Tooltip } from '@mui/material';
import { useState } from 'react';
import ThemeIcon from '@/assets/icons/theme.svg?react';

export default function ThemeSelector() {
  const [clickedTheme, setClickedTheme] = useState<AppTheme>();
  const [showModePicker, setShowModePicker] = useState<boolean>(false);
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);
  return (
    <>
      <Stack direction="row" alignItems={'center'} marginLeft={'auto'} spacing={1}>
        {!toggleTheme && <ThemeIcon onClick={() => setToggleTheme(true)}></ThemeIcon>}
        {toggleTheme && (
          <Stack direction={'column'} spacing={1}>
            <Stack direction="row" spacing={1}>
              {themes.map((theme, key) => (
                <Tooltip
                  key={key}
                  title={theme.name}
                  onClick={() => {
                    if (showModePicker) {
                      setShowModePicker(false);
                    } else {
                      setShowModePicker(true);
                    }
                    setClickedTheme(theme);
                  }}
                >
                  <Stack
                    height={'40px'}
                    width={'40px'}
                    borderRadius={'5px'}
                    bgcolor={theme.lightTheme.palette?.primary?.main}
                  ></Stack>
                </Tooltip>
              ))}
            </Stack>
            <Collapse in={showModePicker}>
              <Stack direction="row" spacing={1}>
                <Stack
                  height={'40px'}
                  width={'135px'}
                  borderRadius={'5px'}
                  bgcolor={clickedTheme?.lightTheme.palette?.primary?.light}
                ></Stack>
                <Stack
                  height={'40px'}
                  width={'135px'}
                  borderRadius={'5px'}
                  bgcolor={clickedTheme?.lightTheme.palette?.primary?.dark}
                ></Stack>
              </Stack>
            </Collapse>
          </Stack>
        )}
      </Stack>
    </>
  );
}
