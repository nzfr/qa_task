import { getQuestions, QuestionDTO } from '../../network/QuestionsListHttpService'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IQuestionsState {
  questions: QuestionDTO[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: IQuestionsState = {
  questions: [],
  status: 'idle',
}

export const fetchQuestionsList = createAsyncThunk('questions/fetchQuestions', async () => {
  return await getQuestions()
})

export const QuestionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsList.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchQuestionsList.fulfilled, (state, action) => {
        state.status = 'idle'
        state.questions = action.payload
      })
      .addCase(fetchQuestionsList.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default QuestionsSlice.reducer
