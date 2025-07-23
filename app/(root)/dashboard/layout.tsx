// import { getLoggedInUser } from "../../lib/actions/user.actions"
// import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/navbar/Navbar";
import ClientLayoutProvider from "@/providers/sidebar.provider";
import { getServerSession } from "next-auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Acts like a middleware. Will redirect user to "/sign-in" if he is not logged in
  // Using redirect instead of router.push since we are in a server component and router.push doesn't work in a server component
  // const loggedIn = await getLoggedInUser()
  // if(!loggedIn) redirect('/sign-in')
  const session = await getServerSession(authOptions)
  console.log('Dashboard RootLayout: nextauth session data for server component', session)

  return (
    <main className="flex h-screen w-full font-inter">
      <ClientLayoutProvider>
        <LeftSidebar />

        <div className="size-full flex-col">
          <Navbar />
          {children}
        </div>
      </ClientLayoutProvider>
    </main>
  )
}
