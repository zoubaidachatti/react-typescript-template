import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { IconContainerStyle } from '../SidebarSection.style';
import { RootStyle } from './SectionItems.style';

const SectionItems = ({ label, path, icon }: { path: string; label: string; icon: ReactNode }) => {
  const { t } = useTranslation();

  const onClick = () => {
    // TODO - navigate to path
  };

  return (
    <RootStyle onClick={onClick} direction={'row'} spacing={1} alignItems={'center'}>
      <IconContainerStyle>{icon}</IconContainerStyle>
      <Typography color={'primary.main'} fontSize={'0.85rem'}>
        {t(label)}
      </Typography>
    </RootStyle>
  );
};

export default SectionItems;
