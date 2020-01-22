import React, { useContext, useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import AuthContext from '@contexts/AuthContext'
import { post } from '@utils/api'
import { authenticate, signout } from '@utils/auth'
import { noop } from '@utils/helpers'

type Config = {
  authoritative: boolean
}

type Props = {
  authenticated: boolean
  user: User
}

const withAuth = (Page: NextPage<any>, config?: Config): NextPage<Props> => {
  const Auth: NextPage<Props> = props => {
    const { setAuthenticated = noop, setUser = noop } = useContext(AuthContext)

    useEffect(() => {
      setAuthenticated(props.authenticated)
      setUser(props.user)
    }, [])

    return <Page {...props} />
  }

  Auth.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
    const authToken = authenticate(ctx, config?.authoritative)
    const props = Page.getInitialProps && (await Page.getInitialProps(ctx))

    let user

    if (authToken) {
      const { status, body } = await post(
        '/auth/user',
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      )

      if (status === 200) {
        user = body.data
      } else {
        // Authentication token is invalid...
        signout()
      }
    }

    return {
      ...props,
      authenticated: typeof user !== 'undefined',
      user
    }
  }

  return Auth
}

export default withAuth
