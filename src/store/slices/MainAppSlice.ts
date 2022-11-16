import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {QuestionDTO, submitNewQuestion} from "../../network/QuestionsListHttpService";

export interface IAppState {
    newQuestionModal: {
        isOpen: boolean,
        state: 'idle' | 'loading' | 'failed'
    };
    currentUser: {
        name: string,
        avatar:string,
    }
}

const initialState: IAppState = {
    newQuestionModal: {
        isOpen: false,
        state: 'idle'
    },
    currentUser: {
        name: "Im a User",
        avatar:"https://i.pravatar.cc/150?img=11"
    }
}

export const addQuestion = createAsyncThunk(
    "questions/addNewQuestion",
    async (param : QuestionDTO) => {
        return await submitNewQuestion(param);
    }
)

const MainAppSlice = createSlice({
    name: 'mainApp',
    initialState,
    reducers: {
        toggleDialog: (state, action) => {
            state.newQuestionModal.isOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuestion.pending, (state) => {
            state.newQuestionModal.state = 'loading';
        })
            .addCase(addQuestion.fulfilled, (state) => {
                state.newQuestionModal.state = 'idle';
                state.newQuestionModal.isOpen = false;
            })
            .addCase(addQuestion.rejected, (state) => {
                state.newQuestionModal.state = 'failed'
            })
    }
})

export const {toggleDialog} = MainAppSlice.actions;

export default MainAppSlice.reducer