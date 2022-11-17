import React, { useEffect } from 'react'
import QuestionListItem from './QuestionListItem'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchQuestionsList } from '../../store/slices/QuestionsSlice'

const QuestionsList = () => {
  const questions = useAppSelector((state) => state.questionsState)
  const dispatch = useAppDispatch()

  // const [questions, setQuestions] = useState<QuestionDTO[]>([])

  useEffect(() => {
    if (questions.status !== 'loading') {
      dispatch(fetchQuestionsList())
    }
  }, [])

  return (
    <div className='flex flex-col gap-y-5'>
      {questions.questions &&
        questions.questions.map((question) => {
          return <QuestionListItem showImages={false} key={question.id} questionItem={question} />
        })}
    </div>
  )
}
export default QuestionsList
