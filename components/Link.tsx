import React, { forwardRef } from 'react'
import NextLink from 'next/link'
import cx from 'classnames'

export interface Props extends React.AnchorHTMLAttributes<{}> {
  href?: string
  variant?: 'default' | 'primary' | 'secondary' | 'custom'
  className?: string
  children: React.ReactNode
}

interface LinkProps extends Props {
  as?: string
}

const RawLink: React.FC<Props> = forwardRef(
  (
    { href, variant, className, children, ...other },
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <a
        ref={ref}
        title={href}
        href={href}
        className={cx(
          'tw-cursor-pointer',
          {
            'tw-text-blue hover:tw-underline': variant === 'primary',
            'tw-text-white hover:tw-underline': variant === 'secondary'
          },
          className
        )}
        {...other}
      >
        {children}
      </a>
    )
  }
)

RawLink.displayName = 'RawLink'

export const ExternalLink: React.FC<Props> = ({ ...other }) => (
  <RawLink target="_blank" rel="noopener noreferrer" {...other} />
)

const Link: React.FC<LinkProps> = ({
  href = '/',
  as = undefined,
  variant = 'default',
  ...other
}) => {
  return (
    <NextLink href={href} as={as}>
      <RawLink href={href} variant={variant} {...other} />
    </NextLink>
  )
}

export default Link
