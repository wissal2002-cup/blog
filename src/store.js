import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './features/commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
