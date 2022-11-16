import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AnswerDTO} from "../../network/QuestionsListHttpService";
import QuestionListItem from "../quesitions-list/QuestionListItem";
import AnswerListItem from "./AnswerListItem";
import Button from "../common/Button";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {addAnswerThunk, getQuestionDetail} from "../../store/slices/QuestionDetailSlice";

const QuestionDetail = () => {
    const params = useParams();
    const navigator = useNavigate();
    const [newAnswer, setNewAnswer] = useState<string>('')
    const state = useAppSelector(state => state.questionDetailState)
    const [showAnswerInputError, setShowAnswerInputError] = useState<boolean>(false)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!params.id) {
            navigator('/', {replace: true})
        } else {
            dispatch(getQuestionDetail({questionId: params.id}));
        }

    }, [])

    useEffect(() => {
        if (showAnswerInputError && newAnswer.length > 0){
            setShowAnswerInputError(false)
        }
    },[newAnswer])

    const addNewAnswer = () => {
        const today = new Date();
        if (!state.question || !newAnswer) {
            setShowAnswerInputError(true);
            return;
        }
        const params: AnswerDTO = {
            questionId: state.question.id,
            dislikesCount: '0',
            likesCount: '0',
            content: newAnswer,
            userAvatar: state.question.avatar,
            userName: `Mr.${Math.random()}`,
            createdTime: today.getHours() + ":" + today.getMinutes(),
            createdDate: `${today.getFullYear()}/${today.getMonth()}/${today.getDay()}`,
            id: ''
        }
        dispatch(addAnswerThunk(params)).then(() => {
            setNewAnswer('');
            dispatch(getQuestionDetail({questionId: state.question ? state.question.id : ''}));
        })
    }

    return <div>
        {!state.question && <p>Loading</p>}
        {state.question && <div className='flex flex-col'>
            <QuestionListItem showImages={true} questionItem={state.question}/>
            <div className='font-extrabold mt-6 mb-4 text-2xl'>پاسخ ها</div>
            <div className='flex flex-col gap-y-6'>
                {state.question.answers.map((answer) => <AnswerListItem key={answer.id} answerItem={answer}/>)}
            </div>
            <div>
                <div className='font-extrabold text-2xl mt-6'>پاسخ خود را ثبت کنید</div>
                <p className='text-sm font-bold text-grey-45 mt-8'>پاسخ خود را بنویسید</p>
                <textarea value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)}
                          className={`w-full h-40 border ${showAnswerInputError ? 'border-errorText' : 'border-textAreaBorder'} mt-4 p-4 rounded-md`}
                          placeholder='متن پاسخ ... '/>
                {showAnswerInputError && <span className='text-errorText text-xs my-2'>لطفا پاسخ را وارد کنید</span> }
                <Button disabled={state.status === 'loading'} onClick={addNewAnswer} className='px-16 mt-6' variant='Filled'
                        type='Success'
                        title='ارسال پاسخ'/>
            </div>
        </div>}
    </div>
}
export default QuestionDetail