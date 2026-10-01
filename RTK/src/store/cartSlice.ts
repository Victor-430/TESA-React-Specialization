import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { count: 0 },
  reducers: {},
})

export default cartSlice.reducer
