import React from 'react'
import CircularAvatar from '../common/CircularAvatar'
import { MdAdd, MdArrowDropDown } from 'react-icons/md'
import Button from '../common/Button'
import { usePageTitleNormalizer } from '../../hooks/usePageTitleNormalizer'
import { useAppDispatch } from '../../store/hooks'
import { toggleDialog } from '../../store/slices/MainAppSlice'

const Appbar = () => {
  const title = usePageTitleNormalizer()
  const dispatch = useAppDispatch()
  return (
    <div className='app-bar py-px md:pt-4 px-4 md:px-14'>
      <div className='font-extrabold text-sm sm:text-2xl'>{title}</div>
      <div className='flex flex-row justify-start items-center gap-2 md:gap-6'>
        <Button
          testid='new_question_modal_btn'
          onClick={() => dispatch(toggleDialog(true))}
          variant='Filled'
          type='Success'
          title='سوال جدید'
          icon={<MdAdd />}
        />
        <CircularAvatar
          variant='Circular'
          img='https://i.pravatar.cc/150?img=11'
          altImg='avatar-image'
        />
        <span data-testid='user_name_id' className='font-bold text-xs md:text-sm text-grey-45'>
          امیر نظری فر
        </span>
        <MdArrowDropDown size={25} className='text-grey-9 cursor-pointer' />
      </div>
    </div>
  )
}

export default Appbar
