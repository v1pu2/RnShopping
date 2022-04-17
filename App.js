import React from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/containers/Navigators';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';

import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" backgroundColor={'black'} />
          <Navigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
