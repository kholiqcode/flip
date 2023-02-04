import {Transaction} from '@store/transaction/types';

export type RootStackParamList = {
  TransactionListScreen: undefined;
  TransactionDetailScreen: {data: Transaction};
};
