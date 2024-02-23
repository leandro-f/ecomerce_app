import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import allProducts from "../data/products.json";
import { colors } from "../global/colors";

const ItemDetail = ({ route }) => {
  const [product, setProduct] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const productFound = allProducts.find((product) => product.id === id);
    if (productFound) {
      setProduct(productFound);
    }
  }, [id]);

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {product.imageUrl ? (
          <Image
            source={{ uri: product.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Text>No image available</Text>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>{product.name}</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
          <Text style={styles.descriptionTextPrice}>${product.price}</Text>
          <Pressable style={styles.buy}>
            <Text style={styles.buyText}>Buy now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "90%",
    aspectRatio: 16 / 9,
    marginHorizontal: '5%',
    borderRadius: 10,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 6,
  },
  descriptionText: {
    fontFamily: "InterRegular",
    fontSize: 16,
    color: "black",
    paddingVertical: 4,
  },
  descriptionTextPrice: {
    fontFamily: "InterRegular",
    fontSize: 25,
    color: "black",
    paddingVertical: 6,
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.blue_300,
  },
  buyText: {
    fontFamily: "InterBold",
    fontSize: 22,
    color: "white",
  },
});
