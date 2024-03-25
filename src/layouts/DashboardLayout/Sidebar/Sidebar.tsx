import HomeIcon from '@/assets/icons/home.svg?react';
import CustomDivider from '@/components/CustomDivider/CustomDivider';
import { TypographyOverflow } from '@/components/Typography/TypographyOverflow/TypographyOverflow';
import { OutletMargin } from '@/layouts/DashboardLayout/DashboardLayout.constants';
import { Stack, Typography, alpha, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SidebarGroups } from './Sidebar.constants';
import { RootStyle, StyledBox } from './Sidebar.style';
import SidebarSection from './SidebarSection/SidebarSection';
import UserInfoBox from './UserInfoBox/UserInfoBox';

const primaryMain = 'primary.main';

const Sidebar = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <RootStyle minWidth={OutletMargin.left} maxWidth={OutletMargin.left} overflow={'hidden'}>
      <Stack height={'100%'} spacing={3} justifyContent={'space-between'}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <StyledBox
            alignItems={'center'}
            justifyContent={'center'}
            width={56}
            height={56}
            minWidth={56}
            minHeight={56}
          >
            <HomeIcon />
          </StyledBox>
          <TypographyOverflow
            fontWeight={600}
            fontSize={'1.2rem'}
            display={{ xs: 'none', md: 'block' }}
            color={primaryMain}
          >
            {t('dashboard.app_name')}
          </TypographyOverflow>
        </Stack>
        <Stack spacing={2} width={{ xs: 56, md: 206 }} sx={{ overflowY: 'auto' }}>
          {SidebarGroups.map(({ title, sections }, groupIndex) => (
            <Stack key={`group${groupIndex}`} spacing={1} alignItems={'start'}>
              {title && (
                <>
                  <Typography
                    color={primaryMain}
                    fontWeight={600}
                    variant="body2"
                    display={{ xs: 'none', md: 'block' }}
                  >
                    {t(title)}
                  </Typography>
                  <CustomDivider
                    orientation="horizontal"
                    color={alpha(theme.palette.primary.main, 0.2)}
                    width="2px"
                  />
                </>
              )}
              <Stack width="100%" spacing={1}>
                {sections.map((groupSection, groupSectionIndex) => (
                  <SidebarSection
                    label={groupSection.name}
                    icon={groupSection.icon}
                    items={groupSection.items}
                    path={groupSection.path}
                    key={`group${groupIndex}${groupSectionIndex}`}
                  />
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
        <UserInfoBox />
      </Stack>
    </RootStyle>
  );
};

export default Sidebar;
