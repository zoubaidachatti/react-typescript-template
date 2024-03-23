import { Box, styled } from '@mui/material';

export const SVGContainer = styled(Box)(({ theme }) => ({
  svg: {
    fill: theme.palette.grey[800],
    cursor: 'pointer',
    '&:hover': {
      fill: theme.palette.primary.main,
    },
  },
}));
