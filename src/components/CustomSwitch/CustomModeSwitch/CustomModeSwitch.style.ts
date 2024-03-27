import { ColorsConfig } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  borderRadius: 42,
  width: 36,
  height: 20,
  cursor: 'pointer',
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  overflow: 'hidden',
}));

export const StyledStack = styled(Stack)(() => ({ transform }: { transform: string }) => ({
  transform: transform,
  transition: '300ms all linear',
}));

export const CircleStyle = styled(Stack)(({ theme }) => ({ isdark }: { isdark: string }) => ({
  position: 'absolute',
  width: 16,
  height: 16,
  borderRadius: '50%',
  top: 2,
  left: isdark === `${true}` ? 18 : 2,
  boxShadow:
    isdark === `${true}`
      ? `inset -5px -2px 0px 0px ${ColorsConfig.grey?.[50]}`
      : `inset -20px 0px 0px 0px ${theme.palette.warning.light}`,
  transition: 'all 300ms linear',
}));
