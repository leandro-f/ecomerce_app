import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import allProducts from '../data/products.json';
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';

function ItemListCategories({ category }) {
  const [products, setProducts] = useState(allProducts.filter((product) => product.category === category));
  const [keyword, setKeyword] = useState("");

  useEffect(() => {

    const filteredProducts = allProducts
      .filter(product => product.category === category)
      .filter(product => keyword === "" || product.name.toLowerCase().includes(keyword.toLowerCase()));
    
    setProducts(filteredProducts);
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    
  },
  list: {
    width: '100%',
  },
});

export default ItemListCategories;
