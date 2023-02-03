import React from 'react';
import {LogBox} from 'react-native';

import {Navigator} from '@navigation';
import {persistor, store} from '@store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
