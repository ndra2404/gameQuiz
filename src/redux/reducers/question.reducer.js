import {createSlice} from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'question',
  initialState: {
    questions: [],
    currentQuestion: 0,
    score: 0,
    isFinished: false,
  },
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const {setQuestions} = questionSlice.actions;
export default questionSlice.reducer;
