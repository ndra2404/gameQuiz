import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {get} from 'helpers/request';
export const fetchQuestions = createAsyncThunk(
  'question/fetchQuestions',
  async () => {
    const response = await get('questions', {}, {});
    return response.data.data;
  },
);
const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchQuestions.pending]: state => {
      state.loading = true;
    },
    [fetchQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    },
    [fetchQuestions.rejected]: state => {
      state.loading = false;
    },
  },
});
export const questionReducer = questionSlice.reducer;
