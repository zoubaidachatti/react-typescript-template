import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  cusrsor: 'pointer',
  padding: '10px 5px',
  borderRadius: 7,
  width: '100%',
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.2),
  },
  transition: 'all .2s ease-in-out',
}));
