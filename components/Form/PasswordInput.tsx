import React, { useState } from 'react'
import EyeIcon from '@components/Icons/Eye'
import EyeSlashIcon from '@components/Icons/EyeSlash'
import Icon from '@components/Icon'
import Input, { Props } from './Input'

const PasswordInput: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false)

  return (
    <Input
      type={visible ? 'text' : 'password'}
      rightAction={
        <Icon onClick={(): void => setVisible(!visible)}>
          {visible ? <EyeSlashIcon /> : <EyeIcon />}
        </Icon>
      }
      {...props}
    />
  )
}

export default PasswordInput
