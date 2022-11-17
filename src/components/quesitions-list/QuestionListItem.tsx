import React from 'react'
import { QuestionDTO } from '../../network/QuestionsListHttpService'
import CircularAvatar from '../common/CircularAvatar'
import DataKeyValue from '../common/DataKeyValue'
import { FaRegCommentDots } from 'react-icons/fa'
import { toPersianNumbers } from '../../utils/toPersianNumbers'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'
import Card from '../common/Card/Card'
import CardHeader from '../common/Card/CardHeader'
import CardContent from '../common/Card/CardContent'

type Props = {
  questionItem: QuestionDTO
  showImages?: boolean
}

const QuestionListItem = ({ questionItem, showImages }: Props) => {
  const navigator = useNavigate()
  return (
    <Card>
      <CardHeader>
        <div className='question-card-header'>
          <CircularAvatar img={questionItem.avatar} variant='SemiCircular' />
          <h3 className='font-bold'>{questionItem.questionsTitle}</h3>
        </div>
        <div className='question-card-header'>
          <DataKeyValue title='ساعت' value={questionItem.createdTime} />
          <DataKeyValue title='تاریخ' value={questionItem.createdDate} />
          <div className='flex flex-row justify-start items-center gap-1'>
            <FaRegCommentDots className='text-purple-9C' />
            <span className='text-grey-77 text-xs'>
              {toPersianNumbers(questionItem.answers.length)}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-neutral-black text-sm font-normal'>{questionItem.questionsDesc}</p>
        <div className='container grid grid-cols-5 gap-2 mx-auto'>
          {showImages &&
            questionItem.images.map((image, index) => {
              return (
                <img
                  className='w-52 h-52'
                  alt={`question_${questionItem.id}_image_${index}`}
                  key={index}
                  src={image}
                />
              )
            })}
        </div>
        {!showImages ? (
          <div className='flex flex-row justify-end items-center'>
            <Button
              onClick={() => navigator(`/question-details/${questionItem.id}`)}
              variant='Outlined'
              type='Success'
              title='مشاهده جزییات'
            />
          </div>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  )
}
export default QuestionListItem
