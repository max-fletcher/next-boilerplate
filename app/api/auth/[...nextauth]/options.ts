import GithubProvider from 'next-auth/providers/github'
import CredentialProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions  } from "next-auth"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  // ** Configure one or more authentication providers
  // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
  providers: [
    // ** For github login
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // ** For plain old login
    CredentialProvider({
      // ** The name to display on the sign in form (e.g. 'Sign in with...')
      // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials
      name: 'Credentials',
      type: 'credentials', // Has to be unique across different providers if you are using multiple of the same providers

      // ** If you don't use custom pages, e.g pages: { signIn: '/login' }, this option will provide a page with the relevant HTML input fields with labels, field type, placeholder etc.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "john_doe@mail.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        console.log('credentials', credentials)
        /*
         * You need to provide your own logic here that takes the credentials submitted and returns either
         * an object representing a user or value that is false/null if the credentials are invalid.
         * For e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
         * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)
         */
        const { email, password } = credentials as { email: string; password: string }

        try {
          // Login API Call to match the user credentials and receive user data in response along with his role
          const res = await fetch(`${process.env.API_URL}/api/v1/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          })

          const data = await res.json()

          console.log('data', data, 'status', res.status)

          if (res.status === 401 || res.status === 400)
            throw new Error(JSON.stringify(data))

          if (res.status === 200) {
            /*
             * Please unset all the sensitive information of the user either from API response or before returning
             * user data below. Below return statement will set the user object in the token and the same is set in
             * the session which will be accessible all over the app.
             */

            return data
          }

          console.log('whoops')

          return null
        } catch (e: any) {
          console.log('authorize error', e)
          throw new Error(e.message)
        }
      }
    })
    // ** ...add more providers here
  ],

  // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
  session: {
    /*
     * Choose how you want to save the user session.
     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
     * If you use an `adapter` however, NextAuth default it to `database` instead.
     * You can still force a JWT session by explicitly defining `jwt`.
     * When using `database`, the session cookie will only contain a `sessionToken` value,
     * which is used to look up the session in the database.
     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
     */
    strategy: 'jwt',

    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60 // ** 30 days
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
  // ** Used to ovverride default pages that next-auth provides. Not needed right now as we will be using next-auth's default for now.
  // pages: {
  //   signIn: '/login'
  // },

  // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
  callbacks: {
    /*
     * While using `jwt` as a strategy, `jwt()` callback will be called before
     * the `session()` callback. So we have to add custom parameters in `token`
     * via `jwt()` callback to make them accessible in the `session()` callback
     */
    async jwt({ token, user, trigger, session }: any) {
      console.log('token from jwt method', token, 'user', user)


      // if (trigger === 'update') {
      //   if (session?.avatar) {
      //     token.user.avatar = session.avatar
      //   }
      // }

      // ** "user" here is the data returned from "authorize" method above
      if (user) {
        /*
         * For adding custom parameters to user in session, we first need to add those parameters
         * in token which then will be available in the `session()` callback
         */
        // token.user = user.userInfo
        token.access_token = user.access_token
      }

      return token
    },

    // ** "token" is the token data returned from jwt method above
    async session({ session, token }: any) {
      console.log('token from token method', token)
      if (token?.user) {
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        // session.user = token.user
        session.access_token = token.access_token
      }

      return session
    }
  }
}