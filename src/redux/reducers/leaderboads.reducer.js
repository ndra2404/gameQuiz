import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from 'helpers/request';

export const fetchleaderboards = createAsyncThunk(
  'leaderboards/fetchleaderboards',
  async () => {
    const response = await get('leaderboard', {}, {});
    return response.data.data;
  },
);
export const storeLeaderboard = createAsyncThunk(
  'leaderboards/storeLeaderboard',
  async data => {
    const response = await post('leaderboard/saveData', data, {});
    return response.data.data;
  },
);
const leaderboardsSlice = createSlice({
  name: 'leaderboards',
  initialState: {
    leaderboards: [],
    loading: false,
    response: {},
  },
  reducers: {},
  extraReducers: {
    [fetchleaderboards.pending]: state => {
      state.loading = true;
    },
    [fetchleaderboards.fulfilled]: (state, action) => {
      state.loading = false;
      state.leaderboards = action.payload;
    },
    [fetchleaderboards.rejected]: state => {
      state.loading = false;
    },
    [storeLeaderboard.pending]: state => {
      state.loading = true;
    },
    [storeLeaderboard.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [storeLeaderboard.rejected]: state => {
      state.loading = false;
    },
  },
});

export const leaderboardsReducer = leaderboardsSlice.reducer;
