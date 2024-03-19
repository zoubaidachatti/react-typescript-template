import { useGetProductByIdQuery } from '@/redux/api/products/productsApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';

const ProductView = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useGetProductByIdQuery(id ? { id } : skipToken);

  // TODO : Add loading state and error handling to the UI
  if (isLoading) return <>Loading...</>;

  if (error) return <>Error!</>;

  return <>Product🦄 </>;
};

export default ProductView;
