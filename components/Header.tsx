import React, { useContext } from 'react'
import cx from 'classnames'
import Link from '@components/Link'
import AuthContext from '@contexts/AuthContext'
import { signout } from '@utils/auth'

const Header: React.FC<{}> = () => {
  const { authenticated } = useContext(AuthContext)

  const linkClassName =
    'px-1 pb-1 text-white border-b-2 border-blue hover:border-white'

  return (
    <header>
      <nav className="flex items-center justify-between px-10 py-6 bg-blue">
        <Link variant="custom" href="/" className="text-white pb-1">
          Next.js
        </Link>

        <div>
          {authenticated ? (
            <Link
              variant="custom"
              href="#"
              className={cx('mx-2', linkClassName)}
              onClick={(): void => signout()}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                variant="custom"
                href="/auth/signin"
                className={cx('mx-2', linkClassName)}
              >
                Login
              </Link>

              <Link
                variant="custom"
                href="/auth/signup"
                className={cx('mx-2', linkClassName)}
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
