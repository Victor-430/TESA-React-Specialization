// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // Load the saved cart (see saveCart in middleware.ts), or start empty
    items: JSON.parse(localStorage.getItem("cart") ?? "[]") as Product[],
  },
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload); // Immer makes this safe
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
