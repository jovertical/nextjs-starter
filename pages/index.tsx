import React from 'react'
import { NextPage } from 'next'
import Layout from '@components/Layout'
import Text from '@components/Text'
import withAuth from '@hocs/withAuth'

const Home: NextPage = () => (
  <Layout>
    <Text>Next.js Starter Kit</Text>
  </Layout>
)

export default withAuth(Home, { authoritative: false })
