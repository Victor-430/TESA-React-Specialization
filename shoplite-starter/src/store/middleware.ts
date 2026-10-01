// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import type { Middleware } from "@reduxjs/toolkit";

// Logs every action, and the state before and after it (open the browser Console to see)
export const logger: Middleware = (store) => (next) => (action) => {
  console.log("➡️ Action:", action);
  console.log("   State before:", store.getState());

  const result = next(action); // let the action reach the reducer

  console.log("   State after:", store.getState());
  return result;
};

// Saves the cart to localStorage after every action, so it survives a page refresh
export const saveCart: Middleware = (store) => (next) => (action) => {
  const result = next(action); // let the reducer update the cart FIRST

  const items = store.getState().cart.items;
  localStorage.setItem("cart", JSON.stringify(items));

  return result;
};
