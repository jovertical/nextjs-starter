import React, { useContext } from 'react'
import cx from 'classnames'
import Link from '@components/Link'
import AuthContext from '@contexts/AuthContext'
import { signout } from '@utils/auth'

const Header: React.FC<{}> = () => {
  const { authenticated } = useContext(AuthContext)

  const linkClassName =
    'tw-px-1 tw-pb-1 tw-text-white tw-border-b-2 tw-border-blue hover:tw-border-white'

  return (
    <header>
      <nav className="tw-flex tw-items-center tw-justify-between tw-px-10 tw-py-6 tw-bg-blue">
        <Link variant="custom" href="/" className="tw-text-white tw-pb-1">
          Next.js
        </Link>

        <div>
          {authenticated ? (
            <Link
              variant="custom"
              href="#"
              className={cx('tw-mx-2', linkClassName)}
              onClick={(): void => signout()}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                variant="custom"
                href="/auth/signin"
                className={cx('tw-mx-2', linkClassName)}
              >
                Login
              </Link>

              <Link
                variant="custom"
                href="/auth/signup"
                className={cx('tw-mx-2', linkClassName)}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
