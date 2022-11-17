import React, { ReactElement } from 'react'
import ModalHeader from './ModalHeader'

type Props = {
  children: ReactElement | ReactElement[]
  onDismiss: () => void
  title: string
  showCloseButton: boolean
}

const Modal = ({ children, onDismiss, title }: Props) => {
  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4  text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-mainBg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <ModalHeader title={title} showCancelButton onDismiss={onDismiss} />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
