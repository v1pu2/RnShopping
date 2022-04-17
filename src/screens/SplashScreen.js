import React from 'react';

import {Text, View,Dimensions,Image} from 'react-native';
// import SplashSvg from '../assets/svgs/SplashSvg';

const device_height=Dimensions.get('window').height;
const device_width=Dimensions.get('window').width;

const SplashScreen = () => {
  return (
    <View style={{flex:1}}>
      <Image source={require('../assets/images/SplashImage.png')} style={{height:device_height,width:device_width}}/>

    </View>
  );
};

export default SplashScreen;