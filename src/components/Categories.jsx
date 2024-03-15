import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { colors } from '../global/colors';
import { useGetCategoriesQuery } from "../services/shopService";


function Categories({ navigation }) {
/*   const categories = useSelector((state) => state.shopReducer.value.categories); */
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
