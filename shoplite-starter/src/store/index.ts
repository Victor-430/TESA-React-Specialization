// 📝 ASSIGNMENT: fill in TODO 5 and TODO 6 in this file
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";
import { logger, saveCart } from "./middleware";
// TODO 5: import the reducer from "./userSlice" and call it userReducer
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer, //   → state.cart
    theme: themeReducer, // → state.theme
    // TODO 6: add the user reducer here, under the key "user"
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, saveCart),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
