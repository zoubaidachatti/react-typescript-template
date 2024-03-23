import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  width: '100%',
  padding: '10px 5px',
  borderRadius: '7px',
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  width: '100%',
  '&:hover': {
    color: theme.palette.primary.main,
    svg: {
      fill: theme.palette.primary.main,
    },
  },
}));

export const IconContainerStyle = styled(Stack)(({ theme }) => ({
  svg: {
    fill: theme.palette.grey[800],
  },
}));
