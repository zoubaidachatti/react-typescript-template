import { OutletMargin } from '@/layouts/DashboardLayout/DashboardLayout.constants';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SidebarGroups } from './Sidebar.constants';
import { RootStyle } from './Sidebar.style';
import SidebarSection from './SidebarSection/SidebarSection';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <RootStyle minWidth={OutletMargin.left} maxWidth={OutletMargin.left}>
      <Stack height={'100%'}>
        <Stack spacing={2} width={{ xs: 56, md: 206 }}>
          {SidebarGroups.map(({ title, sections }, groupIndex) => (
            <Stack key={`group${groupIndex}`} spacing={1} alignItems={'start'}>
              {title && (
                <Typography fontWeight={600} variant="body2" display={{ xs: 'none', md: 'block' }}>
                  {t(title)}
                </Typography>
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
      </Stack>
    </RootStyle>
  );
};

export default Sidebar;
