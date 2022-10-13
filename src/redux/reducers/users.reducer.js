import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: {},
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateScore: (state, action) => {
      state.currentUser.score = state.currentUser.score + action.payload;
    },
    resetScore: state => {
      state.currentUser.score = 0;
    },
  },
});

export default usersSlice;
