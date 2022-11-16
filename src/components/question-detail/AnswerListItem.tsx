import React from "react";
import {AnswerDTO} from "../../network/QuestionsListHttpService";
import Card from "../common/Card/Card";
import CardHeader from "../common/Card/CardHeader";
import CircularAvatar from "../common/CircularAvatar";
import DataKeyValue from "../common/DataKeyValue";
import {toPersianNumbers} from "../../utils/toPersianNumbers";
import {BiHappy, BiSad} from "react-icons/bi";
import CardContent from "../common/Card/CardContent";
import Button from "../common/Button";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getQuestionDetail, likeOrDislikeAnswer} from "../../store/slices/QuestionDetailSlice";

type Props = {
    answerItem: AnswerDTO
}

const AnswerListItem = ({answerItem}: Props) => {
    const feedbackState = useAppSelector(state => state.questionDetailState.submitFeedback)
    const dispatch = useAppDispatch();

    const toggleLike = (isLike: boolean) => {
        dispatch(likeOrDislikeAnswer({
            count: isLike ? answerItem.likesCount : answerItem.dislikesCount,
            id: answerItem.id,
            isLike: isLike
        })).then(() => {
            dispatch(getQuestionDetail({questionId: answerItem.questionId}))
        })
    }

    return <Card>
        <CardHeader>
            <div className='question-card-header'>
                <CircularAvatar img={answerItem.userAvatar} variant='SemiCircular'/>
                <h3 className='font-bold'>{answerItem.userName}</h3>
            </div>
            <div className='question-card-header'>
                <DataKeyValue title='ساعت' value={answerItem.createdTime}/>
                <DataKeyValue title='تاریخ' value={answerItem.createdDate}/>
                <div className='flex flex-row justify-start items-center gap-1'>
                    <BiHappy className='text-purple-9C text-green-27'/>
                    <span className='text-grey-77 text-xs'>{toPersianNumbers(answerItem.likesCount)}</span>
                </div>
                <div className='flex flex-row justify-start items-center gap-1'>
                    <BiSad className='text-purple-9C text-red-400'/>
                    <span className='text-grey-77 text-xs'>{toPersianNumbers(answerItem.dislikesCount)}</span>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <p className='text-sm'>{answerItem.content}</p>
            <div className='flex flex-row justify-end items-center gap-2'>
                <Button disabled={feedbackState.status === 'loading'} onClick={() => toggleLike(true)}
                        variant='Outlined' type='Success' title='پاسخ خوب بود' icon={<BiHappy size={20}/>}/>
                <Button disabled={feedbackState.status === 'loading'} onClick={() => toggleLike(false)}
                        variant='Outlined' type='Error' title='پاسخ خوب نبود' icon={<BiSad size={20}/>}/>
            </div>
        </CardContent>
    </Card>
}
export default AnswerListItem