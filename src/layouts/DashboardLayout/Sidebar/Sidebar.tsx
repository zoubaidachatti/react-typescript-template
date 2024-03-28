import HomeIcon from '@/assets/icons/home.svg?react';
import CustomDivider from '@/components/CustomDivider/CustomDivider';
import { TypographyOverflow } from '@/components/Typography/TypographyOverflow/TypographyOverflow';
import { OutletMargin } from '@/layouts/DashboardLayout/DashboardLayout.constants';
import { Backdrop, Stack, Typography, alpha, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SidebarGroups } from './Sidebar.constants';
import { RootStyle, StyledBox, StyledSidebarGroup } from './Sidebar.style';
import SidebarSection from './SidebarSection/SidebarSection';
import UserInfoBox from './UserInfoBox/UserInfoBox';

const primaryMain = 'primary.main';

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      {isOpen && (
        <Backdrop
          sx={{ zIndex: 1001, visibility: { md: 'hidden', xs: isOpen ? 'visible' : 'hidden' } }}
          open={isOpen}
          onClick={onClose}
        />
      )}
      <RootStyle
        visibility={{
          md: 'visible',
          xs: isOpen ? 'visible' : 'hidden',
        }}
        minWidth={OutletMargin.left.md}
        maxWidth={OutletMargin.left.md}
        overflow={'hidden'}
        zIndex={{
          md: 1002,
          xs: isOpen ? 1002 : 0,
        }}
      >
        <Stack height={'100%'} spacing={1.5} justifyContent={'space-between'}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={1}
            width={'100%'}
            padding={'14px 12px'}
          >
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
            <TypographyOverflow fontWeight={600} fontSize={'1.2rem'} color={primaryMain}>
              {t('dashboard.app_name')}
            </TypographyOverflow>
          </Stack>
          <StyledSidebarGroup spacing={2}>
            {SidebarGroups.map(({ title, sections }, groupIndex) => (
              <Stack key={`group${groupIndex}`} spacing={1} alignItems={'start'}>
                {title && (
                  <>
                    <Typography color={primaryMain} fontWeight={600} variant="body2">
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
          </StyledSidebarGroup>
          <Stack padding={'14px 12px'}>
            <UserInfoBox />
          </Stack>
        </Stack>
      </RootStyle>
    </>
  );
};

export default Sidebar;
