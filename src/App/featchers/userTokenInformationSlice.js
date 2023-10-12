import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const userTokenInformationSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userInformation(state, action) {
      state.value = action.payload;
      localStorage.setItem('userToken', action.payload);
    },
    logout(state, action) {
      state.value = '';
      localStorage.removeItem('userToken');
    },
  },
});

export const { userInformation, logout } = userTokenInformationSlice.actions;
export default userTokenInformationSlice.reducer;
