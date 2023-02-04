import AsyncStorage from '@react-native-async-storage/async-storage';
import {transactionsQueryReducer} from '@services';
import {combineReducers} from 'redux';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [],
  whitelist: [],
};

const rootReducer = combineReducers({
  ...transactionsQueryReducer,
});

export {rootPersistConfig, rootReducer};
