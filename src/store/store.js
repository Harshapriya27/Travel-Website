import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import travelSearchReducer from './travelSearchSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    travelSearch: travelSearchReducer,
    // Add more reducers as needed
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});