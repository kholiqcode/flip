import {Transaction} from '@services/transactions/types';

export type RootStackParamList = {
  TransactionListScreen: undefined;
  TransactionDetailScreen: {data: Transaction};
};
