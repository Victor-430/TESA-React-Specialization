// 📝 ASSIGNMENT: fill in the TODOs in this file
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// The starting state: nobody is logged in yet
const initialState = {
  name: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      // TODO 1: save the name that was sent in the action
      state.name = action.payload;
      // TODO 2: mark the user as logged in
      state.isLoggedIn = true;
    },

    logout: () => {
      // TODO 3: clear the user back to the starting state
      return initialState;
    },
  },
});

// TODO 4: export login and logout (cartSlice.ts is a reference)
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
