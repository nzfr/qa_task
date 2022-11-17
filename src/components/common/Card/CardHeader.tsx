import React from 'react'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
}

const CardHeader = ({ children }: Props) => {
  return <div className='appBar rounded-lg px-4 py-1'>{children}</div>
}
export default CardHeader
