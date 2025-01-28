// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
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
export const { login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;