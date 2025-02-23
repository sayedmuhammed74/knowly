import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './slices/authSlice'; // Example slice

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer, // Add more reducers here
    },
  });

export const wrapper = createWrapper(makeStore);
