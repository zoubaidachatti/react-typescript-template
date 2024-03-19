import { useGetAllProductsQuery } from '@/redux/api/products/productsApi';

const ProductsList = () => {
  const { isLoading, data, error } = useGetAllProductsQuery({ paginator: { rowsPerPage: 10 } });

  // TODO : Add loading state and error handling to the UI
  if (isLoading) return <>Loading...</>;

  if (error) return <>Error!</>;

  return <>Products list 🐼🐸🦄</>;
};

export default ProductsList;
