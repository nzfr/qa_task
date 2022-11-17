import React from 'react'

type Props = {
  img: string
  altImg?: string
  variant: 'Circular' | 'SemiCircular'
}

const CircularAvatar = ({ img, altImg, variant }: Props) => {
  const roundedVariant = () => {
    switch (variant) {
      case 'Circular':
        return 'rounded-full'
      case 'SemiCircular':
        return 'rounded-lg'
      default:
        return 'rounded-md'
    }
  }
  return <img src={img} alt={altImg ?? ''} className={`${roundedVariant()} h-11 w-11`} />
}
export default CircularAvatar
