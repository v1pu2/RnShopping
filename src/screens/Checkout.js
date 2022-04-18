import React, {useEffect} from 'react';

import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import CartCheckout from '../components/CardCheckout';
import {removeItem} from '../redux/actions/ActionCart';

const device_width = Dimensions.get('window').width;

const Checkout = () => {
  const cartData = useSelector(state => state?.CartReducer?.cart);
  const dispatch = useDispatch();
  // console.log('cartData', cartData);
  const onMinusClick = data => {
    console.log('minus click', data);
  };
  const onPlusClick = data => {
    console.log('plus click', data);
  };
  const onRemove = data => {
    console.log('remove click', data?.item?.id);
    dispatch(removeItem(data?.item?.id))
  };
  const renderItem = data => {
    // console.log('in render', data);
    return (
      <CartCheckout
        cartItem={data}
        onMinus={() => onMinusClick(data)}
        onPlus={() => onPlusClick(data)}
        onCross={() => onRemove(data)}
      />
    );
  };
  return (
    <View style={styles.root}>
      <Text style={styles.txtHeader}>Checkout</Text>
      <ScrollView>
        <FlatList
          data={cartData}
          renderItem={item => renderItem(item?.item)}
          keyExtractor={item => item?.id}
        />
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.grayView} />
        <View style={styles.rowView}>
          <Text>SubTotal</Text>
          <Text>SubTotal</Text>
        </View>
        <View style={styles.rowView}>
          <Text>Discount</Text>
          <Text>5%</Text>
        </View>
        <View style={styles.rowView}>
          <Text>Shipping</Text>
          <Text>$10.00</Text>
        </View>
        <View style={styles.grayView} />
        <View style={styles.rowView}>
          <Text>Total</Text>
          <Text>Total</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',marginVertical:10}}>
          <Text>Bottom</Text>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  txtHeader: {
    fontSize: 30,
  },
  bottomView: {
    position: 'absolute',
    bottom: 40,
    width: device_width,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical:5
  },
  grayView: {
    borderColor: '#979797',
    borderWidth: 0.5,
    width: device_width-30,
    margin: 10,
  },
});
