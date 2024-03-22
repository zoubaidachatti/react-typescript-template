import { Box, styled } from '@mui/material';

export const SvgContainer = styled(Box)(({ theme }) => ({
  svg: {
    fill: theme.palette.grey[800],
    cursor: 'pointer',
  },
}));
