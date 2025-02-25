// NOTE: 'use server' here causes all function here to become server actions
'use server'

// import { parseStringify } from "../utils";

// NOTE Fetch env variables instead of using say process.env.APPWRITE_DATABASE_ID everytime
// const {
//   APPWRITE_DATABASE_ID: DATABASE_ID, // We are renaming the env variable here
//   APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID, // We are renaming the env variable here
//   APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID, // We are renaming the env variable here
// } = process.env

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

// export const signUp = async ({password , ...userData}: SignUpParams) => {
//   const { email, firstName, lastName } = userData

//   let newUserAccount;

//   try {
//     // NOTE: in server actions, we do Mutations|Database Operation|Fetch Request
//     const { account, database } = await createAdminClient();
//     newUserAccount = await account.create(
//       ID.unique(),
//       email,
//       password,
//       `${firstName} ${lastName}`
//     )

//     if(!newUserAccount) throw new Error('Error creating user')

//     const dwollaCustomerUrl = await createDwollaCustomer({...userData, type: 'personal'})

//     if(!dwollaCustomerUrl) throw new Error('Error creating Dwolla customer ')

//     const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl)

//     console.log('before creating new user', userData, newUserAccount.$id, dwollaCustomerId, dwollaCustomerUrl);

//     const newUser = await database.createDocument(
//       DATABASE_ID!, // 1st param - ID of the database where we are storing the data
//       USER_COLLECTION_ID!, // 2nd param - ID of the collection/table where we are storing the data
//       ID.unique(), // 3rd param - generate a unique ID to use as primary key,
//       {            // 4th param - Object containing all the data we are storing to each column in the correct sequence
//         ...userData, userId: newUserAccount.$id, dwollaCustomerId, dwollaCustomerUrl // Some of the keys here are not renamed. May need to do that later.
//       }
//     )

//     const session = await account.createEmailPasswordSession(email, password)

//     // the "appwrite-session" can be replaced with any other name, but it has to be the same as the name used in appwrite.ts
//     cookies().set("appwrite-session", session.secret, {
//       path: "/",
//       httpOnly: true,
//       sameSite: "strict",
//       secure: true,
//     })

//     // NOTE: The reason we are using this "parseStringify" function is because in Next JS, we can't pass large objects via server actions so we are stringifying it first
//     return parseStringify(newUser)
//   } catch (error) {
//     console.error('Error', error)
//   }
// }

// export async function getLoggedInUser() { // This needs to be a normal function for some reason
//   try {
//     const { account } = await createSessionClient()
//     const result = await account.get()

//     const user = await getUserInfo({ userId: result.$id })

//     NOTE: The reason we are using this "parseStringify" function is because in Next JS, we can't pass large objects via server actions so we are stringifying it first
//     return parseStringify({ data: 'data' })
//   } catch (e) {
//     console.error('Error', e);
//     return null
//   }
// }

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