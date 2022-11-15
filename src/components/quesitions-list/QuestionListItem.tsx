import React from "react";
import {QuestionDTO} from "../../network/QuestionsListHttpService";
import CircularAvatar from "../common/CircularAvatar";
import DataKeyValue from "../common/DataKeyValue";
import {FaRegCommentDots} from "react-icons/fa";
import {toPersianNumbers} from "../../utils/toPersianNumbers";
import Button from "../common/Button";
import {useNavigate} from "react-router-dom";

type Props = {
    questionItem: QuestionDTO
}

const QuestionListItem = ({questionItem}: Props) => {
    const navigator = useNavigate();
    return <div className='questionCard'>
        <div className='appBar rounded-lg px-4 py-1'>
            <div className='question-card-header'>
                <CircularAvatar img={questionItem.avatar} variant='SemiCircular'/>
                <h3 className='font-bold'>{questionItem.questionsTitle}</h3>
            </div>
            <div className='question-card-header'>
                <DataKeyValue title='ساعت' value={questionItem.createdTime}/>
                <DataKeyValue title='تاریخ' value={questionItem.createdDate}/>
                <div className='flex flex-row justify-start items-center gap-1'>
                    <FaRegCommentDots className='text-purple-9C'/>
                    <span className='text-grey-77 text-xs'>{toPersianNumbers(questionItem.answers.length)}</span>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col px-4 py-6 gap-8'>
            <p className='text-neutral-black font-normal'>{questionItem.questionsDesc}</p>
            <div className='flex flex-row justify-end items-center'>
                <Button onClick={() => navigator(`/question-details/${questionItem.id}`)} variant='Outlined' type="Success" title='مشاهده جزییات'/>
            </div>
        </div>
    </div>
}
export default QuestionListItem