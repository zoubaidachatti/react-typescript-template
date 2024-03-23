import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(() => ({
  height: '100vh',
  padding: '14px 12px',
  justifyContent: 'flex-end',
  position: 'fixed',
  top: 0,
  left: 0,
  overflowY: 'auto',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
}));
