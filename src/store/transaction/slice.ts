export {};
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Transactions, TransactionState} from '@store/transaction/types';

const initialState: TransactionState = {
  transactions: {},
};

const reducerName = 'transaction';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setTransactions(
      state: TransactionState,
      action: PayloadAction<Transactions>,
    ) {
      state.transactions = action?.payload;
    },
  },
});

export const transactionReducer = {[reducerName]: slice.reducer};

export const {setTransactions} = slice.actions;
