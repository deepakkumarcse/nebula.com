import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import portfolioReducer from './slices/portfolioSlice';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    testimonials: testimonialsReducer,
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;