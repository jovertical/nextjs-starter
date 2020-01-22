import React from 'react'
import Header from '@components/Header'

const Layout: React.FC<{}> = ({ children }) => (
  <div>
    <Header />
    <main className="flex justify-center w-full lg:w-3/4 mx-auto mt-5">
      {children}
    </main>
  </div>
)

export default Layout
