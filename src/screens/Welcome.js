import React from 'react';

import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
import LinearButton from '../components/LinearButton';

// const device_height=Dimensions.get('window').height;
const device_width = Dimensions.get('window').width;
const Welcome = () => {
  return (
    <View style={styles.root}>
      <View style={styles.topView}>
        <Text style={styles.txtWelcome}>Welcome to Bolt</Text>
      </View>

      <View style={styles.imageView}>
        <Image
          source={require('../assets/images/Welcome.png')}
          style={{height: 200, width: device_width - 50}}
        />
      </View>
      <View style={styles.bottomView}>
        <LinearButton title="Login With Phone" />
        <Text style={styles.txtShop}>Shop With us</Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  txtWelcome: {
    color: '#707070',
    fontSize: 20,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtShop:{
    color: '#707070',
    fontSize: 16,
  }
});
