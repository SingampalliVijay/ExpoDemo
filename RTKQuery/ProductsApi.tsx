import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface dataType {
  "id": number,
  "title": string,
  "description": string,
  "price": number
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<dataType, void>({
      query: () => '/products'
    }
    )
  }),
})

export const { useGetAllProductsQuery } = productsApi