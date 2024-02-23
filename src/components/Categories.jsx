import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';
import { colors } from '../global/colors';

function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.blue_200, 
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Categories;
