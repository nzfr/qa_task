import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
}

const ModalContent = ({ children }: Props) => {
  return <div className='px-4 py-3 text-right'>{children}</div>
}
export default ModalContent
