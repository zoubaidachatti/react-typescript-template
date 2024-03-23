import { RouteIdEnum } from '@/config/enums';
import DashboardLayout from '@/layouts/DashboardLayout/DashboardLayout';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import ProductsPage from '@/pages/ProductsPage/ProductsPage';
import ViewProductPage from '@/pages/ViewProductPage/ViewProductPage';
import { Navigate, RouteObject } from 'react-router-dom';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    element: <Navigate to={RouteIdEnum.Dashboard} />,
  },
  {
    path: RouteIdEnum.Dashboard,
    element: <DashboardLayout />,
    children: [
      {
        path: RouteIdEnum.Root,
        element: <Navigate to={RouteIdEnum.Home} />,
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
        path: RouteIdEnum.Product,
        element: <ViewProductPage />,
      },
    ],
  },
  {
    path: RouteIdEnum.Any,
    element: <NotFoundPage />,
  },
];
