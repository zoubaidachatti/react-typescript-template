import { useGetProductByIdQuery } from '@/redux/api/products/productsApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ProductView = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isLoading, data, error } = useGetProductByIdQuery(id ? { id } : skipToken);

  // TODO : Add loading state and error handling to the UI
  if (isLoading) return <>{t('common.loading')}...</>;

  if (error) return <>{t('common.error')}!</>;

  // TODO : list product info
  return <>Product🦄 </>;
};

export default ProductView;
