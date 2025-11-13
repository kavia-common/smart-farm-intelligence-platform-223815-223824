import { configureStore } from '@reduxjs/toolkit';
import devicesReducer from './slices/devicesSlice';
import cropsReducer from './slices/cropsSlice';
import analyticsReducer from './slices/analyticsSlice';
import uiReducer from './slices/uiSlice';

// PUBLIC_INTERFACE
export function createAppStore(preloadedState) {
  /** Create and return the configured Redux store for the app. */
  return configureStore({
    reducer: {
      devices: devicesReducer,
      crops: cropsReducer,
      analytics: analyticsReducer,
      ui: uiReducer,
    },
    preloadedState,
  });
}

const store = createAppStore();
export default store;
