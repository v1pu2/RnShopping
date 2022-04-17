import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Checkout from '../screens/Checkout';


const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
       
      />
    </Stack.Navigator>
  );
};