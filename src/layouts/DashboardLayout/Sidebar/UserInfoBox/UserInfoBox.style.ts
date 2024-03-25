import { Stack, styled } from '@mui/material';

export const SVGBox = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  top: 10,
  right: 4,
  position: 'absolute',
  svg: {
    fill: theme.palette.primary.main,
    width: '20px !important',
    height: '20px !important',
  },
}));
