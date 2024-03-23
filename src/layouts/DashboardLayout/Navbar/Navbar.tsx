import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import { OutletMargin } from '@/layouts/DashboardLayout/DashboardLayout.constants';
import { Avatar, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarSrc } from './Navbar.constants';
import { generateTimeLabel } from './Navbar.helper';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      padding={'14px 1.5%'}
      position={'fixed'}
      top={0}
      right={0}
      width={{
        xs: `calc(100% - ${OutletMargin.left.xs})`,
        md: `calc(100% - ${OutletMargin.left.md})`,
      }}
    >
      <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} gap={2}>
        <Stack>
          <Typography variant="h2" fontSize={{ md: '1.5rem', xs: '1rem' }}>
            {t('dashboard.welcome_back', {
              // TODO - get from auth slice
              name: 'Zoubaida',
            })}
          </Typography>
          <Typography>{t(`dashboard.${generateTimeLabel()}`)}</Typography>
        </Stack>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={'0.5rem'}>
        <ThemeSelector />
        <Avatar
          sx={(theme) => ({ bgcolor: theme.palette.primary.main })}
          variant="rounded"
          src={AvatarSrc}
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;
