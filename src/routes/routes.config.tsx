import { RouteIdEnum } from '@/config/enums/routes.enum';
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
