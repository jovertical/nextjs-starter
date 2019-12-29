import React from 'react'
import { NextPage } from 'next'
import Layout from '@components/Layout'

const Home: NextPage<{}> = () => (
  <Layout>
    <div>
      <h1 className="tw-mb-2 tw-text-center tw-text-xl tw-font-bold">
        Next.js Starter Kit
      </h1>
    </div>
  </Layout>
)

export default Home
