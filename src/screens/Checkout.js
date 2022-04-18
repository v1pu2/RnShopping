import React, {useEffect} from 'react';

import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem} from '../redux/actions/ActionCart';

const Checkout = () => {
  const cartData = useSelector(state => state?.CartReducer?.cart);
  const dispatch = useDispatch();
  console.log('cartData', cartData);


  return (
    <View>
      <Text>this is app checkoiut</Text>
    </View>
  );
};

export default Checkout;
