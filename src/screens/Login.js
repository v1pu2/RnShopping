import React, {useState} from 'react';

import {Text, View, StyleSheet, TextInput} from 'react-native';
import Input from '../components/Input';
import LinearButton from '../components/LinearButton';
import {useDispatch} from 'react-redux';
import {logIn} from '../redux/actions/ActionAuth';
// import SendSMS from 'react-native-sms';

const Login = props => {
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const onChange = val => {
    setPhone(val);
  };

  // const callSendSms = val => {
  //   SendSMS.send(
  //     {
  //       body: val,
  //       recipients: '+91' + phone,
  //       successTypes: ['sent', 'queued'],
  //       allowAndroidSendWithoutReadPermission: true,
  //     },
  //     (completed, cancelled, error) => {
  //       console.log(
  //         'SMS Callback: completed: ' +
  //           completed +
  //           ' cancelled: ' +
  //           cancelled +
  //           'error: ' +
  //           error,
  //       );
  //     },
  //   );
  // };
  const onLogin = () => {
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log('login click', val);
    const otpObj = {otp: val};
    console.log(otpObj);
    dispatch(logIn(otpObj));
    // callSendSms(val);
    props.navigation.navigate('Verify');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.txtLogin}>Login</Text>
      <Text style={styles.txtPhone}>Phone</Text>
      <Input value={phone} onChangeText={val => onChange(val)} length={10} />
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
