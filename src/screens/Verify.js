import React, {useState, useEffect} from 'react';

import {Text, View, StyleSheet, TextInput} from 'react-native';
import Input from '../components/Input';
import LinearButton from '../components/LinearButton';
import {useSelector, useDispatch} from 'react-redux';
import {verifyOtp} from '../redux/actions/ActionAuth';

const Verify = props => {
  const [otp, setOtp] = useState('');
  const getLoginData = useSelector(state => state?.AuthReducer?.loginData);
  const dispatch = useDispatch();

  const onChange = val => {
    setOtp(val);
  };
  const onVerify = () => {
    let isVerify = otp == getLoginData?.otp;
    if (isVerify) {
      dispatch(verifyOtp());
    }
  };
  useEffect(() => {
    setOtp(getLoginData?.otp.toString());
  }, [getLoginData]);
  return (
    <View style={styles.root}>
      <Text style={styles.txtLogin}>Verify</Text>
      <Text style={styles.txtPhone}>OTP</Text>
      <Input
        value={otp}
        onChangeText={val => onChange(val)}
        length={4}
        placeholder="Enter OTP"
      />
      <LinearButton title="Verify" onPress={() => onVerify()} />
    </View>
  );
};

export default Verify;
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
