import {transactionsApi} from './transactions/query';

export const combinedMiddleware = [transactionsApi.middleware];

export * from '@services/transactions';
