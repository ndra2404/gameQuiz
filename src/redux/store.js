import {configureStore} from '@reduxjs/toolkit';
import {questionReducer} from 'redux/reducers/question.reducer';
import usersSlice from 'redux/reducers/users.reducer';
export const store = configureStore({
  reducer: {
    question: questionReducer,
    users: usersSlice.reducer,
  },
});
