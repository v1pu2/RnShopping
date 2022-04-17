import React from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#6686ed', '#65abfb']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{props?.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearButton;
var styles = StyleSheet.create({
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
