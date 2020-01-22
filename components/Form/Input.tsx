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
    <Text variant="sub" className="text-red-600">
      {children}
    </Text>
  )
}

const Input: React.FC<Props> = React.memo(
  ({ rightAction, className, ...other }) => {
    const [field, meta] = useField(other)

    return (
      <>
        <div className="flex relative">
          <input
            className={cx(
              'outline-none p-2 rounded placeholder-gray-700',
              {
                'border-2 focus:border-blue':
                  !Boolean(meta.error) || !meta.touched
              },
              {
                'border-2 border-red-600': Boolean(meta.error) && meta.touched
              },
              className
            )}
            {...field}
            {...other}
          />
          {rightAction && (
            <span className="flex items-center h-full absolute top-0 right-0 mr-3">
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
