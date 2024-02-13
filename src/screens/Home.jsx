import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

function Home({setCategorySelected}) {
  return (
    <View style={styles.container}>
      <Header title={"Categorias"}/>
      <Categories setCategorySelected={setCategorySelected}/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5E84F2', 
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
