export {};
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TransactionState} from '@store/transaction/types';

const initialState: TransactionState = {
  transactions: null,
};

const reducerName = 'transaction';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setTransactions(state: TransactionState, action: PayloadAction<null>) {
      state.transactions = action?.payload;
    },
  },
});

export const transactionReducer = {[reducerName]: slice.reducer};

export const {setTransactions} = slice.actions;
