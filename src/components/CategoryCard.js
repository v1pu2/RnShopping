import React from 'react';

import {TextInput, View, Text, StyleSheet} from 'react-native';

const CategoryCard = ({catData}) => {
  return (
    <View style={styles.cardView}>
      <Text>{catData?.gender}</Text>
    </View>
  );
};

export default CategoryCard;
var styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'yellow',
    width: 200,
    padding: 50,
    borderRadius: 20,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
