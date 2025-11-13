import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timeseries: [],
  summary: { yield: 0, moisture: 0, irrigation: 0 },
  status: 'idle',
  error: null,
};

// PUBLIC_INTERFACE
export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setTimeseries(state, action) {
      state.timeseries = action.payload || [];
      state.status = 'succeeded';
    },
    setSummary(state, action) {
      state.summary = { ...state.summary, ...(action.payload || {}) };
    },
    setAnalyticsLoading(state) {
      state.status = 'loading';
    },
    setAnalyticsError(state, action) {
      state.status = 'failed';
      state.error = action.payload || 'Unknown error';
    },
  },
});

export const { setTimeseries, setSummary, setAnalyticsLoading, setAnalyticsError } = analyticsSlice.actions;
export default analyticsSlice.reducer;
