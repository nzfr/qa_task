import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
}

const Card = ({ children }: Props) => {
  return <div className='question-card'>{children}</div>
}
export default Card
