import { useGetAllProductsQuery } from '@/redux/api/products/productsApi';
import { useTranslation } from 'react-i18next';

const ProductsList = () => {
  const { t } = useTranslation();
  const { isLoading, data, error } = useGetAllProductsQuery({ paginator: { rowsPerPage: 10 } });

  // TODO : Add loading state and error handling to the UI
  if (isLoading) return <>{t('common.loading')}...</>;

  if (error) return <>{t('common.error')}!</>;

  // TODO : list products
  return <>Products list 🐼🐸🦄</>;
};

export default ProductsList;
