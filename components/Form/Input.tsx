import React from 'react'
import { useField } from 'formik'
import cx from 'classnames'
import Text from '@components/Text'

export interface Props extends React.InputHTMLAttributes<{}> {
  rightAction?: React.ReactNode
  className?: string
  name: string
  value: string
}

const Error: React.FC<{}> = ({ children }): React.ReactElement => {
  return (
    <Text variant="sub" className="tw-text-red-600">
      {children}
    </Text>
  )
}

const Input: React.FC<Props> = React.memo(
  ({ rightAction, className, ...other }) => {
    const [field, meta] = useField(other)

    return (
      <>
        <div className="tw-flex tw-relative">
          <input
            className={cx(
              'tw-outline-none tw-p-2 tw-rounded tw-placeholder-gray-700',
              {
                'tw-border-2 focus:tw-border-blue':
                  !Boolean(meta.error) || !meta.touched
              },
              {
                'tw-border-2 tw-border-red-600':
                  Boolean(meta.error) && meta.touched
              },
              className
            )}
            {...field}
            {...other}
          />
          {rightAction && (
            <span className="tw-flex tw-items-center tw-h-full tw-absolute tw-top-0 tw-right-0 tw-mr-3">
              {rightAction}
            </span>
          )}
        </div>

        {Boolean(meta.error) && meta.touched ? (
          <Error>{meta.error}</Error>
        ) : null}
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
