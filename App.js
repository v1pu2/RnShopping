import React from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/containers/Navigators';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <Navigator />
     </SafeAreaProvider>
  );
};

export default App;
