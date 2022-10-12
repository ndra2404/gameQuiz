import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      const {name, score} = action.payload;
      state.users.push({name, score});
    },
    updateUser: (state, action) => {
      const {name, score} = action.payload;
      const user = state.users.find(user => user.name === name);
      user.score = score;
    },
    deleteUser: (state, action) => {
      const {name} = action.payload;
      const user = state.users.find(user => user.name === name);
      const index = state.users.indexOf(user);
      state.users.splice(index, 1);
    },
    resetUsers: state => {
      state.users = [];
    },
  },
});

export default usersSlice;
