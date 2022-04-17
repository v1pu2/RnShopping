import React from 'react';

import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return (
    <TextInput
      placeholder={props?.placeholder ? props?.placeholder : ''}
      placeholderTextColor="#747474"
      onChangeText={val => props.onChangeText(val)}
      keyboardType="phone-pad"
      style={styles.input}
      value={props.value}
      maxLength={props.length}
    />
  );
};

export default Input;
var styles = StyleSheet.create({
  input: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
