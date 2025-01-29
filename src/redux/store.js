// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authenSlice';
import chatReducer from './chatSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});