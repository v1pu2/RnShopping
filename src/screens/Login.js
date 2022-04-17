import React, {useState} from 'react';

import {Text, View, StyleSheet, TextInput} from 'react-native';
import Input from '../components/Input';
import LinearButton from '../components/LinearButton';

const Login = props => {
  const [phone, setPhone] = useState('');

  const onChange = val => {
    console.log('on change');
    setPhone(val);
  };

  const onLogin = () => {
    console.log('login click');
    props.navigation.navigate('Verify');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.txtLogin}>Login</Text>
      <Text style={styles.txtPhone}>Phone</Text>
      <Input value={phone} onChangeText={() => onChange()} length={10} />
      <LinearButton title="Login" onPress={() => onLogin()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 70,
  },

  txtLogin: {
    color: '#323232',
    fontSize: 30,
  },
  txtPhone: {
    color: '#A6A6A6',
    fontSize: 14,
    marginTop: 30,
  },
});
