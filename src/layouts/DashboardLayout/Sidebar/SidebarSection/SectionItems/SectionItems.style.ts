import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  cusrsor: 'pointer',
  padding: '10px 5px',
  borderRadius: '7px',
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    p: {
      color: theme.palette.primary.main,
    },
    svg: {
      fill: theme.palette.primary.main,
    },
  },
}));
