// src/store.ts
import {configureStore} from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import scrollReducer from './scrollSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    scrolling: scrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
