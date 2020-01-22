import React from 'react'
import Next from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import AuthContext, { Auth } from '@contexts/AuthContext'
import '@styles/app.css'
import '@styles/nprogress.css'

type State = {
  auth: Auth
}

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class App extends Next {
  state: State = {
    auth: {
      authenticated: false,
      setAuthenticated: this.setAuthenticated.bind(this),
      user: null,
      setUser: this.setUser.bind(this)
    }
  }

  /**
   * Set whether the user is authenticated or not
   *
   * @param authenticated The new authenticated status
   */
  setAuthenticated(authenticated: boolean): void {
    this.setState((state: State) => ({
      auth: {
        ...state.auth,
        authenticated
      }
    }))
  }

  /**
   * Sets the authenticated user
   *
   * @param user The authenticated user
   */
  setUser(user?: User): void {
    this.setState((state: State) => ({
      auth: {
        ...state.auth,
        user
      }
    }))
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props

    return (
      <AuthContext.Provider value={this.state.auth}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    )
  }
}

export default App
