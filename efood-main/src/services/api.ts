import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react'

import Cardapio from '../models/Cardapio'
import Checkout from '../models/Checkout'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder: any) => ({
    getCardapio: builder.query({
      query: () => `/restaurantes`
    }),
    getRestaurante: builder.query({
      query: (id: string) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation({
      query: (body: Checkout) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetCardapioQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api

export default api
