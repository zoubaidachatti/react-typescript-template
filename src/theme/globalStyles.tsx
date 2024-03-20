import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          caretColor: theme.palette.primary.main,
          WebkitTapHighlightColor: 'transparent',
        },
        '::selection': {
          color: theme.palette.common.white,
          background: theme.palette.primary.main,
        },
        '::-moz-selection': {
          color: theme.palette.common.white,
          background: theme.palette.primary.main,
        },
        '*::-webkit-scrollbar': {
          width: 6,
          height: 7,
        },
        ':hover::-webkit-scrollbar': {
          width: 6,
          height: 7,
          borderRadius: 4,
        },
        ':hover::-webkit-scrollbar-thumb': {
          borderRadius: '7px',
          background: theme.palette.primary.main,
        },
        ':hover::-webkit-scrollbar-thumb:vertical': {
          borderRadius: '10x',
          background: theme.palette.primary.main,
        },
        ':hover::-webkit-scrollbar-track': {
          backgroundColor: theme.palette.primary.light,
          borderRadius: '0px 0px 7px 7px',
        },
      }}
    />
  );
}
