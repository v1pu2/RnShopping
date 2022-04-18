import React from 'react';

import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';

const ProductCard = props => {
  const prod_img = props?.catData?.img;
  return (
    <TouchableOpacity style={styles.cardView} onPress={props.onPress}>
      <Image source={{uri: prod_img}} style={styles.img}/>
      <View style={styles.contentView}>
        <Text>${props?.catData?.price}</Text>
        <Text>{props?.catData?.product}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
var styles = StyleSheet.create({
  cardView: {
    width: 200,
    flex: 1,
    borderRadius: 10,
    margin: 15,
  },
  img: {height: 200, width: 200, borderRadius: 10, marginBottom: 10},
  contentView: {
    marginVertical: 5,
  },
});
