import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => setCategorySelected(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15, 
  },
  button: {
    backgroundColor: '#007bff', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, 
    width: 250, 
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    alignItems: 'center', 
  },
  text: {
    color: '#ffffff', 
    fontSize: 18,
    textAlign: 'center',
  },
});


export default CategoryItem;
