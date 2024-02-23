import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Categories from '../components/Categories';
import { colors } from '../global/colors';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multitecno</Text>
      <Text style={styles.subtitle}>Categorías</Text>
      <Categories navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_200,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20, 
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20, 
  },
});

export default Home;