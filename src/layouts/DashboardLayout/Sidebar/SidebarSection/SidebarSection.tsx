import ExpandLessIcon from '@/assets/icons/expand_less.svg?react';
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
    <RootStyle
      onClick={onClick}
      spacing={isOpen ? 0.75 : 0}
      alignItems={{ xs: 'center', md: 'flex-start' }}
    >
      <StyledStack
        spacing={0.75}
        direction={'row'}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <Stack
          width={{ xs: undefined, md: hasItems ? '80%' : '100%' }}
          spacing={1}
          direction={'row'}
          alignItems={'center'}
        >
          <IconContainerStyle>{icon}</IconContainerStyle>
          <TypographyOverflow
            width={'74%'}
            fontWeight={600}
            title={t(label)}
            display={{ xs: 'none', md: 'block' }}
            fontSize={'0.9rem'}
            color={'primary.main'}
          >
            {t(label)}
          </TypographyOverflow>
        </Stack>
        {hasItems && (
          <IconContainerStyle
            width={'20%'}
            display={{ xs: 'none', md: 'flex' }}
            alignItems={'flex-end'}
          >
            <ExpandLessIcon
              style={{
                transform: isOpen ? 'rotate(0)' : 'rotate(180deg)',
                transition: '.2s linear',
              }}
            />
          </IconContainerStyle>
        )}
      </StyledStack>
      {hasItems && (
        <Collapse in={isOpen} sx={{ width: '100%' }}>
          <Stack
            width={'100%'}
            spacing={1}
            paddingInline={'4px'}
            onClick={(e) => e.stopPropagation()}
          >
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
