import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';




const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BottomTabLayout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.color2,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};