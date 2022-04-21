import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Verify from '../screens/Verify';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{title: ''}}
      />
      <Stack.Screen name="Login" component={Login} options={{title: ''}} />
      <Stack.Screen name="Verify" component={Verify} options={{title: ''}} />
    </Stack.Navigator>
  );
};
