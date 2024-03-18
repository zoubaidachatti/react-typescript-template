import { useRoutes } from 'react-router-dom';
import { RoutesConfig } from './routes.config';

export default function Router() {
  return useRoutes(RoutesConfig);
}
