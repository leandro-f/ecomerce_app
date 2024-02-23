import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import ItemDetail from '../screens/ItemDetail';
import ItemListCategories from '../screens/ItemListCategories';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ItemDetail" 
          component={ItemDetail} 
          options={({ route }) => ({
            title: route.params.productName || 'Product Detail'
          })}
        />
        <Stack.Screen 
          name="ItemListCategories" 
          component={ItemListCategories} 
          options={({ route }) => ({
            title: route.params.category
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
