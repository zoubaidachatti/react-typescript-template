import { CONFIG } from '@/config/config';
// @ts-ignore
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQueryConfig: FetchBaseQueryArgs = {
  baseUrl: CONFIG.API_ENDPOINT,
  prepareHeaders: (headers: Headers) => {
    headers.set('apiKey', CONFIG.API_KEY);
    // TODO : Add other common header if needed
    return headers;
  },
};

export const baseQuery = fetchBaseQuery(baseQueryConfig);
