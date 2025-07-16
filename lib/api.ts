import { Session } from "next-auth";
import { TUserUpdateSchema } from "./schema/updateProfile.schema";

export const updateUser = async (session: Session, data: TUserUpdateSchema) => {
  const formData = new FormData();
  formData.append("name", data.name)
  if (data.email) 
    formData.append("email", data.email)
  if (data.password) 
    formData.append("password", data.password)
  if (data.avatar && data.avatar[0]) 
    formData.append('avatar', data.avatar[0]);

  const res = await clientApiCall(`users/${session.user?.id}`, session.access_token, {
    method: "PATCH",
    body: formData,
  });

  return res;
}

/**
 * Extend fetch function
 * @param url - The API endpoint to fetch
 * @param options - Optional fetch options
 * @returns FetchResponse
 */
export const clientApiCall = async (url: string, token: string, options: any) => {
  try {
    // Define fetch options
    let fetchOptions = {
      ...options,
      headers: {
        Origin: process.env.NEXT_PUBLIC_API_URL || '',
        ...options.headers,
      },
      credentials: 'include'
    }

    // Don't set Content-Type header for FormData - let the browser set it with boundary
    if (!(options.body instanceof FormData)) {
      fetchOptions.headers = {
        ...fetchOptions.headers,
        'Content-Type': 'application/json',
      }
    }

    // Check if session is not null
    if (token) {
      fetchOptions = {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${token}`
        }
      }
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    if (!apiUrl)
      throw new Error('API URL is not defined in environment variables.')

    const response = await fetch(`${apiUrl}/api/v1/${url}`, fetchOptions)
    // console.log('clientApiCall response', { response }, `${apiUrl}/api/v1/${url}`, fetchOptions)
    if (!response.ok) 
      throw new Error("Failed to update user");

    const data = await response.json()

    return { statusCode: response.status, ...data }
  } catch (error) {
    console.log('apiCall', error)
    throw error
  }
}