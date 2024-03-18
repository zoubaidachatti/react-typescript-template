import { RouteObject } from 'react-router-dom';
import { RouteIdEnum } from '../config/enums/routes.enum';

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
