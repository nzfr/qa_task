import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  AnswerDTO,
  getQuestion,
  GetQuestionParams,
  QuestionDTO,
  submitDislike,
  submitLike,
  submitNewAnswer,
} from '../../network/QuestionsListHttpService'

export type StatusType = 'idle' | 'loading' | 'failed'

export interface IAnswerState {
  status: StatusType
  question: QuestionDTO | undefined
  addAnswer: {
    status: StatusType
  }
  submitFeedback: {
    status: StatusType
  }
}

const initialState: IAnswerState = {
  status: 'idle',
  question: undefined,
  addAnswer: {
    status: 'idle',
  },
  submitFeedback: {
    status: 'idle',
  },
}

export const addAnswerThunk = createAsyncThunk(
  'questionDetails/addNewAnswer',
  async (params: AnswerDTO) => {
    return await submitNewAnswer(params)
  },
)

export const getQuestionDetail = createAsyncThunk(
  'questionDetails/getQuestionDetail',
  async (params: GetQuestionParams) => {
    return await getQuestion(params)
  },
)

export const likeOrDislikeAnswer = createAsyncThunk(
  'questionDetails/toggleLike',
  async ({ count, isLike, id }: { count: string; isLike: boolean; id: string }) => {
    if (isLike) {
      return await submitLike({ count: count, answerId: id })
    }
    return await submitDislike({ count: count, answerId: id })
  },
)

const QuestionDetailSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAnswerThunk.pending, (state) => {
        state.addAnswer.status = 'loading'
      })
      .addCase(addAnswerThunk.fulfilled, (state) => {
        state.addAnswer.status = 'idle'
      })
      .addCase(addAnswerThunk.rejected, (state) => {
        state.addAnswer.status = 'failed'
      })
      .addCase(getQuestionDetail.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getQuestionDetail.fulfilled, (state, action) => {
        state.status = 'idle'
        state.question = action.payload
      })
      .addCase(getQuestionDetail.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(likeOrDislikeAnswer.pending, (state) => {
        state.submitFeedback.status = 'loading'
      })
      .addCase(likeOrDislikeAnswer.fulfilled, (state) => {
        state.submitFeedback.status = 'idle'
      })
      .addCase(likeOrDislikeAnswer.rejected, (state) => {
        state.submitFeedback.status = 'failed'
      })
  },
})

export default QuestionDetailSlice.reducer
