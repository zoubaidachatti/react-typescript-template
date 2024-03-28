import { Stack } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { OutletMargin } from './DashboardLayout.constants';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const onOpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const onCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <Stack direction="row" alignItems={'flex-start'} width={'100vw'} position={'relative'}>
      <Sidebar isOpen={isSidebarOpen} onClose={onCloseSidebar} />
      <Stack height={'100%'} width={'100%'} direction={'column'} zIndex={1000}>
        <Navbar onClickMenu={onOpenSidebar} />
        <Stack
          marginTop={OutletMargin.top}
          marginLeft={OutletMargin.left}
          width={{
            xs: '100%',
            md: `calc(100% - ${OutletMargin.left.md})`,
          }}
          padding={'0 1.5% 14px'}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
}
