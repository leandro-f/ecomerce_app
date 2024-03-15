import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable  onPress={()=> dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text>{count}</Text>
        <Pressable onPress={()=> dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8", 
    borderRadius: 10, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, 
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "#333", 
  },
  countText: {
    fontSize: 18,
    marginHorizontal: 8, 
    minWidth: 40, 
    textAlign: "center", 
  },
});
