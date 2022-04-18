import React from 'react';

import {ImageBackground, View, Text, StyleSheet} from 'react-native';

const CategoryCard = props => {
  const prod_img = props?.catData?.img;
  return (
    <View style={styles.cardView}>
      <ImageBackground
        source={{
          uri: prod_img,
        }}
        borderRadius={10}
        style={styles.img}>
        <Text style={styles.txtGen}>{props?.catData?.gender}</Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryCard;
const styles = StyleSheet.create({
  cardView: {
    width: 200,
    flex: 1,
    borderRadius: 20,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 120,
    width: 200,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  txtGen: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
