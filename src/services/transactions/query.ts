import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from '@services/baseQuery';
import {Transaction, Transactions} from '@store/transaction/types';

const reducerPath = 'transactionsApi';

export const transactionsApi = createApi({
  reducerPath,
  baseQuery: baseQuery,
  tagTypes: ['Transactions'],
  endpoints: builder => ({
    getTransactions: builder.query<Transaction[], unknown>({
      query: () => ({
        url: `frontend-test`,
        method: 'GET',
      }),
      transformResponse: (response: Transactions) => {
        return Object.keys(response).map(value => response[value]);
      },
      providesTags: ['Transactions'],
    }),
  }),
});

export const {useGetTransactionsQuery} = transactionsApi;
export const transactionsQueryReducer = {
  [reducerPath]: transactionsApi.reducer,
};
