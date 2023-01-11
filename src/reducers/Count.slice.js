import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  total: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export default countSlice.reducer;
export const { increment, decrement } = countSlice.actions;
