'use server'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

/**
 * Extend fetch function
 * @param url - The API endpoint to fetch
 * @param options - Optional fetch options
 * @returns FetchResponse
 */
export const apiCall = async (url: string, options: any) => {
  try {
    // Define fetch options
    let fetchOptions = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Origin: process.env.API_URL || '',
        ...options.headers,
      },
      credentials: 'include'
    }

    // Get current session
    const session = await getServerSession(authOptions)
    console.log('apiCall session', session)

    // Check if session is not null
    if (session) {
      fetchOptions = {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${session?.access_token}`
        }
      }
    }

    const apiUrl = process.env.API_URL

    if (!apiUrl)
      throw new Error('API URL is not defined in environment variables.')

    const response = await fetch(`${apiUrl}/api/v1/${url}`, fetchOptions)

    console.log('bobo response', { response }, `${apiUrl}/api/v1/${url}`, fetchOptions)

    const data = await response.json()

    return { statusCode: response.status, ...data }
  } catch (error) {
    throw error
  }
}