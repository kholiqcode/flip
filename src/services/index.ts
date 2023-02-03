import {transactionsApi} from '@services/transactions/query';

export const combinedMiddleware = [transactionsApi.middleware];

export * from '@services/transactions';
