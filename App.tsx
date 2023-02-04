import React from 'react';
import {LogBox} from 'react-native';

import {Navigator} from '@navigation';
import {persistor, store} from '@store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
