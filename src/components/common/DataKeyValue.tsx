import React from 'react'
import { toPersianNumbers } from '../../utils/toPersianNumbers'

type Props = {
  title: string
  value: string
}

const DataKeyValue = ({ title, value }: Props) => {
  return (
    <div className='flex flex-row gap-1 justify-between items-center text-xs'>
      <span className='text-grey-77'>{`${toPersianNumbers(title)} :`}</span>

      <span className='font-bold text-neutral-black'>{toPersianNumbers(value)}</span>
    </div>
  )
}

export default DataKeyValue
