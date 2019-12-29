import React from 'react'
import Link from 'next/link'

const Header: React.FC<{}> = () => (
  <header>
    <nav className="tw-flex tw-justify-between tw-px-10 tw-py-6 tw-bg-gray-300 tw-border-t-2 tw-border-gray-600">
      <Link href="/">
        <a className="tw-text-gray-700">Next.js</a>
      </Link>

      <div>
        <a href="#" className="tw-px-4 tw-text-gray-700 hover:tw-text-gray-900">
          Login
        </a>
        <a href="#" className="tw-px-4 tw-text-gray-700 hover:tw-text-gray-900">
          Sign Up
        </a>
      </div>
    </nav>
  </header>
)

export default Header
