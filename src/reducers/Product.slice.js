import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { setProducts, setError, setLoading, setStatus } = productSlice.actions;
