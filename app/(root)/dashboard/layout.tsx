// import { getLoggedInUser } from "../../lib/actions/user.actions"
// import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/navbar/Navbar";
import ClientLayoutProvider from "@/providers/sidebar.provider";
// import { User } from "@/types/User.types";
import { getServerSession } from "next-auth";

// Dummy data in case you want to not use nextauth
// const loggedInUser: User = {
//   id: 1,
//   name: 'John Doe',
//   email: 'john@mail.com',
//   thumbnail_url: '/profile.png', // File is in /public/profile.png
// }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Acts like a middleware. Will redirect user to "/sign-in" if he is not logged in
  // Using redirect instead of router.push since we are in a server component and router.push doesn't work in a server component
  // const loggedIn = await getLoggedInUser()
  // if(!loggedIn) redirect('/sign-in')
  const session = await getServerSession(authOptions)
  const thumbnail_url = '/profile.png' // # NOTE: using a temporary thumbnail_url. Will change later. File is in /public/profile.png
  console.log('Dashboard RootLayout: nextauth session data for server component', session)

  return (
    <main className="flex h-screen w-full font-inter">
      <ClientLayoutProvider>
        <LeftSidebar />

        <div className="size-full flex-col">
          <Navbar user={{...session?.user, thumbnail_url}} />
          {children}
        </div>
      </ClientLayoutProvider>
    </main>
  )
}
