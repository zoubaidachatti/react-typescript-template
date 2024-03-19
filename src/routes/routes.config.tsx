import { RouteIdEnum } from '@/config/enums';
import { RouteObject } from 'react-router-dom';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    // TODO
    element: <>🐈 React TypeScript Starter Template</>,
  },
  {
    path: RouteIdEnum.Home,
    // TODO
    element: <>🏠</>,
  },
];
