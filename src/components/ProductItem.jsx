import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ProductItem = ({ product, navigation }) => {
  return (
    <Pressable style={styles.card} onPress={() => navigation.navigate('ItemDetail', { id: product.id, productName: product.name })}>
      <View style={styles.cardContent}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: product.imageUrl }}
        />
        <Text style={styles.title}>{product.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 8,
    color: 'black',
    textAlign: 'center',
  },
});

export default ProductItem;
