import React, {useState, useEffect} from 'react';

import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/ActionCart';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

const shoppingList = {
  categories: [
    {
      id: 1,
      gender: 'Woman',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAbXKJYacGxuMdyJqYTrzJRpw1rleBAjzRw&usqp=CAU',
    },
    {
      id: 2,
      gender: 'Man',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWn13vWetld7Tpu8bjhqTwal8xHi_d-2AoTg&usqp=CAU',
    },
    {
      id: 3,
      gender: 'Kids',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_H4QRrEfeHh5HKYSoQoerH3I0-t40yhRPg&usqp=CAU',
    },
  ],
  featured: [
    {
      id: 11,
      product: 'Woman Tshirt',
      price: '50.00',
      img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 12,
      product: 'Man Tshirt',
      price: '40.00',
      img: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 13,
      product: 'Boys Bottom Wear',
      price: '45.00',
      img: 'https://images.unsplash.com/photo-1598948982052-50435a6e879c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 14,
      product: "Girl's T-shirt",
      price: '75.00',
      img: 'https://images.unsplash.com/photo-1599900554895-5e0fc7bbc9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ],
  bestSell: [
    {
      id: 21,
      product: 'Woman Tshirt',
      price: '45.00',
      img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 22,
      product: 'Man Tshirt',
      price: '35.00',
      img: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 23,
      product: 'Boys Bottom Wear',
      price: '40.00',
      img: 'https://images.unsplash.com/photo-1553859943-a02c5418b798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 24,
      product: "Girl's Dress",
      price: '65.00',
      img: 'https://images.unsplash.com/photo-1606430597633-c83e078c30a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ],
};

const Home = props => {
  const [data, setData] = useState(shoppingList);
  const [categoryData, setCategoryData] = useState({});
  const [featured, setFeatured] = useState([]);
  const [bestSell, setBestSell] = useState([]);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state?.CartReducer?.cart);

  useEffect(() => {
    // console.log('shopping list', JSON.stringify(data?.categories));
    setCategoryData(data?.categories);
    setFeatured(data?.featured);
    setBestSell(data?.bestSell);
  }, [data]);

  const renderCatItem = item => {
    return <CategoryCard catData={item?.item} />;
  };
  const renderFeatureItem = item => {
    return (
      <ProductCard
        catData={item?.item}
        onPress={() => {
          const isFind = cartData?.filter(
            obj => obj?.item?.id == item?.item?.id,
          );
          console.log(isFind);
          if (isFind?.length === 0) {
            const cartItem = {item: item?.item, qty: 1};
            // console.log('add to card', cartItem);
            dispatch(addToCart(cartItem));
          }
        }}
      />
    );
  };

  const renderSellItem = item => {
    return (
      <ProductCard
        catData={item?.item}
        onPress={() => {
          console.log('cart add')
          const isFind = cartData?.filter(
            obj => obj?.item?.id == item?.item?.id,
          );
          console.log(isFind);
          if (isFind?.length === 0) {
            const cartItem = {item: item?.item, qty: 1};
            // console.log('add to card', cartItem);
            dispatch(addToCart(cartItem));
          }
        }}
      />
    );
  };
  return (
    <View style={styles.root}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 20,
          }}>
          <Text style={styles.txtHeader}>Categories</Text>
          <Text
            style={styles.txtHeader}
            onPress={() => props.navigation.navigate('Checkout')}>
            Cart
          </Text>
        </View>
        <FlatList
          horizontal
          data={categoryData}
          renderItem={item => renderCatItem(item)}
          keyExtractor={item => item?.id}
        />
        <Text style={styles.txtHeader}>Featured</Text>
        <FlatList
          horizontal
          data={featured}
          renderItem={item => renderFeatureItem(item)}
          keyExtractor={item => item?.id}
        />
        <Text style={styles.txtHeader}>Best sell</Text>
        <FlatList
          horizontal
          data={bestSell}
          renderItem={item => renderSellItem(item)}
          keyExtractor={item => item?.id}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  txtHeader: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
  },
});
