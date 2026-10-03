// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";
import { shopApi } from "../api/shopApi";
import { logger, saveCart } from "./middleware";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    [shopApi.reducerPath]: shopApi.reducer, // RTK Query's cache
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, saveCart, shopApi.middleware), // RTK Query's middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
