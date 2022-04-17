import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.root}>
      <Text style={{color:'black'}}>this is Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Welcome;
