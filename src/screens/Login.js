import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.root}>
      <Text style={{color:'black'}}>this is app login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
});

export default Login;
