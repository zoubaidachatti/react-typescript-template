import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  width: '100%',
  padding: '10px 5px',
  borderRadius: 7,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
  transition: 'background-color .2s ease-in-out',
}));

export const StyledStack = styled(Stack)(() => ({
  cursor: 'pointer',
  width: '100%',
}));

export const IconContainerStyle = styled(Stack)(({ theme }) => ({
  svg: {
    fill: theme.palette.primary.main,
    width: 17,
    height: 17,
  },
}));
