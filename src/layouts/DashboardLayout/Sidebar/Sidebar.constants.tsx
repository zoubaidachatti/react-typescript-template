import ChartIcon from '@/assets/icons/area_chart.svg?react';
import RangeIcon from '@/assets/icons/arrow_range.svg?react';
import PagesIcon from '@/assets/icons/auto_stories.svg?react';
import BadgeIcon from '@/assets/icons/badge.svg?react';
import ModalIcon from '@/assets/icons/breaking_news.svg?react';
import ErrorIcon from '@/assets/icons/broken_image.svg?react';
import CardIcon from '@/assets/icons/cards.svg?react';
import CheckIcon from '@/assets/icons/check_box.svg?react';
import SelectIcon from '@/assets/icons/checklist.svg?react';
import FormIcon from '@/assets/icons/description.svg?react';
import RegisterIcon from '@/assets/icons/edit_square.svg?react';
import SubmitIcon from '@/assets/icons/exit_to_app.svg?react';
import InputGroupIcon from '@/assets/icons/how_to_reg.svg?react';
import AlertIcon from '@/assets/icons/info.svg?react';
import LoginIcon from '@/assets/icons/login.svg?react';
import NotificationIcon from '@/assets/icons/notifications.svg?react';
import PuzzleIcon from '@/assets/icons/puzzle.svg?react';
import ButtonIcon from '@/assets/icons/rectangle.svg?react';
import PaginationIcon from '@/assets/icons/settings_ethernet.svg?react';
import DashboardIcon from '@/assets/icons/team_dashboard.svg?react';
import ToastIcon from '@/assets/icons/toast.svg?react';
import TypographyIcon from '@/assets/icons/typography.svg?react';
import CarouselIcon from '@/assets/icons/view_carousel.svg?react';
import ColorsIcon from '@/assets/icons/water_drop.svg?react';
import { ISidebarGroup } from '@/types/interfaces';

// TODO - create const config for paths

const theme = [
  {
    label: 'dashboard.colors',
    path: '/dashboard/colors',
    icon: <ColorsIcon />,
  },
  {
    label: 'dashboard.typographies',
    path: '/dashboard/typographies',
    icon: <TypographyIcon />,
  },
];

const components = [
  {
    label: 'dashboard.base',
    path: '/dashboard/base',
    icon: <PuzzleIcon />,
    items: [
      // TODO - add more
      { label: 'dashboard.cards', path: '/dashboard/base/cards', icon: <CardIcon /> },
      { label: 'dashboard.carousel', path: '/dashboard/base/carousel', icon: <CarouselIcon /> },
      {
        label: 'dashboard.pagination',
        path: '/dashboard/base/pagination',
        icon: <PaginationIcon />,
      },
    ],
  },
  {
    label: 'dashboard.buttons',
    path: '/dashboard/buttons',
    icon: <ButtonIcon />,
  },
  {
    label: 'dashboard.charts',
    path: '/dashboard/charts',
    icon: <ChartIcon />,
  },
  {
    label: 'dashboard.forms',
    path: '/dashboard/forms',
    icon: <FormIcon />,
    items: [
      {
        label: 'dashboard.form_control',
        path: '/dashboard/forms/form_control',
        icon: <FormIcon />,
      },
      { label: 'dashboard.select', path: '/dashboard/forms/select', icon: <SelectIcon /> },
      {
        label: 'dashboard.check_and_radio',
        path: '/dashboard/forms/check_and_radio',
        icon: <CheckIcon />,
      },
      { label: 'dashboard.range', path: '/dashboard/forms/range', icon: <RangeIcon /> },
      {
        label: 'dashboard.input_group',
        path: '/dashboard/forms/input_group',
        icon: <InputGroupIcon />,
      },
      { label: 'dashboard.validation', path: '/dashboard/forms/validation', icon: <SubmitIcon /> },
    ],
  },
  {
    label: 'dashboard.notifications',
    path: '/dashboard/notifications',
    icon: <NotificationIcon />,
    items: [
      {
        label: 'dashboard.alerts',
        path: '/dashboard/notifications/alerts',
        icon: <AlertIcon />,
      },
      {
        label: 'dashboard.badge',
        path: '/dashboard/notifications/badge',
        icon: <BadgeIcon />,
      },
      {
        label: 'dashboard.modals',
        path: '/dashboard/notifications/modals',
        icon: <ModalIcon />,
      },
      {
        label: 'dashboard.toasts',
        path: '/dashboard/notifications/toasts',
        icon: <ToastIcon />,
      },
    ],
  },
];

const extras = [
  {
    label: 'dashboard.pages',
    path: '/dashboard/pages',
    icon: <PagesIcon />,
    items: [
      { label: 'auth.login', path: '/login', icon: <LoginIcon /> },
      { label: 'auth.register', path: '/register', icon: <RegisterIcon /> },
      { label: 'error.error404', path: '/not_found', icon: <ErrorIcon /> },
      { label: 'error.error500', path: '/internal_server_error', icon: <ErrorIcon /> },
    ],
  },
];

export const SidebarGroups: ISidebarGroup[] = [
  {
    sections: [
      {
        label: 'dashboard.dashboard',
        path: '/dashboard/home',
        icon: <DashboardIcon />,
      },
    ],
  },
  { label: 'dashboard.theme', sections: theme },
  { label: 'dashboard.components', sections: components },
  { label: 'dashboard.extra', sections: extras },
];
