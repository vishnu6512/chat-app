// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authenSlice = createSlice({
  name: 'auth',
  initialState: { username: null },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = null;
    },
    
  },
});

// Export actions
export const { login, logout } = authenSlice.actions;

// Export reducer
export default authenSlice.reducer;