import NextAuth from "next-auth"
import { authOptions } from "./options"

const handler = NextAuth(authOptions) // Options are coming from another file. Though you can put them here if you want.

export { handler as GET, handler as POST}