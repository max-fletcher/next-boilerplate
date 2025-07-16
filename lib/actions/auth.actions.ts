// NOTE: 'use server' here causes all function here to become server actions
'use server'

import { TUserUpdateSchema } from "../schema/updateProfile.schema";
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

// import { parseStringify } from "../utils";

// export const signIn = async ({email, password}: signInProps) => { // Directly destructuring the varaibles that we get as params
//   try {
//     NOTE: in server actions, we do Mutations|Database Operation|Fetch Request
//     const { account } = await createAdminClient();
//     console.log('account', account);

//     const session = await account.createEmailPasswordSession(email, password)

//     // the "appwrite-session" can be replaced with any other name, but it has to be the same as the name used in appwrite.ts
//     cookies().set("appwrite-session", session.secret, {
//       path: "/",
//       httpOnly: true,
//       sameSite: "strict",
//       secure: true,
//     })

//     const user = await getUserInfo({userId: session.userId})
//     console.log('sign in user');
//     return parseStringify({ data: 'data' })
//   } catch (e) {
//     console.error('Error', e);
//   }
// }

export async function updateUser(id: number, data: TUserUpdateSchema) { // This needs to be a normal function for some reason
  try {
    const formData = new FormData()

    formData.append("name", data.name)
    if (data.email) formData.append("email", data.email)
    if (data.password) formData.append("password", data.password)
    if (data.avatar instanceof File) formData.append("avatar", data.avatar)

    // Don't bother settign headers here like(headers: { 'Content-Type': 'multipart/form-data' }) because it will throw an error. Seems the PATCH method in fetch takes care of "Content-Type".
    const res = await apiCall(`users/${id}`, {
      method: 'PATCH',
      body: data,
      cache: 'no-store'
    })

    // console.log('updateUser res', res)

    return res
  } catch (e) {
    console.error('Error', e);
    return e
  }
}

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
        Origin: process.env.NEXT_PUBLIC_API_URL || '',
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

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    if (!apiUrl)
      throw new Error('API URL is not defined in environment variables.')

    const response = await fetch(`${apiUrl}/api/v1/${url}`, fetchOptions)

    const data = await response.json()

    return { statusCode: response.status, ...data }
  } catch (error) {
    console.log('apiCall', error)
    throw error
  }
}