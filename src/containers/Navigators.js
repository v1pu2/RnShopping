import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';
import SplashScreen from '../screens/SplashScreen';
import {useSelector} from 'react-redux';

const Navigator = props => {
  const [visible, setVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const checkVerification = useSelector(state => state?.AuthReducer?.isVerified);

  setTimeout(() => {
    setVisible(true);
  }, 3000);

  useEffect(() => {
    setIsVerified(checkVerification);
  }, [checkVerification]);
  return (
    <NavigationContainer>
      {!visible ? <SplashScreen /> : !isVerified ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};
export default Navigator;
