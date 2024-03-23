import { Box, styled } from '@mui/material';

export const VerticalDivider = styled(Box)(
  ({ theme }) =>
    ({ color, width }: { color?: string; width?: string }) => ({
      height: '100%',
      width: width ?? '2px',
      backgroundColor: color ?? theme.palette.grey[500],
      borderRadius: 7,
    }),
);
export const HorizontalDivider = styled(Box)(
  ({ theme }) =>
    ({ color, width }: { color?: string; width?: string }) => ({
      height: width ?? '2px',
      width: '100%',
      backgroundColor: color ?? theme.palette.grey[500],
      borderRadius: 7,
    }),
);
