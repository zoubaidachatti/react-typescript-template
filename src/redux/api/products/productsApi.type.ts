import { Paginator } from '@/types/interfaces';

export type GetAllProductsParams = { paginator: Partial<Paginator> };

export type CreateProduct = {
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
};
