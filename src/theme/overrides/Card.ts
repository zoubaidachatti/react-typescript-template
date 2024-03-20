import { Theme } from '@mui/material';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          boxShadow: `0px 13px 45px ${theme.palette.grey[300]}`,
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  };
}
