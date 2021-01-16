import { createSlice } from '@reduxjs/toolkit';
import {  RootState } from '../app/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
  
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
