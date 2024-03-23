import { Typography, styled } from '@mui/material';

export const TypographyOverflow = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
