export type OrderType = 'asc' | 'desc';

export interface Paginator {
  orderBy: string;
  order: OrderType;
  rowsPerPage: number;
  page: number;
  searchText: string;
  groupBy?: string;
  searchBy?: string;
  paranoid?: boolean;
  filterBy?: string;
}
