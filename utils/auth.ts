import { NextPageContext } from 'next'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { inServer } from '@utils/helpers'

/**
 * Store the Authentication Token and redirect to the home page.
 */
export const signin = (authToken: string): void => {
  cookie.set('authToken', authToken, { expires: 1 })
  Router.push('/dashboard')
}

/**
 * Remove Authentication Token and redirect to the signin page.
 */
export const signout = (): void => {
  cookie.remove('authToken')
  Router.push('/auth/signin')
}

/**
 * Checks whether an Authentication Token is stored, redirects to the
 * login page if not.
 *
 * @param ctx
 * @param move Whether to redirect them to the Signin page or not (on failure).
 */
export const authenticate = (
  ctx: NextPageContext,
  move = true
): string | undefined => {
  const { authToken } = nextCookie(ctx)

  if (!authToken && move) {
    if (inServer()) {
      ctx.res?.writeHead(302, { Location: '/auth/signin' })
      ctx.res?.end()
    } else {
      Router.push('/auth/signin')
    }
  }

  return authToken
}
