/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'isomorphic-unfetch'

interface ApiResponse {
  status: number
  body: any
}

/**
 * Convert the parameters into a query string
 */
const queryString = (params: Record<string, any>): string => {
  return (
    '?' +
    Object.entries(params)
      .map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1]))
      .join('&')
  )
}

/**
 * Sends a request.
 */
const request = async (
  path: string,
  init: RequestInit
): Promise<ApiResponse> => {
  const { headers, ...config } = init

  const res = await fetch(
    process.env.API_URL + '/' + path.replace(/^\/|\/$/g, ''),
    {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }
  )
  const body = await res.json()

  return {
    status: res.status,
    body
  }
}

/**
 * A wrapper function to send a GET request.
 */
export const get = (
  path: string,
  data?: Record<string, any>,
  init?: RequestInit
): Promise<ApiResponse> => request(path + queryString(data ?? {}), { ...init })

/**
 * A wrapper function to send a POST request.
 */
export const post = (
  path: string,
  data?: Record<string, any>,
  init?: RequestInit
): Promise<ApiResponse> => {
  return request(path, {
    method: 'POST',
    body: JSON.stringify(data),
    ...init
  })
}
