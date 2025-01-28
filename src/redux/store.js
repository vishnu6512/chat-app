// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import chatReducer from './chatSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});