/* eslint-disable @typescript-eslint/no-var-requires */
import {configureStore, PreloadedState} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {rootPersistConfig, rootReducer} from '@store/rootReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const createDebugger = require('redux-flipper').default;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: getDefaultMiddleware =>
      __DEV__ && !process.env.JEST_WORKER_ID
        ? getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
              ],
            },
          })
            .concat(logger)
            .concat(createDebugger())
        : getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
              ],
            },
          }),
    preloadedState,
  });
};

const store = setupStore();

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

setupListeners(store.dispatch);

const useReduxDispatch = () => useDispatch<AppDispatch>();
const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  persistor,
  store,
  useDispatch,
  useReduxDispatch,
  useReduxSelector,
  useSelector,
};

export type {AppStore, RootState};
