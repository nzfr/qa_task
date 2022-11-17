import React, { FormEvent, useState } from 'react'
import Modal from '../common/Modal/Modal'
import { addQuestion, toggleDialog } from '../../store/slices/MainAppSlice'
import ModalContent from '../common/Modal/ModalContent'
import ModalFooter from '../common/Modal/ModalFooter'
import Button from '../common/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { QuestionDTO } from '../../network/QuestionsListHttpService'

const NewQuestionModal = () => {
  const mainState = useAppSelector((state) => state.appState)
  const dispatch = useAppDispatch()

  // form handler libraries like react-hook-form could be used instead
  // using this manual form validation cuz react-hook-form is not allowed
  const [titleInput, setTitleInput] = useState<string>('')
  const [contentInput, setContentInput] = useState<string>('')
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const today = new Date()
    const params: QuestionDTO = {
      id: '',
      avatar: mainState.currentUser.avatar,
      userName: mainState.currentUser.name,
      images: [],
      questionsTitle: titleInput,
      questionsDesc: contentInput,
      createdTime: today.getHours() + ':' + today.getMinutes(),
      createdDate: `${today.getFullYear()}/${today.getMonth()}/${today.getDay()}`,
      answers: [],
    }
    dispatch(addQuestion(params))
  }
  const submitDisabled =
    !titleInput || !contentInput || mainState.newQuestionModal.state === 'loading'

  return (
    <Modal
      showCloseButton={true}
      title='ایجاد سوال جدید'
      onDismiss={() => dispatch(toggleDialog(false))}
    >
      <ModalContent>
        <form onSubmit={formSubmit} id='new-question-form'>
          <div className='font-normal text-grey-45 text-xs'>موضوع</div>
          <input
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            className='w-full text-xs text-grey-45 border border-textAreaBorder rounded-md mt-2 placeholder:text-xs placeholder:text-grey-45 p-2'
            placeholder='موضوع ...'
          />
          <div className='font-normal text-grey-45 text-xs mt-4'>متن سوال</div>
          <textarea
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
            className='w-full text-xs text-grey-45 h-40 border border-textAreaBorder mt-4 rounded-md placeholder:text-xs placeholder:text-grey-45 p-2'
            placeholder='متن سوال ...'
          />
        </form>
      </ModalContent>
      <ModalFooter>
        <Button
            disabled={mainState.newQuestionModal.state === 'loading'}
            className='w-24 text-green-27'
            title='انصراف'
            variant='Flat'
            onClick={() => dispatch(toggleDialog(false))}
            type='Success'
        />
        <Button
          disabled={submitDisabled}
          buttonType='submit'
          form='new-question-form'
          className={`w-24 ${submitDisabled && 'cursor-not-allowed'}`}
          variant='Filled'
          title='ایجاد سوال'
          type='Success'
        />
      </ModalFooter>
    </Modal>
  )
}

export default NewQuestionModal
