import React from 'react';

import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const device_width = Dimensions.get('window').width;

const CartCheckout = props => {
  const prod_img = props?.cartItem?.item?.img;
  return (
    <View style={styles.cardView}>
      <Image source={{uri: prod_img}} style={styles.img} />
      <View style={styles.rowView}>
        <View style={styles.contentView}>
          <Text style={styles.txtProduct}>
            {props?.cartItem?.item?.product}
          </Text>
          <Text style={styles.txtLogo}>{'logo'}</Text>
          <Text style={styles.txtPrice}>${props?.cartItem?.item?.price}</Text>
          <View style={styles.qtyView}>
            <Text style={styles.txtQty} onPress={props.onMinus}>
              -
            </Text>
            <Text style={styles.txtQty}>{props?.cartItem?.qty}</Text>
            <Text style={styles.txtQty} onPress={props.onPlus}>
              +
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.crossView} onPress={props.onCross}>
          <Text style={styles.txtCross}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCheckout;
const styles = StyleSheet.create({
  cardView: {
    width: device_width - 50,
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    shadowOpacity: 0.2,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  img: {height: 120, width: 120, margin: 10},
  contentView: {
    margin: 5,
    flex: 1,
  },
  txtProduct: {
    fontSize: 18,
    color: '#434343',
  },
  txtLogo: {
    color: '#919191',
    fontSize: 14,
    marginVertical: 5,
  },
  crossView: {justifyContent: 'flex-start', padding: 5},
  txtCross: {paddingHorizontal: 5, fontSize: 18, alignSelf: 'flex-end'},
  txtPrice: {
    color: '#374ABE',
    fontSize: 16,
  },
  qtyView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    backgroundColor: '#F6F6F6',
  },
  rowView: {flex: 1, flexDirection: 'row'},
  txtQty: {
    paddingHorizontal: 15,
    fontSize: 18,
  },
});
