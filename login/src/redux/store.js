import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import itemReducer from './itemSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer,
  },
});
