import { RouteIdEnum } from '@/config/enums';
import ProductsPage from '@/pages/ProductsPage/ProductsPage';
import ViewProductPage from '@/pages/ViewProductPage/ViewProductPage';
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
  {
    path: RouteIdEnum.Products,
    element: <ProductsPage />,
  },
  {
    path: RouteIdEnum.Product,
    element: <ViewProductPage />,
  },
];
