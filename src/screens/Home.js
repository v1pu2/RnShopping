import React, {useState, useEffect} from 'react';

import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

const shoppingList = {
  categories: [
    {id: 1, gender: 'Woman'},
    {id: 2, gender: 'Man'},
    {id: 3, gender: 'Kids'},
  ],
  featured: [
    {
      id: 1,
      product: 'Woman Tshirt',
      price: '50.00',
      img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      product: 'Man Tshirt',
      price: '40.00',
      img: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      product: 'Boys Bottom Wear',
      price: '45.00',
      img: 'https://images.unsplash.com/photo-1598948982052-50435a6e879c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      product: "Girl's T-shirt",
      price: '75.00',
      img: 'https://images.unsplash.com/photo-1599900554895-5e0fc7bbc9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ],
  bestSell: [
    {
      id: 1,
      product: 'Woman Tshirt',
      price: '45.00',
      img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      product: 'Man Tshirt',
      price: '35.00',
      img: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      product: 'Boys Bottom Wear',
      price: '40.00',
      img: 'https://images.unsplash.com/photo-1553859943-a02c5418b798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      product: "Girl's Dress",
      price: '65.00',
      img: 'https://images.unsplash.com/photo-1606430597633-c83e078c30a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ],
};

const Home = () => {
  const [data, setData] = useState(shoppingList);
  const [categoryData, setCategoryData] = useState({});
  const [featured, setFeatured] = useState([]);
  const [bestSell, setBestSell] = useState([]);

  useEffect(() => {
    console.log('shopping list', JSON.stringify(data?.categories));
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
          console.log('add to card');
        }}
      />
    );
  };

  const renderSellItem = item => {
    return (
      <ProductCard
        catData={item?.item}
        onPress={() => console.log('add to card')}
      />
    );
  };
  return (
    <View style={styles.root}>
      <ScrollView>
        <Text style={styles.txtHeader}>Categories</Text>
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
