import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ProductItem = ({ product, navigation }) => {
  return (
    <View style={styles.card}>
      <Pressable onPress={() => navigation.navigate('ItemDetail', { id: product.id })}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: product.imageUrl }}
        />
        <Text style={styles.title}>{product.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,

    marginHorizontal: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  image: {
    width: '100%', 
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: 'black',
    textAlign: 'center' 
  },

  description: {
    fontSize: 14,
    padding: 10,
    paddingBottom: 15,
    color: '#333',
  },
});


export default ProductItem;
