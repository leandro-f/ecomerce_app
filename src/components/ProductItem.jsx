import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import Card from './Card';

const ProductItem = ({ product, navigation }) => {
  return (
    <Pressable 
      style={styles.card} 
      onPress={() => navigation.navigate('ItemDetail', { id: product.id })}
    >
      <Card style={styles.cardContent}>
        <Image 
          style={styles.image} 
          resizeMode="cover" 
          source={{ uri: product.imageUrl }} 
        />
        <Text style={styles.title}>{product.title}</Text>
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    overflow: 'hidden',
  },
  cardContent: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
