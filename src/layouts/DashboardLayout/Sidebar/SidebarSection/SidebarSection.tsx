import ExpandLessIcon from '@/assets/icons/expand_less.svg?react';
import ExpandMoreIcon from '@/assets/icons/expand_more.svg?react';
import { TypographyOverflow } from '@/components/Typography/TypographyOverflow/TypographyOverflow';
import { Collapse, Stack } from '@mui/material';
import { isUndefined } from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionItems from './SectionItems/SectionItems';
import { IconContainerStyle, RootStyle, StyledStack } from './SidebarSection.style';
import { SidebarSectionProps } from './SidebarSection.type';

const SidebarSection = ({ label, icon, items }: SidebarSectionProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = !isUndefined(items);

  const onClick = () => {
    if (hasItems) {
      setIsOpen(!isOpen);
    } else {
      // TODO - navigate to path
    }
  };

  return (
    <RootStyle onClick={onClick} spacing={isOpen ? 0.75 : 0}>
      <StyledStack
        spacing={0.75}
        direction={'row'}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <Stack
          width={{ xs: undefined, md: hasItems ? '80%' : '100%' }}
          spacing={1}
          direction={'row'}
        >
          <IconContainerStyle>{icon}</IconContainerStyle>
          <TypographyOverflow
            width={'74%'}
            variant="h4"
            title={t(label)}
            display={{ xs: 'none', md: 'block' }}
          >
            {t(label)}
          </TypographyOverflow>
        </Stack>
        {hasItems && (
          <IconContainerStyle width={'20%'} display={{ xs: 'none', md: 'flex' }}>
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconContainerStyle>
        )}
      </StyledStack>
      {hasItems && (
        <Collapse in={isOpen}>
          <Stack spacing={1} paddingInline={'4px'} onClick={(e) => e.stopPropagation()}>
            {items.map((item, ind) => (
              <SectionItems
                key={item.name + ind}
                icon={item.icon}
                path={item.path}
                name={item.name}
              />
            ))}
          </Stack>
        </Collapse>
      )}
    </RootStyle>
  );
};

export default SidebarSection;
