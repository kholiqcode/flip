import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {Transactions} from '@store/transaction/types';

import {baseQuery} from '../baseQuery';

const reducerPath = 'transactionsApi';

export const transactionsApi = createApi({
  reducerPath,
  baseQuery: baseQuery,
  tagTypes: ['Transactions'],
  endpoints: builder => ({
    getTransactions: builder.query<Transactions, unknown>({
      query: () => ({
        url: `frontend-test`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetTransactionsQuery} = transactionsApi;
export const transactionsQueryReducer = {
  [reducerPath]: transactionsApi.reducer,
};
