import { Paginator } from '@/types/interfaces';

export const arrayToParams = (key: string, array: Array<number | string>) => {
  let string = '';
  array.forEach((value) => {
    string += `${key}[]=${value}&`;
  });
  return string;
};

export const paginatorToApiPagination = (paginator: Paginator | Partial<Paginator> | undefined) => {
  if (paginator) {
    return {
      page: paginator.page,
      limit: paginator.rowsPerPage,
      order_by: paginator.orderBy,
      direction: paginator.order,
      group_by: paginator.groupBy,
      keyword: paginator.searchText,
    };
  }
  return {};
};
