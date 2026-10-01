import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', isLoggedIn: false },
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.name = ''
      state.isLoggedIn = false
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
