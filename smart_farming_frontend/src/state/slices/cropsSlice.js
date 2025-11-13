import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

// PUBLIC_INTERFACE
export const cropsSlice = createSlice({
  name: 'crops',
  initialState,
  reducers: {
    setCrops(state, action) {
      state.items = action.payload || [];
      state.status = 'succeeded';
    },
    setCropsLoading(state) {
      state.status = 'loading';
    },
    setCropsError(state, action) {
      state.status = 'failed';
      state.error = action.payload || 'Unknown error';
    },
  },
});

export const { setCrops, setCropsLoading, setCropsError } = cropsSlice.actions;
export default cropsSlice.reducer;
