import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

function ItemListCategories({ navigation, route }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {

    const filteredProducts = allProducts.filter((product) => {
      return (
        product.category === category &&
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setProducts(filteredProducts);
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ItemListCategories;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    
  },
  list: {
    width: '100%',
  },
});

