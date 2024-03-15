import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      user: "userLogged",
      updatedAt: new Date().toISOString(),
      total: 0,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.value.items.findIndex(
        (item) => item.id === action.payload.id
      );
      
      if (index !== -1) {
        state.value.items[index].quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.value.items.push(newItem);
      }

      state.value.total = state.value.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.value.updatedAt = new Date().toISOString();
    },
    removeItem: (state, action) => {
      const index = state.value.items.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.value.items.splice(index, 1);
        state.value.total = state.value.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        state.value.updatedAt = new Date().toISOString();
      }
    },

  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
