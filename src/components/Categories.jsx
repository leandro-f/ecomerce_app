import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';

function Categories({ setCategorySelected }) {
  return (
    <View style={categoryListStyles.container}> 
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem setCategorySelected={setCategorySelected} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

export default Categories;

const categoryListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E84F2', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
