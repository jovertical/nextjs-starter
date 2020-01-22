import React from 'react'
import { NextPage, NextPageContext } from 'next'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import { inServer } from '@utils/helpers'

const withGuestAuth = (Page: NextPage<any>): NextPage => {
  const Auth: NextPage = props => {
    return <Page {...props} />
  }

  Auth.getInitialProps = async (ctx: NextPageContext): Promise<{}> => {
    const { authToken } = nextCookie(ctx)

    if (authToken) {
      if (inServer()) {
        ctx.res?.writeHead(302, { Location: '/dashboard' })
        ctx.res?.end()
      } else {
        Router.push('/dashboard')
      }
    }

    const props = Page.getInitialProps && (await Page.getInitialProps(ctx))
    return { ...props }
  }

  return Auth
}

export default withGuestAuth
