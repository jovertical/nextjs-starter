import React from 'react'
import cx from 'classnames'

type Variant = 'primary' | 'secondary' | 'text'

interface Props extends React.ButtonHTMLAttributes<{}> {
  variant?: Variant
  iconLeft?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const Button: React.FC<Props> = ({
  variant = 'primary',
  iconLeft,
  children,
  className = '',
  ...other
}) => {
  return (
    <button
      type="button"
      className={cx(
        'relative inline-block rounded h-10 px-5 tracking-wide',
        {
          'bg-blue hover:bg-blue-darker text-white': variant === 'primary',
          'bg-white shadow hover:bg-gray-100': variant === 'secondary'
        },
        className
      )}
      {...other}
    >
      {iconLeft && (
        <span className="absolute top-0 left-0 flex items-center w-12 h-12 ml-3">
          {iconLeft}
        </span>
      )}
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
