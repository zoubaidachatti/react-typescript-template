import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  height: '100vh',
  padding: '14px 12px',
  justifyContent: 'flex-end',
  position: 'fixed',
  top: 0,
  left: 0,
  overflowY: 'auto',
  borderRadius: '0 7px 7px 0',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
}));

export const StyledBox = styled(Stack)(({ theme }) => ({
  borderRadius: 7,
  backgroundColor: alpha(theme.palette.primary.main, 0.2),

  svg: {
    fill: theme.palette.primary.main,
    width: 30,
    height: 30,
  },
}));
