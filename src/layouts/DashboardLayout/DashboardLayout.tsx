import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { OutletMargin } from './DashboardLayout.constants';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

export default function DashboardLayout() {
  return (
    <Stack direction="row" alignItems={'flex-start'} width={'100vw'} position={'relative'}>
      <Sidebar />
      <Stack height={'100%'} width={'100%'} direction={'column'}>
        <Navbar />
        <Stack
          height={'1000px'}
          marginTop={OutletMargin.top}
          marginLeft={OutletMargin.left}
          width={{
            xs: `calc(100% - ${OutletMargin.left.xs})`,
            md: `calc(100% - ${OutletMargin.left.md})`,
          }}
          padding={'0 1.5% 14px 1.5%'}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
}
