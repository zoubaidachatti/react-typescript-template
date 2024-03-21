import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <Stack direction="column">
      <Stack padding={'5px'}>
        <ThemeSelector></ThemeSelector>
      </Stack>
      <Outlet />
    </Stack>
  );
}
