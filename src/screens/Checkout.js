import React, {useEffect, useState} from 'react';

import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import CartCheckout from '../components/CardCheckout';
import {
  addQuantity,
  removeItem,
  subtractQuantity,
} from '../redux/actions/ActionCart';
import LinearButton from '../components/LinearButton';

const device_width = Dimensions.get('window').width;

const Checkout = props => {
  const cartData = useSelector(state => state?.CartReducer?.cart);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  // console.log('cartData', cartData);
  const onMinusClick = data => {
    if (data?.qty > 1) {
      dispatch(subtractQuantity(data?.item?.id));
    } else {
      dispatch(removeItem(data?.item?.id));
    }
  };
  const onPlusClick = data => {
    dispatch(addQuantity(data?.item?.id));
  };
  const onRemove = data => {
    dispatch(removeItem(data?.item?.id));
  };
  useEffect(() => {
    const disc = 5;
    const shipping = 10;
    var result = 0;
    var grand_total = 0;

    result = cartData.reduce(function (acc, obj) {
      return acc + obj?.item?.price * obj.qty;
    }, 0);
    result = Number(result).toFixed(2);
    grand_total = result - (result * disc) / 100 + shipping;
    grand_total = Number(grand_total).toFixed(2);

    setSubTotal(result);
    setTotal(grand_total);
  }, [cartData]);
  const renderItem = data => {
    return (
      <CartCheckout
        cartItem={data}
        onMinus={() => onMinusClick(data)}
        onPlus={() => onPlusClick(data)}
        onCross={() => onRemove(data)}
      />
    );
  };
  const backToHome = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.txtHeader}>Checkout</Text>

      <FlatList
        data={cartData}
        renderItem={item => renderItem(item?.item)}
        keyExtractor={item => item?.id}
      />

      <View style={styles.bottomView}>
        <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 20}}>
          <View style={styles.grayView} />
          <View style={styles.rowView}>
            <Text style={styles.txtSubTotal}>SubTotal</Text>
            <Text style={styles.totalVal}>${subTotal}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.txtSubTotal}>Discount</Text>
            <Text style={styles.totalVal}>5%</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.txtSubTotal}>Shipping</Text>
            <Text style={styles.totalVal}>$10.00</Text>
          </View>
          <View style={styles.grayView} />
          <View style={styles.rowView}>
            <Text style={styles.totalVal}>Total</Text>
            <Text style={styles.totalVal}>${total}</Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <LinearButton title="Back to Home" onPress={() => backToHome()} />
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
    backgroundColor: 'white',
    paddingBottom: 230,
  },
  txtHeader: {
    fontSize: 30,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: device_width,
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  grayView: {
    borderColor: '#979797',
    borderWidth: 0.5,
    width: device_width - 30,
    margin: 10,
  },
  txtSubTotal: {
    color: '#919191',
    fontSize: 16,
  },
  totalVal: {
    color: '#434343',
    fontSize: 16,
  },
});
