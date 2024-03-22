import { RouteIdEnum } from '@/config/enums';
import DashboardLayout from '@/layouts/DashboardLayout';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import ProductsPage from '@/pages/ProductsPage/ProductsPage';
import ViewProductPage from '@/pages/ViewProductPage/ViewProductPage';
import { RouteObject } from 'react-router-dom';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    // TODO : create view
    element: <>🐈 React TypeScript Starter Template</>,
  },
  {
    path: RouteIdEnum.Home,
    // TODO : create view
    element: <>🏠</>,
  },
  {
    path: RouteIdEnum.Products,
    element: <ProductsPage />,
  },

  {
    path: RouteIdEnum.Dashboard,
    element: <DashboardLayout />,
  },
  {
    path: RouteIdEnum.Product,
    element: <ViewProductPage />,
  },
  {
    path: RouteIdEnum.Any,
    element: <NotFoundPage />,
  },
];
