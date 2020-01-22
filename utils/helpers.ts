export const inServer = (): boolean => typeof window === 'undefined'

export const noop = (): void => {
  // Do nothing...
}
