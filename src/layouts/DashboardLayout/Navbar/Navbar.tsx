import MenuIcon from '@/assets/icons/menu.svg?react';
import { SVGContainer } from '@/components/SVGContainer/SVGContainer.style';
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import { OutletMargin } from '@/layouts/DashboardLayout/DashboardLayout.constants';
import { useAppSelector } from '@/redux/hooks';
import { Avatar, Stack } from '@mui/material';

const Navbar = ({ onClickMenu }: { onClickMenu: () => void }) => {
  const user = useAppSelector((state) => state.authReducer);

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      padding={'14px 1.5%'}
      position={'fixed'}
      top={0}
      right={0}
      width={{
        xs: '100%',
        md: `calc(100% - ${OutletMargin.left.md})`,
      }}
    >
      <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} gap={2}>
        <SVGContainer onClick={onClickMenu} display={{ xs: 'flex', md: 'none' }}>
          <MenuIcon />
        </SVGContainer>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={'0.5rem'}>
        <ThemeSelector />
        <Avatar
          sx={(theme) => ({ bgcolor: theme.palette.primary.main })}
          variant="rounded"
          src={user.photo}
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;
