import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import { Box, Stack, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const StyledTestBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100px',
    height: '100px',
  }));

  return (
    <Stack direction="column">
      <Stack direction="row" alignItems={'center'} padding={'5px'}>
        <ThemeSelector />
      </Stack>
      <StyledTestBox />
      <Outlet />
    </Stack>
  );
}
