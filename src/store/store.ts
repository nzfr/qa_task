import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import questionsReducer from './slices/QuestionsSlice'
import mainAppReducer from './slices/MainAppSlice'
import questionDetailReducer from './slices/QuestionDetailSlice'

export const store = configureStore({
  reducer: combineReducers({
    appState: mainAppReducer,
    questionsState: questionsReducer,
    questionDetailState: questionDetailReducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
