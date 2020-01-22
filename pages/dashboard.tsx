import React, { useContext } from 'react'
import { NextPage } from 'next'
import Layout from '@components/Layout'
import Text from '@components/Text'
import AuthContext from '@contexts/AuthContext'
import withAuth from '@hocs/withAuth'

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout>
      <Text>Good day! {user?.name ?? 'Guest'}</Text>
    </Layout>
  )
}

export default withAuth(Dashboard)
