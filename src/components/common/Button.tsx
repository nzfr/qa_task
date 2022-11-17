import React from 'react'

type Props = {
  variant: 'Filled' | 'Outlined' | 'Flat'
  type?: 'Success' | 'Error'
  title: string
  icon?: JSX.Element
  onClick?: () => void
  className?: string
  buttonType?: 'submit' | 'reset' | 'button' | undefined
  form?: string
  disabled?: boolean
  testid?: string
}

const Button = ({
  variant,
  type,
  title,
  icon,
  onClick,
  className,
  buttonType,
  form,
  disabled,
  testid,
}: Props) => {
  const styles = () => {
    switch (variant) {
      case 'Filled':
        if (type === 'Success') {
          return 'filled-success-button'
        }
        if (type === 'Error') {
          return 'filled-error-button'
        }
        break
      case 'Outlined':
        if (type === 'Success') {
          return 'outlined-success-button'
        }
        if (type === 'Error') {
          return 'outlined-error-button'
        }
        break
      case 'Flat':
        return `${type === 'Success' ? 'text-green-77' : 'text-red-400'}`;
      default:
        return 'filled-success-button'
    }
  }

  return (
    <button
      data-testid={testid}
      disabled={disabled}
      form={form}
      type={buttonType}
      onClick={onClick}
      className={`custom-button ${styles()} ${className ?? ''}`}
    >
      {icon ?? icon}
      {title}
    </button>
  )
}
export default Button
