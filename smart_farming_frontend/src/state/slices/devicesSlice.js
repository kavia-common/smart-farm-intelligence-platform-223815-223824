import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: 'idle',
  error: null,
};

// PUBLIC_INTERFACE
export const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices(state, action) {
      state.list = action.payload || [];
      state.status = 'succeeded';
    },
    setDevicesLoading(state) {
      state.status = 'loading';
    },
    setDevicesError(state, action) {
      state.status = 'failed';
      state.error = action.payload || 'Unknown error';
    },
  },
});

export const { setDevices, setDevicesLoading, setDevicesError } = devicesSlice.actions;
export default devicesSlice.reducer;
