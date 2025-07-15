// NOTE: 'use server' here causes all function here to become server actions
'use server'

import { apiCall } from "../api";

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

// export const signUp = async (userData: SignUpParams) => {
//   const { name, email, password } = userData
//   try {
//     console.log('signUp data', name, email, password)

//     // Login API Call to match the user credentials and receive user data in response along with his role
//     const res = await fetch(`${process.env.API_URL}/api/v1/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name, email, password })
//     })

//     const data = await res.json()

//     console.log('jsondata boi', res, data)

//     if (res.status === 401 || res.status === 400)
//       throw new Error(data.response.message)

//     if (res.status === 201) return parseStringify(data.user)

//     throw new Error(data.message)
//   } catch (error: any) {
//     console.log('authorize error', error)
//     throw new Error(error.message)
//   }
// }

export async function updateUser(id: number, data: any) { // This needs to be a normal function for some reason
  try {
    // Don't bother settign headers here like(headers: { 'Content-Type': 'multipart/form-data' }) because it will throw an error. Seems the PATCH method in fetch takes care of "Content-Type".
    const res = await apiCall(`users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      cache: 'no-store'
    })

    // console.log('updateUser res', res)

    return res
  } catch (e) {
    console.error('Error', e);
    return null
  }
}

// export const logoutAccount = async () => {
//   try {
//     const { account } = await createSessionClient();
//     cookies().delete('appwrite-session')
//     await account.deleteSession('current') // To close current session client
//   } catch (e) {
//     console.error('Error', e);
//     return null
//   }
// }