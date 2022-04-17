import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import SplashScreen from '../screens/SplashScreen';


const Navigator = props => {
    const [visible, setVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    setTimeout(() => {
      setVisible(true);
    }, 3000);
 
  return (
    <NavigationContainer>
   { !visible ? <SplashScreen /> : <AuthStack />}
      {/* {!isLoggedIn ? <AppStack /> : <AuthStack />} */}
    </NavigationContainer>
  );
};
export default Navigator;