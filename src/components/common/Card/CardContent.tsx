import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
}

const CardContent = ({ children }: Props) => {
  return <div className='w-full flex flex-col px-4 py-6 gap-8'>{children}</div>
}
export default CardContent
