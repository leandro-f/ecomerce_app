import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors"; 

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ItemListCategories", { category: category })}
      style={styles.button} 
>
  <Text style={styles.text}>{category}</Text>
</Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 3,
    backgroundColor: colors.blue_300,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 250, 
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryItem;
