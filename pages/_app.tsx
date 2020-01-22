import React from 'react'
import Next from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import '@styles/app.css'
import '@styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class App extends Next {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default App
