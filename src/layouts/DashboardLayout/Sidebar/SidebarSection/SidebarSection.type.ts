import { ISidebarItem } from '@/types/interfaces';
import { ReactNode } from 'react';

export type SidebarSectionProps = {
  label: string;
  icon: ReactNode;
  path: string;
  items?: ISidebarItem[];
};
