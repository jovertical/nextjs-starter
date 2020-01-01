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
  disabled = false,
  ...other
}) => {
  return (
    <button
      type="button"
      className={cx(
        'tw-relative tw-inline-block tw-rounded-sm tw-h-10 tw-px-5 tw-tracking-wide',
        {
          'tw-bg-blue hover:tw-bg-blue-darker tw-text-white':
            !disabled && variant === 'primary',
          'tw-bg-white tw-shadow hover:tw-bg-gray-100':
            !disabled && variant === 'secondary'
        },
        {
          'tw-bg-gray-500 tw-cursor-not-allowed': disabled
        },
        className
      )}
      {...other}
    >
      {iconLeft && (
        <span className="tw-absolute tw-top-0 tw-left-0 tw-flex tw-items-center tw-w-12 tw-h-12 tw-ml-3">
          {iconLeft}
        </span>
      )}
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
