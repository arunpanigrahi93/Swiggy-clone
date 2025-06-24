import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {}, // object with itemId as key and {id, name, price, imageId, quantity} as value
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (state.items[item.id]) {
        state.items[item.id].quantity += 1;
      } else {
        state.items[item.id] = { ...item, quantity: 1 };
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) {
          delete state.items[id];
        }
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        delete state.items[id];
      }
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
