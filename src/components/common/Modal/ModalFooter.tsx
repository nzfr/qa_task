import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
}

const ModalFooter = ({ children }: Props) => {
  return (
    <div className='bg-mainBg px-4 py-3 flex flex-row justify-center items-center sm:justify-end sm:px-6 border-t border-grey-77 gap-4'>
      {children}
    </div>
  )
}
export default ModalFooter
