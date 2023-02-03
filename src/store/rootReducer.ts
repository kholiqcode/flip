import AsyncStorage from '@react-native-async-storage/async-storage';
import {transactionsQueryReducer} from '@services';
import {transactionReducer} from '@store/transaction';
import {combineReducers} from 'redux';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [],
  whitelist: [],
};

const rootReducer = combineReducers({
  ...transactionReducer,
  ...transactionsQueryReducer,
});

export {rootPersistConfig, rootReducer};
