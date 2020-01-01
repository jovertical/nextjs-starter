import React from 'react'
import Header from '@components/Header'

const Layout: React.FC<{}> = ({ children }) => (
  <div>
    <Header />
    <main className="tw-flex tw-justify-center tw-w-full lg:tw-w-3/4 tw-mx-auto tw-mt-5">
      {children}
    </main>
  </div>
)

export default Layout
