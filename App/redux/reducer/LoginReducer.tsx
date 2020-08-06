import {createSlice} from '@reduxjs/toolkit';
import {LoginDataTypes} from '../types/LoginDataTypes';

const initialState: LoginDataTypes = {username: '', password: ''};
const LoginSlice = createSlice({
  name: 'LoginData',
  initialState,
  reducers: {
    change: (state, action) => ({...state, ...action.payload}),
    reset: () => initialState,
  },
});

export const {change, reset} = LoginSlice.actions;

export default LoginSlice.reducer;
