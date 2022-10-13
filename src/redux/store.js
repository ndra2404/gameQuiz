import {configureStore} from '@reduxjs/toolkit';
import {questionReducer} from 'redux/reducers/question.reducer';
import {leaderboardsReducer} from 'redux/reducers/leaderboads.reducer';
import usersSlice from 'redux/reducers/users.reducer';
export const store = configureStore({
  reducer: {
    questions: questionReducer,
    users: usersSlice.reducer,
    leaderboards: leaderboardsReducer,
  },
});
