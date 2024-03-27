import { ColorsConfig } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(() => ({
  position: 'relative',
}));

export const CircleStyle = styled(Stack)(() => ({
  borderRadius: 100,
  backgroundColor: ColorsConfig.grey?.[50],
  position: 'absolute',
}));
