import { createContext } from 'react'

export interface Auth {
  authenticated: boolean
  setAuthenticated?: (authenticated: boolean) => void
  user: User | null
  setUser?: (user: User) => void
}

export default createContext<Auth>({ authenticated: false, user: null })
