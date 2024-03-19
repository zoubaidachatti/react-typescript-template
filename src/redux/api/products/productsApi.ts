import { ENDPOINTS } from '@/config/constants';
import { baseQuery } from '@/redux/api/BaseQueryConfig';
import { injectParams, paginatorToApiPagination } from '@/utils';
import { createApi } from '@reduxjs/toolkit/query/react';
import { CreateProduct, GetAllProductsParams } from './productsApi.type';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQuery,
  tagTypes: ['product', 'products'],
  endpoints: (builder) => ({
    // Get all products
    getAllProducts: builder.query({
      query: ({ paginator }: GetAllProductsParams) =>
        injectParams(ENDPOINTS.PRODUCTS, {
          ...paginatorToApiPagination(paginator),
        }),
      transformResponse: (response) => response,
      providesTags: ['products'],
    }),
    // Get  product by id
    getProductById: builder.query({
      query: ({ id }: { id: number | string }) => `${ENDPOINTS.PRODUCTS}/${id}`,
      transformResponse: (response) => response,
      providesTags: ['product'],
    }),
    //  Create a new product
    createProduct: builder.mutation({
      query: (body: CreateProduct) => ({
        url: ENDPOINTS.PRODUCTS,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useCreateProductMutation } =
  productsApi;
